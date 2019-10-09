# NgxTools

Usefull decorators and helpers for Angular project.

[![npm version](https://badge.fury.io/js/%40dikman%2Fngx-tools.svg)](https://badge.fury.io/js/%40dikman%2Fngx-tools)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Install](#install)
- [Usage](#usage)
  - [Decorators](#decorators)
    - [Debounce](#debounce)
    - [Singleton](#singleton)
  - [Random Helper](#random-helper)
    - [number(min, max)](#numbermin-max)
    - [color()](#color)
    - [string([length])](#stringlength)
  - [Checksum Helper](#checksum-helper)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

`npm install --save @dikman/ngx-tools`

## Usage

Decorators are exported as start case.

`import { Debounce } from '@dikman/ngx-tools';`

### Decorators

These decorators are included in the package.

-   `Debounce`
-   `Singleton`

#### Debounce

Decorator that creates a debounced function that delays invoking function
until after wait milliseconds have elapsed since the last time the debounced
function was invoked.

```typescript
import { Debounce } from '@dikman/ngx-tools';

export class ExampleComponent {
    @Debounce()
    protected searchSomeData(): void {
        ...
    }
}
```

#### Singleton

Decorator that restricts the instantiation of a class to one "single"
instance. This is useful when exactly one object is needed to coordinate
actions across the system.

```typescript
    import { Singleton } from '@dikman/ngx-tools';

    @Injectable({
        providedIn: 'root'
    })
    @Singleton()
    export class ExampleService {
        constructor() {
            ...
        }
    }
```

### Random Helper

Collection of functions for generating a random value of primitive types.

#### number(min, max)
  
Generates a random integer from a given range (a result can include
at both the minimum and the maximum of the range).

```typescript
    import { Random } from '@dikman/ngx-tools';

    console.log(Random.number(5, 25));
```

#### color()

Generates a random color as a string starts with the '#' char.

```typescript
    import { Random } from '@dikman/ngx-tools';

    console.log(Random.color());
```

#### string([length])

Generates a random string of a given length.

```typescript
    import { Random } from '@dikman/ngx-tools';

    console.log(Random.string(32));
```

### Checksum Helper

Calculates checksum based on 24 bits polynom.

```typescript
    import { crc24 } from '@dikman/ngx-tools';

    console.log(crc24('Some string'));
```
