export const getTime = (date: string): number => {
  return new Date(date).getTime();
};

export const friendlyDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
