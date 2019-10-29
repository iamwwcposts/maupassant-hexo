const version = require('../package.json').version

hexo.extend.helper.register('version', function () {
  return version
})

hexo.on('generateBefore', function () {
  const rootConfig = hexo.config
  if (hexo.locals.get) {
    const data = hexo.locals.get('data')
    data && data.config && (hexo.theme.config = data.config)
  }
  hexo.theme.config.rootConfig = rootConfig
})