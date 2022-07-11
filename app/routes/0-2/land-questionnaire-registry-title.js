module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/land-questionnaire-registry-title/check-land-questionnaire', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/check-land-questionnaire', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/check-land-questionnaire', function (req, res) {
    res.redirect('check-answers')
  })

  router.get('/' + version + '/land-questionnaire-registry-title/check-answers', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/check-answers', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}
