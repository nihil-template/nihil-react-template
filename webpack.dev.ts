import path from 'path';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration  } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: path.resolve(__dirname, 'src', 'index'),
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/store': path.resolve(__dirname, 'src/store/'),
      '@/images': path.resolve(__dirname, 'src/images/'),
      '@/styles': path.resolve(__dirname, 'src/styles/'),
      '@/hooks': path.resolve(__dirname, 'src/hooks/'),
      '@/reducers': path.resolve(__dirname, 'src/reducers/'),
      '@/utils': path.resolve(__dirname, 'src/utils/'),
      '@/data': path.resolve(__dirname, 'src/data/'),
      '@/layouts': path.resolve(__dirname, 'src/layouts/'),
      '@/atoms': path.resolve(__dirname, 'src/atoms/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules'),
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: [ 'last 2 chrome versions', ], },
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
            '@emotion/babel-preset-css-prop',
          ],
          plugins: [ [ '@emotion/babel-plugin', { sourceMap: true, }, ], require.resolve('react-refresh/babel'), ],
        },
      },
      {
        test: /\.(css|scss)/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/'),
    publicPath: '/build/',
    overlay: true,
    port: 3000,
    hot: true,
    open: true,
  },
};

export default config;