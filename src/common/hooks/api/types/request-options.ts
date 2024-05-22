export interface GetOptions {
  endpoint?: string;
  query?: string;
  path?: string;
}

export interface PostOptions extends GetOptions {
  data?: object;
}

export interface DeleteOptions extends GetOptions {}

export interface PatchOptions extends PostOptions {}
