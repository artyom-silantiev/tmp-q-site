import { api } from 'src/boot/axios';
import { Form } from 'src/lib/form';
import { TRes } from 'src/types/api';
import { User } from './user';

/*
  H
*/

/*
  API
*/

const API_PATH = '/api/guest';

/*
  FORMs
*/

export function createLoginForm() {
  const defaultModel = {
    email: '',
    password: '',
  };

  async function submit(model: typeof defaultModel): TRes<{
    accessToken: string;
    user: User;
  }> {
    return api.post('/guest/login', model);
  }

  return new Form(defaultModel, submit);
}
