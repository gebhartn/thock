export const apply = (x: any, f: Function) => f(x);

export const compose = (...funcs: Array<Function>) => {
  return (x: any) => funcs.reduceRight(apply, x);
};
