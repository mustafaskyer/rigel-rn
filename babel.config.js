module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        alias: {
          root: './App',
          screens: './App/screens',
          components: './App/components',
          styles: './App/assets/styles',
          imgs: './App/assets/imgs',
          svg: './App/assets/imgs',
          langs: './App/langs/svg',
          'redux-actions': './App/redux/actions',
          'redux-reducer': './App/redux/reducers',
          'redux-types': './App/redux/types/index',
          configs: './App/configs',
          api: './App/redux/apis/',
          util: './App/util',
          config: './app.config.js',
        },
        extensions: ['.js'],
      },
    ],
  ],
};
