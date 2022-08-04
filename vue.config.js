module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/add': {
        target: 'https://spring-mybatis-1659598207454.azurewebsites.net',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
