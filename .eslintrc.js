module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "object-shorthand": ["error", "methods"],
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "curly": "error",
    "indent": ["error", 4, {"SwitchCase": 1}],
    "no-underscore-dangle": ["error", { "allowAfterThis": true, "allowAfterSuper": true }],
    "class-methods-use-this": "off",
    "prefer-arrow-callback": "off",
    "func-names": ["error", "never"],
    "prefer-template": "off", // We have to turn it off, because it fixes things in a terrible way
    "no-continue": "off",
    "no-restricted-syntax": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": false }],
    "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        // Ignore function traling comas for the node files (they break the link).
        "functions": "ignore"
    }],
    "max-len": ["error", {"code": 150}],
    "no-unused-vars": ["error", { "varsIgnorePattern": "h|render", "argsIgnorePattern": "props|state|status|xhr|err|error" }],
    "import/no-named-as-default-member": "off",
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
