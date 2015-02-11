var suggestions = [
  [/behaviour/i,    'behavior'],
  [/centre/i,       'center'],
  [/chequed/i,      'checked'],
  [/cheque(?!d)/i,  'check'],
  [/colour/i,       'color'],
  [/dialogue/i,     'dialog'],
  [/eh/i,           'em'],
  [/grey/i,         'gray'],
  [/loonie/i,       '100px'],
  [/poutine/i,      'padding'],
  [/queue/i,        'line'],
  [/rotateZed/i,    'rotateZ'],
  [/scaleZed/i,     'scaleZ'],
  [/toonie/i,       '200px'],
  [/toque/i,        'border-top'],
  [/translateZed/i, 'translateZ'],
  [/zed-index/i,    'z-index'],
  [/ +for sure$/i,  ' !important'],
  [/ +please$/i,    ' !important'],
  [/ +sorry$/i,     ' !important']
];

var transform = function(string) {
  suggestions.forEach(function(pair) {
    string = string.replace(pair[0], pair[1]);
  });
  return string;
};

module.exports = function(ast, reworkInstance) {
  ast.rules.forEach(function (rule) {
    if (rule.type != 'rule') return;

    rule.selectors = rule.selectors.map(transform);

    rule.declarations.forEach(function (declaration, index) {
      declaration.property = transform(declaration.property);
      declaration.value = transform(declaration.value);
    });
  });
};
