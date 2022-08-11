module.exports = function (router) {

  var version = "0-4";

  router.get('/' + version + '/supplementary-funding-agreement/single-page-questions', function (req, res) {
    res.render(version + '/supplementary-funding-agreement/single-page-questions', {})
  })

  router.post('/' + version + '/supplementary-funding-agreement/single-page-questions', function (req, res) {
    const checkSupplementaryFundingAgreement = req.session.data['checkSupplementaryFundingAgreement']

    if (checkSupplementaryFundingAgreement != 'Yes, the Supplementary funding agreement has been cleared'){
      req.session.data.supplementaryFundingAgreementStatus = 'inProgress'
    } else {
      req.session.data.supplementaryFundingAgreementStatus = 'complete'
    }

    res.redirect('../project-task-list')
  })

}
