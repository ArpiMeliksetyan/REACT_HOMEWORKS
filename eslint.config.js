module.exports = [
  {
    globals: {
      JSX: true,
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "react-app",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "react-app/jest",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    ignorePatterns: ["*.__tests__.ts", "*.__tests__.tsx", "base64.ts"],

    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "array-callback-return": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
