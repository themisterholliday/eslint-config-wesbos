module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'no-debugger': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      1,
      {
        ignoreSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        semi: true,
        trailingComma: 'all',
        'jsx-singleQuote': false,
        tabWidth: 2,
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  plugins: ['html', 'prettier', 'react-hooks', '@typescript-eslint'],
  overrides: [
    {
      extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        // Can I remove these now?
        ecmaFeatures: {
          impliedStrict: true,
          classes: true,
        },
      },
      env: {
        browser: true,
        node: true,
        jquery: true,
        jest: true,
      },
      rules: {
        'no-debugger': 0,
        'no-alert': 0,
        'no-await-in-loop': 0,
        'no-return-assign': ['error', 'except-parens'],
        'no-restricted-syntax': [
          2,
          'ForInStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        'no-unused-vars': [
          1,
          {
            ignoreSiblings: true,
            argsIgnorePattern: 'res|next|^err',
          },
        ],
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
          },
        ],
        'arrow-body-style': [2, 'as-needed'],
        'no-unused-expressions': [
          2,
          {
            allowTaggedTemplates: true,
          },
        ],
        'no-param-reassign': [
          2,
          {
            props: false,
          },
        ],
        'no-console': 0,
        'import/prefer-default-export': 0,
        import: 0,
        'func-names': 0,
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'max-len': 0,
        'import/extensions': 0,
        'no-underscore-dangle': 0,
        'consistent-return': 0,
        'react/display-name': 1,
        'react/no-array-index-key': 0,
        'react/react-in-jsx-scope': 0,
        'react/prefer-stateless-function': 0,
        'react/forbid-prop-types': 0,
        'react/no-unescaped-entities': 0,
        'jsx-a11y/accessible-emoji': 0,
        'react/require-default-props': 0,
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.jsx'],
          },
        ],
        radix: 0,
        'no-shadow': [
          2,
          {
            hoist: 'all',
            allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
          },
        ],
        quotes: [
          2,
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: true,
          },
        ],
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            printWidth: 80,
            semi: true,
            trailingComma: 'all',
            'jsx-singleQuote': false,
            tabWidth: 2,
          },
        ],
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': [
          'warn',
          {
            aspects: ['invalidHref'],
          },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/no-parameter-properties': 'off',
      },
      plugins: ['html', 'prettier', 'react-hooks', '@typescript-eslint'],
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
