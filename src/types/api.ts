import { AxiosResponse } from 'axios';

export type TRes<T> = Promise<AxiosResponse<T>>;
