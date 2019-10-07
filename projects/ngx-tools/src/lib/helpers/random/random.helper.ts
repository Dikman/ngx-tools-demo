/**
 * Collection of functions for generating a random value of primitive types.
 */
export abstract class Random {

    /**
     * Generates a random integer from a given range (a result can include
     * at both the minimum and the maximum of the range).
     *
     * @param min Low integer value of the range
     * @param max High integer value of the range
     */
    static number(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generates a random color as a string starts with the '#' char.
     */
    static color(): string {
        return '#' + ('000000' + Random.number(0, 0xFFFFFF).toString(16)).slice(-6);
    }

    /**
     * Generates a random string of a given length.
     *
     * @param length Length of a required string
     */
    static string(length: number = 32): string {
        let str = '';

        do {
            str += Math.random().toString(36).slice(2);
        } while (str.length < length);

        return str.slice(-length);
    }

}
