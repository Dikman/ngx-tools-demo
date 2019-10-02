/**
 * A list of controlled of classes constructors
 *
 * @ignore
 */
const controlled = new WeakMap();

/**
 * Decorator that restricts the instantiation of a class to one "single"
 * instance. This is useful when exactly one object is needed to coordinate
 * actions across the system.
 *
 * @usageNotes
 *
 * ### Mark a service as a singleton class
 *
 * ```ts
 * @Injectable({
 *   providedIn: 'root'
 * })
 * @Singleton()
 * export class ExampleService {
 *   constructor() {
 *     ...
 *   }
 * }
 * ```
 */
export function Singleton(): ClassDecorator {
  return function SingletonDecorator(constructor: any): any {
    return function SingletonConstructor(...args: any): any {
      if (controlled.has(constructor)) {
        console.warn('The class ' + constructor.name + ' already has ' +
          'an instance, it is impossible to create a new instance for ' +
          'the class marked as a forced singleton.');
        return controlled.get(constructor);
      }

      const instance = new constructor(...args);
      controlled.set(constructor, instance);
      return instance;
    };
  };
}
