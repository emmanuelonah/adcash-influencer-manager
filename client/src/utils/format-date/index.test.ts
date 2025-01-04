import { formatDate } from './index.util';

describe('formatDate', () => {
  it('should format the date correctly', () => {
    const date = '2023-10-10T14:48:00.000Z';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe(
      new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  });

  it('should handle invalid date strings gracefully', () => {
    const date = 'invalid-date';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('Invalid Date');
  });

  it('should handle empty date strings gracefully', () => {
    const date = '';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('Invalid Date');
  });
});
