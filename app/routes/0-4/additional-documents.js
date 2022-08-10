module.exports = function (router) {

  var version = "0-4";

  router.get('/' + version + '/additional-documents/single-page-questions', function (req, res) {
    res.render(version + '/additional-documents/single-page-questions', {})
  })

  router.post('/' + version + '/additional-documents/single-page-questions', function (req, res) {
    const checkArticlesOfAssociation = req.session.data['checkArticlesOfAssociation']
    const checkSupplementaryFundingAgreement = req.session.data['checkSupplementaryFundingAgreement']
    const checkChurchSupplementaryAgreement = req.session.data['checkChurchSupplementaryAgreement']
    const checkDeedOfVariation = req.session.data['checkDeedOfVariation']
    const checkMasterFundingAgreement = req.session.data['checkMasterFundingAgreement']

    if ( checkArticlesOfAssociation != 'Yes, the Articles of association have been cleared' ||
      checkSupplementaryFundingAgreement != 'Yes, the Supplementary funding agreement has been cleared' ||
      checkChurchSupplementaryAgreement != 'Yes, the Church supplementary agreement has been cleared' ||
      checkDeedOfVariation != 'Yes, the Deed of variation has been cleared' ||
      checkMasterFundingAgreement != 'Yes, the Master funding agreement has been cleared'){
      req.session.data.additionalDocumentsStatus = 'inProgress'
    } else {
      req.session.data.additionalDocumentsStatus = 'complete'
    }

    res.redirect('../project-task-list')
  })

}
