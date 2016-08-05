const bole = require('bole');

module.exports = () => {
  bole.output({
    level: 'info',
    stream: process.stdout
  });
  const log = bole('service-http-inspect');
  const port = process.env.PORT || 3000;
  return { log, port };
};
