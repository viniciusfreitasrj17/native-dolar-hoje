module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "es2020": true,
        "node": true
    },
    "extends": [
      "plugin:react/recommended",
      "prettier/@typescript-eslint",
      "standard",
    ],
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'never'
        }
      ]
    }
};
