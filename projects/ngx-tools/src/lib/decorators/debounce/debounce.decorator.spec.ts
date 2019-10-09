import { Debounce } from './debounce.decorator';
import { Random } from '../../helpers/random/random.helper';

describe('Debounce decorator', () => {
  it('should be called once 150ms after the last call', (done) => {
    class SomeDummyClass {
      public counter = 0;

      @Debounce(150, false)
      public increment() {
        this.counter++;
      }
    }

    const dummy = new SomeDummyClass();
    const amount = Random.number(100, 300);
    let finished = 0;

    for (let idx = 0; idx < amount; idx++) {
      setTimeout(() => {
        dummy.increment();
        expect(dummy.counter).toBe(0);

        if (++finished === amount) {
          setTimeout(() => {
            expect(dummy.counter).toBe(1);
            done();
          }, 150);
        }
      }, Random.number(0, 150));
    }
  });

  it('should be called immediately once time', (done) => {
    class SomeDummyClass {
      public counter = 0;

      @Debounce(150, true)
      public increment() {
        this.counter++;
      }
    }

    const dummy = new SomeDummyClass();
    const amount = Random.number(100, 300);
    let finished = 0;

    for (let idx = 0; idx < amount; idx++) {
      setTimeout(() => {
        dummy.increment();
        expect(dummy.counter).toBe(1);

        if (++finished === amount) {
          setTimeout(() => {
            expect(dummy.counter).toBe(1);
            done();
          }, 150);
        }
      }, Random.number(0, 150));
    }
  });
});
