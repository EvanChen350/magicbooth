module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    // project: "./tsconfig.json",
  },
  plugins: ['import'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-filename-extension': [
      // jsx形式のファイル拡張子をjsxもしくはtsxに限定
      2,
      {
        //extensions: ['.jsx', '.tsx'],
      },
    ],
    'no-nested-ternary': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'always', children: 'ignore', propElementValues: 'always' },
    ],
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '{react, react-dom/**, react-router-dom}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
          },
          {
            pattern: '@/app/**',
            group: 'parent',
          },
          {
            pattern: '@/assets/**',
            group: 'parent',
          },
          {
            pattern: '@/components/**',
            group: 'parent',
          },
          {
            pattern: '@/consts/**',
            group: 'parent',
          },
          {
            pattern: '@/hooks/**',
            group: 'parent',
          },
          {
            pattern: '@/lib/**',
            group: 'parent',
          },
          {
            pattern: '@/types/**',
            group: 'parent',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
};
