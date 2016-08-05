const uuid = require('uuid');

module.exports = (config) => {
  const log = config.log;
  return (req, res) => {
    const requestId = uuid.v1();
    res.end(requestId);
    const data = {
      id: requestId,
      headers: req.headers,
      path: req.url,
      method: req.method
    };
    var body = '';
    req.on('data', (chunk) => body += chunk.toString());
    req.on('end', ()=> {
      const group_id = req.headers['x-group-id'];
      if (group_id) data.group_id = group_id;
      if (body.length > 0) {
        data.body = body;
        if (req.headers['content-type'] === 'application/json') {
          data.body = JSON.parse(body);
        }
      }
      log.info({ request: data });
    });
  };
};
