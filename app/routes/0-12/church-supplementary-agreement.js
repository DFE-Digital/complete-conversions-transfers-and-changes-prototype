module.exports = function (router) {

  var version = "0-12";

  router.get('/' + version + '/church-supplemental-agreement/single-page-questions', function (req, res) {
    res.render(version + '/church-supplemental-agreement/single-page-questions', {})
  })

  router.post('/' + version + '/church-supplemental-agreement/single-page-questions', function (req, res) {
    const checkChurchSupplementalAgreement = req.session.data['checkChurchSupplementalAgreement']

    if (checkChurchSupplementalAgreement != 'Yes, the Church supplemental agreement has been cleared'){
      req.session.data.churchSupplementalFundingAgreementStatus = 'inProgress'
    } else {
      req.session.data.churchSupplementalFundingAgreementStatus = 'completed'
    }

    res.redirect('../project-task-list')
  })

}
