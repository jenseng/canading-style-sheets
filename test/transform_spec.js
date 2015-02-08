var rework = require('rework');
var transform = require('../index');

var subject = function(source) {
  return normalize(
    rework(source)
    .use(transform)
    .toString()
  );
};

var normalize = function(source) {
  return source
    .replace(/\s*([{},:;])\s*/g, '$1')
    .replace(';}', '}');
};

describe('transform', function() {
  it('transforms properties', function() {
    expect(subject('*{colour:red}')).toEqual('*{color:red}');
    expect(subject('*{poutine-top:1em}')).toEqual('*{padding-top:1em}');
  });

  it('transforms values', function() {
    expect(subject('*{background:darkgrey please}')).toEqual('*{background:darkgray !important}');
    expect(subject('*{border-width:toonie}')).toEqual('*{border-width:200px}');
  });

  it('transforms selectors', function() {
    expect(subject('[chequed]{border-color:red}')).toEqual('[checked]{border-color:red}')
  });

  it('performs multiple transformations', function() {
    expect(subject(
      '.tim-hortons {' +
        'poutine: toonie please;' +
        'background-colour: grey;' +
        'queue-height: 2eh;' +
        'text-align: centre;' +
        'toque: 2px solid dark-grey;' +
      '}' +
      'input[chequed] {' +
        'zed-index: 2 for sure;' +
      '}')
    ).toEqual(normalize(
      '.tim-hortons {' +
        'padding: 200px !important;' +
        'background-color: gray;' +
        'line-height: 2em;' +
        'text-align: center;' +
        'border-top: 2px solid dark-gray;' +
      '}' +
      'input[checked] {' +
        'z-index: 2 !important;' +
      '}'
    ));
  });
});
