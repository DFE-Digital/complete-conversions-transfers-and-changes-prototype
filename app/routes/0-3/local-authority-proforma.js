module.exports = function (router) {

  var version = "0-3";

  router.get('/' + version + '/local-authority-form/check-local-authority-form', function (req, res) {
    res.render(version + '/local-authority-form/check-local-authority-form', {})
  })

  router.post('/' + version + '/local-authority-form/check-local-authority-form', function (req, res) {
    res.redirect('check-answers')
  })

  router.get('/' + version + '/local-authority-form/check-answers', function (req, res) {
    const checkLocalAuthorityForm = req.session.data['checkLocalAuthorityForm']

    if ( checkLocalAuthorityForm == 'No' ){
      req.session.data.localAuthorityQuestionnaireStatus = 'inProgress'
    } else {
      req.session.data.localAuthorityQuestionnaireStatus = 'complete'
    }

    res.render(version + '/local-authority-form/check-answers', {})
  })

  router.post('/' + version + '/local-authority-form/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}
