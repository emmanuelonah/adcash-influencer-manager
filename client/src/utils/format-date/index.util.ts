export function formatDate(date: string): string {
  const parsedDate = new Date(date);

  return parsedDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
