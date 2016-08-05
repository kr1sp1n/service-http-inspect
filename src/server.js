const http = require('http');
const Promise = require('bluebird');
const handleRequest = require('./handleRequest');

module.exports = (config) => {
  const log = config.log;
  const server = http.createServer(handleRequest({ log }));
  server.start = () => {
    return new Promise((resolve, reject) => {
      server.listen(config.port, (err) => {
        if (err) return reject(err);
        log.info(`server listening on port ${config.port}`);
        resolve();
      });
    });
  };
  return server;
};
