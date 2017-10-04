# with-tmp-dir

Little test helper that wraps a test function and provides it a temporary directory.
The directory gets automatically removed after the test has run. In case the test failed (threw or return a rejected promise),
the directory stays in place and its path gets `console.log`ed so you can investigate.

## Usage

```js
const withTmpDir = require('with-tmp-dir');

it('Tests something amazing', withTmpDir((path) => {
    // Do some testing in the temporary directory
});
```

## Configuring created directory

You can control where the directory will get created and what name it will have
by setting the appropriate [`tmp-promise` options][tmp-promise-options]:
 - for all withTmpDir call by setting properties on the `withTmpDir` function
 - for a specific call by providing an `Object` as 2nd argument (its properties will be merged with the default ones)

[tmp-promise-options]: https://www.npmjs.com/package/tmp-promise#options
