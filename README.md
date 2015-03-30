# parse-selector

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Pass in a selector will return an array which describes the parts of the selector

## Usage

[![NPM](https://nodei.co/npm/parse-selector.png)](https://www.npmjs.com/package/parse-selector)

```javascript
var parse = require('parse-selector');

var info = parse('div#id div.classA .classB');

// info will look like this:
// [
//     {
//         el: 'div',
//         id: '#id'
//     },
//     {
//         el: 'div',
//         className: '.classA'
//     },
//     {
//         className: '.classB'
//     }
// ]
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/parse-selector/blob/master/LICENSE.md) for details.
