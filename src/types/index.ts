export type EnsurePropertyExists<T, K extends keyof T> = K extends keyof T
  ? T
  : never;

export type OptionalKeys<T, K extends keyof T> = Partial<Pick<T, K>> &
  Omit<T, K>;
