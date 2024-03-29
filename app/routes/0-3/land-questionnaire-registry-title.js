module.exports = function (router) {

  var version = "0-3";

  router.get('/' + version + '/land-questionnaire-registry-title/clear-land-questionnaire', function (req, res) {
    const journeyType = req.session.data['journeyType']

    if (journeyType == 'singlePage'){
      res.redirect('single-page-questions')
    } else {
      res.render(version + '/land-questionnaire-registry-title/clear-land-questionnaire', {})
    }
  })

  router.post('/' + version + '/land-questionnaire-registry-title/clear-land-questionnaire', function (req, res) {
    res.redirect('clear-title-plans')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/clear-title-plans', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/clear-title-plans', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/clear-title-plans', function (req, res) {
    res.redirect('clear-trust-modification-order')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/clear-trust-modification-order', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/clear-trust-modification-order', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/clear-trust-modification-order', function (req, res) {
    res.redirect('clear-direction-to-transfer')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/clear-direction-to-transfer', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/clear-direction-to-transfer', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/clear-direction-to-transfer', function (req, res) {
    res.redirect('check-answers')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/check-answers', function (req, res) {
    const clearLandQuestionnaire = req.session.data['clearLandQuestionnaire']
    const clearLandRegistry = req.session.data['clearLandRegistry']
    const clearTrustModificationOrder = req.session.data['clearTrustModificationOrder']
    const clearDirectionToTransfer = req.session.data['clearDirectionToTransfer']

    if ( clearLandQuestionnaire != 'Yes, the Land questionnaire has been cleared' ||
      clearLandRegistry != 'Yes, the Land registry title plans or site plans have been cleared' ||
      clearTrustModificationOrder != 'Yes the legal team has cleared the Trust modification order' ||
      clearDirectionToTransfer != 'Yes, the Direction to transfer has cleared'){
      req.session.data.landQuestionnaireStatus = 'inProgress'
    } else {
      req.session.data.landQuestionnaireStatus = 'complete'
    }

    res.render(version + '/land-questionnaire-registry-title/check-answers', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/single-page-questions', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/single-page-questions', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/single-page-questions', function (req, res) {
    const clearLandQuestionnaire = req.session.data['clearLandQuestionnaire']
    const clearLandRegistry = req.session.data['clearLandRegistry']
    const clearTrustModificationOrder = req.session.data['clearTrustModificationOrder']
    const clearDirectionToTransfer = req.session.data['clearDirectionToTransfer']

    if ( clearLandQuestionnaire != 'Yes, the Land questionnaire has been cleared' ||
      clearLandRegistry != 'Yes, the Land registry title plans or site plans have been cleared' ||
      clearTrustModificationOrder != 'Yes the legal team has cleared the Trust modification order' ||
      clearDirectionToTransfer != 'Yes, the Direction to transfer has cleared'){
      req.session.data.landQuestionnaireStatus = 'inProgress'
    } else {
      req.session.data.landQuestionnaireStatus = 'complete'
    }

    res.redirect('../project-task-list')
  })

}
