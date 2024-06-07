import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import WebpackDevServer from 'webpack-dev-server';

new WebpackDevServer(webpack(webpackConfig), {
  contentBase: 'example/',
  stats: {
    assets: true,
    chunks: false,
    colors: true,
    hash: false,
    timings: false,
    version: false,
  },
}).listen(4080, 'localhost', () => {
  console.log('http://localhost:4000/');
});
