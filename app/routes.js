const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
  require('./routes/0-1/routes.js')(router);
  require('./routes/0-1/project-kick-off.js')(router);

  require('./routes/0-2/routes.js')(router);
  require('./routes/0-2/project-kick-off.js')(router);
  require('./routes/0-2/external-stakeholder-kick-off.js')(router);
  require('./routes/0-2/process-conversion-grant.js')(router);

module.exports = router
