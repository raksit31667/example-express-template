module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
    ],
    plugins: [
      "babel-plugin-transform-typescript-metadata",
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ["."],
          alias: {
            "src": "./src",
            "tests": "./__tests__",
          }
        }
    
      ],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/proposal-class-properties", { "loose": true }]
    ],
  };