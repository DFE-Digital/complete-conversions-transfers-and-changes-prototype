module.exports = function (router) {

  var version = "0-4";

  router.get('/' + version + '/church-supplementary-agreement/single-page-questions', function (req, res) {
    res.render(version + '/church-supplementary-agreement/single-page-questions', {})
  })

  router.post('/' + version + '/church-supplementary-agreement/single-page-questions', function (req, res) {
    const checkChurchSupplementaryAgreement = req.session.data['checkChurchSupplementaryAgreement']

    if (checkChurchSupplementaryAgreement != 'Yes, the Church supplementary agreement has been cleared'){
      req.session.data.churchSupplementaryFundingAgreementStatus = 'inProgress'
    } else {
      req.session.data.churchSupplementaryFundingAgreementStatus = 'complete'
    }

    res.redirect('../project-task-list')
  })

}
