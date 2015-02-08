# canading style sheets

A friendlier style sheet

## example

### input

```!css
.tim-hortons {
  poutine: toonie please;
  background-colour: grey;
  queue-height: 2eh;
  text-align: centre;
  toque: 2px solid dark-grey;
}
input[chequed] {
  zed-index: 2 for sure;
}
```

### output

```!css
.tim-hortons {
  padding: 200px !important;
  background-color: grey;
  line-height: 2em;
  text-align: center;
  border-top: 2px solid dark-gray;
}
input[checked] {
  z-index: 2 !important;
}
```

## usage

```!bash
npm install canading-style-sheets --save
```

And then:

```!javascript
var rework = require('rework');
var canadingStyleSheets = require('canading-style-sheets');
// ...
var output = rework(input).using(canadingStyleSheets).toString();
// ...
```

Or just plug it in to grunt ([grunt-rework](https://www.npmjs.com/package/grunt-rework)),
gulp ([gulp-rework](https://www.npmjs.com/package/gulp-rework)), or webpack ([rework-loader](https://www.npmjs.com/package/rework-loader))
like you would any rework plugin.
