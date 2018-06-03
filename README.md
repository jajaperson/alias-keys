# alias-keys
A simple method for aliasing values in objects

## Usage
First, install the package and add it to your dependencies.

```shell
$ npm install alias-keys
```

Then, require the module within your project,

```javascript
const aliased = require('alias-keys');
```

and create an object with alias keys in an `aliases` array property of the corresponding value.

```javascript
let object = {
  'javascript': {
    fileExtension: '.js',
    aliases: ['js']
  },
  'c-sharp': {
    fileExtension: '.cs',
    aliases: ['c#']
  }
}

console.log(aliased(object)('javascript'))
// -> { fileExtension: '.js', aliases: ['js'] }

console.log(aliased(object)('js'))
// -> { fileExtension: '.js', aliases: ['js'] }
```
