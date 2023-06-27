module.exports = function (router) {

  var version = "0-25";

  router.get('/' + version + '/supplemental-funding-agreement/single-page-questions', function (req, res) {
    res.render(version + '/supplemental-funding-agreement/single-page-questions', {})
  })

  router.post('/' + version + '/supplemental-funding-agreement/single-page-questions', function (req, res) {
    const checkSupplementalFundingAgreement = req.session.data['checkSupplementalFundingAgreement']

    if (checkSupplementalFundingAgreement != 'Yes, the Supplemental funding agreement has been cleared'){
      req.session.data.supplementalFundingAgreementStatus = 'inProgress'
    } else {
      req.session.data.supplementalFundingAgreementStatus = 'completed'
    }

    res.redirect('../project-task-list')
  })

}
