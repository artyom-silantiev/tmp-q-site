<script setup lang="ts">
import { createLoginForm } from 'src/models/guest';

const form = createLoginForm();

async function onSubmit() {
  const res = await form.submit();
}
function onReset() {
  form.resetModel();
}

defineEmits<{
  (e: 'submitSuccess'): void;
}>();
</script>

<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <div v-if="form.errorMessage.value" class="text-negative">
      {{ form.errorMessage.value }}
    </div>

    <q-input
      filled
      v-model="form.model.email"
      name="email"
      label="Login email"
      hint="Your login email"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      bottom-slots
      :error="form.isErrorField('email')"
    >
      <template #error>
        <span v-if="form.isErrorField('email')">
          <div
            v-for="(error, index) in form.getFieldErrors('email')"
            :key="index"
          >
            {{ error.code }}
          </div>
        </span>
      </template>
    </q-input>

    <q-input
      filled
      v-model="form.model.password"
      name="password"
      label="Login password"
      hint="Password"
      lazy-rules
      type="password"
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <div>
      <q-btn
        label="Submit"
        type="submit"
        color="primary"
        :disabled="form.busy.value"
      />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>
