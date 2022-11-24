// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

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
  require('./routes/0-7/complete-processing-of-conversion-grant.js')(router);
  require('./routes/0-7/confirm-all-conditions-met.js')(router);
  require('./routes/0-7/contacts.js')(router);
  require('./routes/0-7/deed-of-variation.js')(router);
  require('./routes/0-7/direction-to-transfer.js')(router);
  require('./routes/0-7/education-skills-funding-agency-handover.js')(router);
  require('./routes/0-7/external-stakeholder-kick-off.js')(router);
  require('./routes/0-7/land-questionnaire.js')(router);
  require('./routes/0-7/land-registry-title-plans.js')(router);
  require('./routes/0-7/master-funding-agreement.js')(router);
  require('./routes/0-7/process-conversion-grant.js')(router);
  require('./routes/0-7/readiness-for-opening.js')(router);
  require('./routes/0-7/redact-and-send-documents.js')(router);
  require('./routes/0-7/regional-delivery-officer-handover.js')(router);
  require('./routes/0-7/school-opening-date.js')(router);
  require('./routes/0-7/single-worksheet.js')(router);
  require('./routes/0-7/supplementary-funding-agreement.js')(router);
  require('./routes/0-7/trust-modification-order.js')(router);
  require('./routes/0-7/routes.js')(router);

  require('./routes/0-8/articles-of-association.js')(router);
  require('./routes/0-8/baseline-checks.js')(router);
  require('./routes/0-8/checklist-test.js')(router);
  require('./routes/0-8/church-supplementary-agreement.js')(router);
  require('./routes/0-8/complete-processing-of-conversion-grant.js')(router);
  require('./routes/0-8/confirm-all-conditions-met.js')(router);
  require('./routes/0-8/contacts.js')(router);
  require('./routes/0-8/deed-of-variation.js')(router);
  require('./routes/0-8/direction-to-transfer.js')(router);
  require('./routes/0-8/education-skills-funding-agency-handover.js')(router);
  require('./routes/0-8/external-stakeholder-kick-off.js')(router);
  require('./routes/0-8/land-questionnaire.js')(router);
  require('./routes/0-8/land-registry-title-plans.js')(router);
  require('./routes/0-8/master-funding-agreement.js')(router);
  require('./routes/0-8/process-conversion-grant.js')(router);
  require('./routes/0-8/readiness-for-opening.js')(router);
  require('./routes/0-8/redact-and-send-documents.js')(router);
  require('./routes/0-8/regional-delivery-officer-handover.js')(router);
  require('./routes/0-8/school-opening-date.js')(router);
  require('./routes/0-8/single-worksheet.js')(router);
  require('./routes/0-8/supplementary-funding-agreement.js')(router);
  require('./routes/0-8/trust-modification-order.js')(router);
  require('./routes/0-8/routes.js')(router);

  require('./routes/0-9/125-year-lease.js')(router);
  require('./routes/0-9/articles-of-association.js')(router);
  require('./routes/0-9/baseline-checks.js')(router);
  require('./routes/0-9/checklist-test.js')(router);
  require('./routes/0-9/church-supplementary-agreement.js')(router);
  require('./routes/0-9/commercial-transfer-agreement.js')(router);
  require('./routes/0-9/complete-processing-of-conversion-grant.js')(router);
  require('./routes/0-9/confirm-all-conditions-met.js')(router);
  require('./routes/0-9/contacts.js')(router);
  require('./routes/0-9/deed-of-variation.js')(router);
  require('./routes/0-9/direction-to-transfer.js')(router);
  require('./routes/0-9/education-skills-funding-agency-handover.js')(router);
  require('./routes/0-9/email-regional-delivery-officer-school-opened.js')(router);
  require('./routes/0-9/external-stakeholder-kick-off.js')(router);
  require('./routes/0-9/land-questionnaire.js')(router);
  require('./routes/0-9/land-registry-title-plans.js')(router);
  require('./routes/0-9/master-funding-agreement.js')(router);
  require('./routes/0-9/process-conversion-grant.js')(router);
  require('./routes/0-9/readiness-for-opening.js')(router);
  require('./routes/0-9/redact-and-send-documents.js')(router);
  require('./routes/0-9/regional-delivery-officer-handover.js')(router);
  require('./routes/0-9/school-opening-date.js')(router);
  require('./routes/0-9/single-worksheet.js')(router);
  require('./routes/0-9/subleases.js')(router);
  require('./routes/0-9/supplementary-funding-agreement.js')(router);
  require('./routes/0-9/tenancy-at-will.js')(router);
  require('./routes/0-9/trust-modification-order.js')(router);
  require('./routes/0-9/routes.js')(router);

