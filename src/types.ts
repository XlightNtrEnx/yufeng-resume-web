export type EnsurePropertyExists<T, K extends keyof any> = K extends keyof T
  ? T
  : never;
