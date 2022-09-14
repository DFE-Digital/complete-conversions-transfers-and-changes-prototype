module.exports = function (router) {

  var version = "0-6";

  router.get('/' + version + '/master-funding-agreement/single-page-questions', function (req, res) {
    res.render(version + '/master-funding-agreement/single-page-questions', {})
  })

  router.post('/' + version + '/master-funding-agreement/single-page-questions', function (req, res) {
    const checkMasterFundingAgreement = req.session.data['checkMasterFundingAgreement']

    if (checkMasterFundingAgreement != 'Yes, the Master funding agreement has been cleared'){
      req.session.data.masterFundingAgreementStatus = 'inProgress'
    } else {
      req.session.data.masterFundingAgreementStatus = 'complete'
    }

    res.redirect('../project-task-list')
  })

}
