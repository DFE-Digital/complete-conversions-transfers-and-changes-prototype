module.exports = function (router) {

  var version = "0-4";

  router.get('/' + version + '/additional-documents/check-articles-of-association', function (req, res) {
    const journeyType = req.session.data['journeyType']

    if (journeyType == 'singlePage'){
      res.redirect('single-page-questions')
    } else {
      res.render(version + '/additional-documents/check-articles-of-association', {})
    }
  })

  router.post('/' + version + '/additional-documents/check-articles-of-association', function (req, res) {
    res.redirect('check-supplementary-funding-agreement')
  })


  router.get('/' + version + '/additional-documents/check-supplementary-funding-agreement', function (req, res) {
    res.render(version + '/additional-documents/check-supplementary-funding-agreement', {})
  })

  router.post('/' + version + '/additional-documents/check-supplementary-funding-agreement', function (req, res) {
    res.redirect('check-church-supplementary-agreement')
  })


  router.get('/' + version + '/additional-documents/check-church-supplementary-agreement', function (req, res) {
    res.render(version + '/additional-documents/check-church-supplementary-agreement', {})
  })

  router.post('/' + version + '/additional-documents/check-church-supplementary-agreement', function (req, res) {
    res.redirect('check-deed-of-variation')
  })


  router.get('/' + version + '/additional-documents/check-deed-of-variation', function (req, res) {
    res.render(version + '/additional-documents/check-deed-of-variation', {})
  })

  router.post('/' + version + '/additional-documents/check-deed-of-variation', function (req, res) {
    res.redirect('check-master-funding-agreement')
  })


  router.get('/' + version + '/additional-documents/check-master-funding-agreement', function (req, res) {
    res.render(version + '/additional-documents/check-master-funding-agreement', {})
  })

  router.post('/' + version + '/additional-documents/check-master-funding-agreement', function (req, res) {
    res.redirect('check-answers')
  })


  router.get('/' + version + '/additional-documents/check-answers', function (req, res) {
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

    res.render(version + '/additional-documents/check-answers', {})
  })

  router.post('/' + version + '/additional-documents/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })


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
