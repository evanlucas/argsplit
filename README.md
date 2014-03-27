# argsplit

Convert a string of arguments into an array

## Install

```bash
$ npm install --save argsplit
```

## Tests

```bash
$ npm test
```

## Use cases

If you need to `spawn` a command that is given as a string

## Example

```js
var argsplit = require('argsplit')
var input = 'npm config set init.author.name "Evan Lucas" --verbose'
var out = argsplit(input)
console.log(out)
var cmd = out.shift()   // => 'npm'
spawn(cmd, out)
```

Will return the following:

```js
['npm',
 'config',
 'set',
 'init.author.name',
 '"Evan Lucas"',
 '--verbose' ]
```
