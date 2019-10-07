import { Random } from './random.helper';

describe('Random helper', () => {
    it('should generate a random integer value from the fixed range', () => {
        const value = Random.number(0, 10);
        expect(Number.isInteger(value)).toBe(true);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(10);
    });

    it('should generate a random color as a string starts with the \'#\' char', () => {
        const value = Random.color();
        expect(value).toMatch(/^#[0-9a-f]{6}$/);
    });

    it('should generate a random string of the fixed length', () => {
        const value = Random.string(256);
        expect(value).toString();
        expect(value).toMatch(/^[0-9a-z]{256}$/);
    });
});
