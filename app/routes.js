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

  require('./routes/0-4/articles-of-association.js')(router);
  require('./routes/0-4/church-supplementary-agreement.js')(router);
  require('./routes/0-4/deed-of-variation.js')(router);
  require('./routes/0-4/direction-to-transfer.js')(router);
  require('./routes/0-4/external-stakeholder-kick-off.js')(router);
  require('./routes/0-4/land-questionnaire.js')(router);
  require('./routes/0-4/land-registry-title-plans.js')(router);
  require('./routes/0-4/master-funding-agreement.js')(router);
  require('./routes/0-4/process-conversion-grant.js')(router);
  require('./routes/0-4/project-kick-off.js')(router);
  require('./routes/0-4/supplementary-funding-agreement.js')(router);
  require('./routes/0-4/trust-modification-order.js')(router);
  require('./routes/0-4/routes.js')(router);

  require('./routes/0-5/articles-of-association.js')(router);
  require('./routes/0-5/church-supplementary-agreement.js')(router);
  require('./routes/0-5/contacts.js')(router);
  require('./routes/0-5/deed-of-variation.js')(router);
  require('./routes/0-5/direction-to-transfer.js')(router);
  require('./routes/0-5/external-stakeholder-kick-off.js')(router);
  require('./routes/0-5/land-questionnaire.js')(router);
  require('./routes/0-5/land-registry-title-plans.js')(router);
  require('./routes/0-5/master-funding-agreement.js')(router);
  require('./routes/0-5/process-conversion-grant.js')(router);
  require('./routes/0-5/project-kick-off.js')(router);
  require('./routes/0-5/supplementary-funding-agreement.js')(router);
  require('./routes/0-5/trust-modification-order.js')(router);
  require('./routes/0-5/routes.js')(router);
  require('./routes/0-5/checklist-test.js')(router);

  require('./routes/0-6/articles-of-association.js')(router);
  require('./routes/0-6/church-supplementary-agreement.js')(router);
  require('./routes/0-6/contacts.js')(router);
  require('./routes/0-6/deed-of-variation.js')(router);
  require('./routes/0-6/direction-to-transfer.js')(router);
  require('./routes/0-6/external-stakeholder-kick-off.js')(router);
  require('./routes/0-6/land-questionnaire.js')(router);
  require('./routes/0-6/land-registry-title-plans.js')(router);
  require('./routes/0-6/master-funding-agreement.js')(router);
  require('./routes/0-6/process-conversion-grant.js')(router);
  require('./routes/0-6/regional-delivery-officer-handover.js')(router);
  require('./routes/0-6/supplementary-funding-agreement.js')(router);
  require('./routes/0-6/trust-modification-order.js')(router);
  require('./routes/0-6/routes.js')(router);
  require('./routes/0-6/checklist-test.js')(router);

  require('./routes/0-7/articles-of-association.js')(router);
  require('./routes/0-7/baseline-checks.js')(router);
  require('./routes/0-7/checklist-test.js')(router);
  require('./routes/0-7/church-supplementary-agreement.js')(router);
  require('./routes/0-7/contacts.js')(router);
  require('./routes/0-7/deed-of-variation.js')(router);
  require('./routes/0-7/direction-to-transfer.js')(router);
  require('./routes/0-7/external-stakeholder-kick-off.js')(router);
  require('./routes/0-7/land-questionnaire.js')(router);
  require('./routes/0-7/land-registry-title-plans.js')(router);
  require('./routes/0-7/master-funding-agreement.js')(router);
  require('./routes/0-7/process-conversion-grant.js')(router);
  require('./routes/0-7/regional-delivery-officer-handover.js')(router);
  require('./routes/0-7/single-worksheet.js')(router);
  require('./routes/0-7/supplementary-funding-agreement.js')(router);
  require('./routes/0-7/tupe.js')(router);
  require('./routes/0-7/trust-modification-order.js')(router);
  require('./routes/0-7/routes.js')(router);

module.exports = router
