import { colors } from './index';

describe('Theme', () => {
  it('should include all color tokens', () => {
    expect(colors.primary400).toBe('#1e90ff');
    expect(colors.error400).toBe('#721c24');
    expect(colors.error300).toBe('#f8d7da');
    expect(colors.error200).toBe('#f5c6cb');
    expect(colors.success400).toBe('#155724');
    expect(colors.success300).toBe('#d4edda');
    expect(colors.success200).toBe('#c3e6cb');
    expect(colors.dark400).toBe('#000');
    expect(colors.dark300).toBe('#0f0f0f');
    expect(colors.white400).toBe('#fff');
    expect(colors.white300).toBe('#edeef0');
  });
});
