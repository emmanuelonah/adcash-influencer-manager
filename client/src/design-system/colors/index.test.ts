import { colors } from './index';

describe('Theme', () => {
  it('should include all color tokens', () => {
    expect(colors.primary400).toBe('#1e90ff');

    expect(colors.error500).toBe('#2c0b0e');
    expect(colors.error400).toBe('#c82333');
    expect(colors.error300).toBe('#d32f3f');
    expect(colors.error200).toBe('#2a2a2a');
    expect(colors.error100).toBe('#842029');
    expect(colors.error50).toBe('#ea868f');

    expect(colors.success600).toBe('#0f5132');
    expect(colors.success500).toBe('#051b11');
    expect(colors.success400).toBe('#102319');
    expect(colors.success300).toBe('#1a2f1e');
    expect(colors.success200).toBe('#51b380');
    expect(colors.success100).toBe('#75b798');

    expect(colors.dark500).toBe('rgba(0, 0, 0, 0.95)');
    expect(colors.dark400).toBe('#000');
    expect(colors.dark300).toBe('#0f0f0f');
    expect(colors.dark200).toBe('#1f1f1f');
    expect(colors.dark100).toBe('#2f2f2f');
    expect(colors.dark50).toBe('#1d1d1d');
    expect(colors.dark40).toBe('#171717');

    expect(colors.ash400).toBe('#797979');

    expect(colors.white400).toBe('#fff');
    expect(colors.white300).toBe('#edeef0');
  });
});
