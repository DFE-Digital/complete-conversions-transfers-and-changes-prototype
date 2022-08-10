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

  require('./routes/0-3/project-kick-off.js')(router);
  require('./routes/0-3/external-stakeholder-kick-off.js')(router);
  require('./routes/0-3/process-conversion-grant.js')(router);
  require('./routes/0-3/land-questionnaire-registry-title.js')(router);
  require('./routes/0-3/additional-documents.js')(router);
  require('./routes/0-3/routes.js')(router);

  require('./routes/0-4/project-kick-off.js')(router);
  require('./routes/0-4/external-stakeholder-kick-off.js')(router);
  require('./routes/0-4/process-conversion-grant.js')(router);
  require('./routes/0-4/land-questionnaire.js')(router);
  require('./routes/0-4/land-registry-title-plans.js')(router);
  require('./routes/0-4/trust-modification-order.js')(router);
  require('./routes/0-4/direction-to-transfer.js')(router);
  require('./routes/0-4/articles-of-association.js')(router);
  require('./routes/0-4/additional-documents.js')(router);
  require('./routes/0-4/routes.js')(router);



module.exports = router
