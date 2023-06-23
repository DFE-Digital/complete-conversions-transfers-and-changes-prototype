module.exports = function (router) {

  var version = "0-25";

  router.get('/' + version + '/land-questionnaire/single-page-questions', function (req, res) {
    res.render(version + '/land-questionnaire/single-page-questions', {})
  })

  router.post('/' + version + '/land-questionnaire/single-page-questions', function (req, res) {
    const clearLandQuestionnaire = req.session.data['clearLandQuestionnaire']

    if ( clearLandQuestionnaire != 'Yes, the Land questionnaire has been cleared'){
      req.session.data.landQuestionnaireStatus = 'inProgress'
    } else {
      req.session.data.landQuestionnaireStatus = 'completed'
    }

    res.redirect('../project-task-list')
  })

}
