export type EnsurePropertyExists<T, K extends keyof T> = K extends keyof T
  ? T
  : never;
