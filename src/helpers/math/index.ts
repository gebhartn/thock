export const add = (a: number) => {
  return (b: number): number => a + b;
};

export const addOne = add(1);
