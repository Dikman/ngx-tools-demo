/**
 * Decorator that creates a debounced function that delays invoking function
 * until after wait milliseconds have elapsed since the last time the debounced
 * function was invoked.
 *
 * @param wait At the end of the wait interval, the function will be called with
 *  the arguments that were passed most recently to the debounced function.
 *
 * @param immediate Pass true for the immediate argument to cause debounce to
 *  trigger the function on the leading instead of the trailing edge of the wait
 *  interval. Useful in circumstances like preventing accidental double-clicks
 *  on a "submit" button from firing a second time.
 */
export function Debounce(wait: number = 150, immediate: boolean = false): MethodDecorator {
    return function decorator(target: any, name: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = descriptor.value;
        let watchdog = null;

        descriptor.value = function debounceMethod(...args: any) {
            const context = this;

            const later = function deferredCall() {
                watchdog = null;

                if (!immediate) {
                    originalMethod.apply(context, args);
                }
            };

            const callNow = immediate && !watchdog;

            clearTimeout(watchdog);
            watchdog = setTimeout(later, wait);

            if (callNow) {
                originalMethod.apply(context, args);
            }
        };

        return descriptor;
    };
}
