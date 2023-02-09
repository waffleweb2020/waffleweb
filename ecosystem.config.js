module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        port:8080,
        sitename:'React.js Website'
      },
      env_production: {
        NODE_ENV: 'production',
        port:8080,
        sitename:'React.js Website'
      }
    }
  ]
}
