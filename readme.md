# has-properties [![Build Status](https://travis-ci.org/hemanth/has-properties.svg?branch=master)](https://travis-ci.org/hemanth/has-properties)

> Checks if the given object has the required/mandatory properties.

## Install

```sh
$ npm install --save has-properties
```

## Usage

```javascript
var positive = {
  name: 'Kitty',
  age: 42,
  type: 'Cat'
};

var negative = {
  name: 'Kitty',
  age: 24
}

var mandatory = ['name', 'type'];

hasProperties(positive, mandatory) // true

hasProperties(negative, mandatory) // false

```


## License

MIT © [Hemanth.HM](http://h3manth.com)
