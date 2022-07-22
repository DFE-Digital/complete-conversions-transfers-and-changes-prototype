module.exports = function (router) {

  var version = "0-3";

  router.get('/' + version + '/additional-documents/check-articles-of-association', function (req, res) {
    res.render(version + '/additional-documents/check-articles-of-association', {})
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
    res.redirect('check-deed-of-novation-and-variation')
  })


  router.get('/' + version + '/additional-documents/check-deed-of-novation-and-variation', function (req, res) {
    res.render(version + '/additional-documents/check-deed-of-novation-and-variation', {})
  })

  router.post('/' + version + '/additional-documents/check-deed-of-novation-and-variation', function (req, res) {
    res.redirect('check-main-funding-agreement')
  })


  router.get('/' + version + '/additional-documents/check-main-funding-agreement', function (req, res) {
    res.render(version + '/additional-documents/check-main-funding-agreement', {})
  })

  router.post('/' + version + '/additional-documents/check-main-funding-agreement', function (req, res) {
    res.redirect('check-answers')
  })


  router.get('/' + version + '/additional-documents/check-answers', function (req, res) {
    const checkArticlesOfAssociation = req.session.data['checkArticlesOfAssociation']
    const checkSupplementaryFundingAgreement = req.session.data['checkSupplementaryFundingAgreement']
    const checkChurchSupplementaryAgreement = req.session.data['checkChurchSupplementaryAgreement']
    const checkDeedOfNovationAndVariation = req.session.data['checkDeedOfNovationAndVariation']
    const checkMainFundingAgreement = req.session.data['checkMainFundingAgreement']

    if ( checkArticlesOfAssociation != 'Yes, the Articles of association have been cleared' ||
      checkSupplementaryFundingAgreement != 'Yes, the Supplementary funding agreement has been cleared' ||
      checkChurchSupplementaryAgreement != 'Yes, the Church supplementary agreement has been cleared' ||
      checkDeedOfNovationAndVariation != 'Yes, the Deed of novation and variation has been cleared' ||
      checkMainFundingAgreement != 'Yes, the Main Funding Agreement has been cleared'){
      req.session.data.additionalDocumentsStatus = 'inProgress'
    } else {
      req.session.data.additionalDocumentsStatus = 'complete'
    }

    res.render(version + '/additional-documents/check-answers', {})
  })

  router.post('/' + version + '/additional-documents/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}
