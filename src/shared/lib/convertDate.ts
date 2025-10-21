export const converDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('de-DE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};
