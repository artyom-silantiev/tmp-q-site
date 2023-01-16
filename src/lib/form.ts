import axios from 'axios';
import { ref, reactive } from 'vue';

type FieldsHasErrors = {
  [fieldName: string]: {
    code: string;
    message: string;
  }[];
}

type FormModelParam = null | string | number | FormModelParam[] | FormModel;
type FormModel = {
  [key: string]: FormModelParam;
}

export class Form<R, T extends FormModel> {
  busy = ref(false);
  hasError = ref(false);
  errorMessage = ref('');
  fieldsHasErrors = ref<FieldsHasErrors>({});
  public model = {} as T;

  constructor(private defaultModel: T, private submitHandler: (model: T) => R) {
    this.model = reactive({ ...defaultModel } as object) as T;
  }

  async submit() {
    console.log('submit');

    this.clearErrors();
    this.busy.value = true;

    try {
      const res = await this.submitHandler(this.model);
      return res;
    } catch (error) {
      this.hasError.value = true;

      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data;

        if (typeof errorData.message === 'string') {
          this.errorMessage.value = errorData.message;

          console.log('this.errorMessage.value', this.errorMessage.value);
        } else if (errorData.fieldsHasErrors) {
          this.fieldsHasErrors.value = errorData.fieldsHasErrors as FieldsHasErrors;
        }
      }
    }

    this.busy.value = false;
  }

  isErrorField(fieldName: string) {
    return this.fieldsHasErrors.value[fieldName] && this.fieldsHasErrors.value[fieldName].length > 0;
  }

  getFieldErrors(fieldName: string) {
    if (this.fieldsHasErrors.value[fieldName]) {
      return this.fieldsHasErrors.value[fieldName];
    } else {
      return [];
    }
  }

  clearErrors() {
    this.hasError.value = false;
    this.errorMessage.value = '';
    this.fieldsHasErrors.value = {};
  }

  resetModel() {
    for (const key in this.defaultModel) {
      this.model[key] = this.defaultModel[key];
    }
  }
}
