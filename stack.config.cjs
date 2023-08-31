module.exports = {
  /**
     * PM2 Process Manager configuration section
     * Use `pm2 start stack.config.js`
     * https://www.npmjs.com/package/pm2
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
  apps: [
    // Seeding Service
    {
      name: 'SlashFeed News',
      script: './bin.js',
      min_uptime: '5s',
      max_restarts: 10,
      kill_timeout: 30000,
      args: ['--color'],
      max_memory_restart: '400M'
    }
  ]
}
