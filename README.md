Here are the various things you can try:

I ran these examples with and without the following
```json
    "@std/esm": {
        "esm": "js",
        "cjs": true
    }
```

in `package.json`.

0.19.3
======
I'm using 0.19.3 for these. See below for 0.19.5.

`node run.js` works with or without the `package.json` entries.

`npm run test-index`

Runs with the entries in `package.json` but errors on the coverage as described in the issue.

`npm run test-other`

Same as above.

When I remove the entries from `package.json`, the `test-other` predictably fails. However, so does the `test-index`, despite it starting with

```js
require = require( "@std/esm" )( module, { esm: 'js', cjs: true } );
module.exports = require( './src/thing' ).default;
```
Same options as the ones that were in the `package.json` file.

0.19.5
======
Running `npm run test-index` with the `package.json` entries, I get this:
```
> nyc --reporter=lcov --reporter=text-lcov --require=@std/esm mocha test/index-test.js



  JD will fix all the things
    ✓ should work a lot


  1 passing (5ms)

TN:
SF:./index.js
FNF:0
FNH:0
DA:1,1
DA:2,1
LF:2
LH:2
BRF:0
BRH:0
end_of_record
TN:
SF:./other.js
FN:3,world
FNF:1
FNH:1
FNDA:1,world
DA:5,1
LF:1
LH:1
BRF:0
BRH:0
end_of_record
TN:
SF:./thing.js
FN:3,say
FNF:1
FNH:1
FNDA:1,say
DA:5,1
DA:6,1
LF:2
LH:2
BRDA:5,0,0,0
BRDA:5,0,1,1
BRF:2
BRH:1
end_of_record
```

Anyway, I'm sure you can think of other fun things to test. Let me know if there is anything else I can do to help. As far as I'm concerned, the `@std/esm` module is the only thing that's making proper modules worth using in node.js. There is no way I'm renaming all my source code to `.mjs` so, "Help us, JD-Wan, you're our only hope."
