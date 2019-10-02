import { Singleton } from './singleton.decorator';

describe('Singleton decorator', () => {
  const created = [];

  function test(name: string, ClassDef: any) {
    it(name, () => {
      const first = new ClassDef();
      expect(first).toBeDefined();

      const again = new ClassDef();
      expect(again).toBe(first);

      for (const before of created) {
        expect(again).not.toBe(before);
      }

      created.push(again);
    });
  }

  @Singleton()
  class SomeDummyClass { }

  test('should be created an instance of some class', SomeDummyClass);

  @Singleton()
  class AnotherDummyClass { }

  test('should be created an instance of another class', AnotherDummyClass);
});
