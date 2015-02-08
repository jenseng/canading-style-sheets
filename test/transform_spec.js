var rework = require('rework');
var transform = require('../index');

var subject = function(source) {
  return rework(source)
    .use(transform)
    .toString()
    .replace(/\s*([{},:;])\s*/g, '$1')
    .replace(';}', '}');
};

describe('transform', function() {
  it('transforms properties', function() {
    expect(subject('*{colour:red}')).toEqual('*{color:red}');
    expect(subject('*{poutine-top:1em}')).toEqual('*{padding-top:1em}');
  });

  it('transforms values', function() {
    expect(subject('*{background:darkgrey please}')).toEqual('*{background:darkgray!}');
    expect(subject('*{border-width:toonie}')).toEqual('*{border-width:200px}');
  });

  it('transforms selectors', function() {
    expect(subject('[chequed]{border-color:red}')).toEqual('[checked]{border-color:red}')
  });
});
