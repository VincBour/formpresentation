module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react'],
  plugins: [
    [
      'transform-imports', {
        // 'react-dom': {
        //   transform: 'react-dom/render',
        //   preventFullImport: true,
        // },
      },
    ],
  ],
};
