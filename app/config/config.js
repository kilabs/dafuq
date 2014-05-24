var config = {
  development: {
    port: 3000,
    host: "vanbungkring.dev",
  },
  test: {
    port: 3000,
    host: "vanbungkring.dev",
  },
  production: {
    port: 3001,
    host: "vanbungkring.dev",
  }
}
module.exports = config[process.env.NODE_ENV || 'development'];