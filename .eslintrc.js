module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Se você estiver usando TypeScript
    'plugin:prettier/recommended', // Integração com o Prettier
  ],
  parser: '@typescript-eslint/parser', // Se você estiver usando TypeScript
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint', // Se você estiver usando TypeScript
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error', // Exibir erros do Prettier como erros do ESLint
    // Outras regras do ESLint podem ser configuradas aqui
  },
};
