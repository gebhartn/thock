export const apply = <T>(x: T, f: (x: T) => T): T => f(x);

export const compose = <T>(...funcs: Array<(x: T) => T>) => {
  return (x: T): T => funcs.reduceRight(apply, x);
};
