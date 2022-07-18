module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/local-authority-questionnaire/check-local-authority-questionnaire', function (req, res) {
    res.render(version + '/local-authority-questionnaire/check-local-authority-questionnaire', {})
  })

  router.post('/' + version + '/local-authority-questionnaire/check-local-authority-questionnaire', function (req, res) {
    res.redirect('check-answers')
  })

  router.get('/' + version + '/local-authority-questionnaire/check-answers', function (req, res) {
    const checkLocalAuthorityQuestionnaire = req.session.data['checkLocalAuthorityQuestionnaire']

    if ( checkLocalAuthorityQuestionnaire == 'No' ){
      req.session.data.localAuthorityQuestionnaireStatus = 'inProgress'
    } else {
      req.session.data.localAuthorityQuestionnaireStatus = 'complete'
    }

    res.render(version + '/local-authority-questionnaire/check-answers', {})
  })

  router.post('/' + version + '/local-authority-questionnaire/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}
