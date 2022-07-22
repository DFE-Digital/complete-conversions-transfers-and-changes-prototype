module.exports = function (router) {

  var version = "0-3";

  router.get('/' + version + '/land-questionnaire-registry-title/check-land-questionnaire', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/check-land-questionnaire', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/check-land-questionnaire', function (req, res) {
    res.redirect('clear-land-questionnaire')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/clear-land-questionnaire', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/clear-land-questionnaire', {})
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
    const checkLandQuestionnaire = req.session.data['checkLandQuestionnaire']
    const clearLandQuestionnaire = req.session.data['clearLandQuestionnaire']
    const clearLandRegistry = req.session.data['clearLandRegistry']
    const clearTrustModificationOrder = req.session.data['clearTrustModificationOrder']
    const clearDirectionToTransfer = req.session.data['clearDirectionToTransfer']

    if ( checkLandQuestionnaire == 'No' ||
      clearLandQuestionnaire == 'No' ||
      clearLandRegistry != 'Yes, registry Title plans have been cleared' ||
      clearTrustModificationOrder != 'Yes, the Trust modification order has been cleared' ||
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

}
