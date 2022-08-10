module.exports = function (router) {

  var version = "0-4";

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
