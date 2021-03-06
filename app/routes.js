const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
  require('./routes/0-1/routes.js')(router);
  require('./routes/0-1/project-kick-off.js')(router);

  require('./routes/0-2/routes.js')(router);
  require('./routes/0-2/project-kick-off.js')(router);
  require('./routes/0-2/external-stakeholder-kick-off.js')(router);
  require('./routes/0-2/process-conversion-grant.js')(router);
  require('./routes/0-2/local-authority-questionnaire.js')(router);
  require('./routes/0-2/land-questionnaire-registry-title.js')(router);
  require('./routes/0-2/additional-documents.js')(router);

  require('./routes/0-3/routes.js')(router);
  require('./routes/0-3/project-kick-off.js')(router);
  require('./routes/0-3/external-stakeholder-kick-off.js')(router);
  require('./routes/0-3/process-conversion-grant.js')(router);
  require('./routes/0-3/local-authority-proforma.js')(router);
  require('./routes/0-3/land-questionnaire-registry-title.js')(router);
  require('./routes/0-3/additional-documents.js')(router);

module.exports = router
