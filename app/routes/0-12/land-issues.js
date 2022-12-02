module.exports = function (router) {

  var version = "0-12";

  router.get('/' + version + '/land-issues/single-page-questions', function (req, res) {
    res.render(version + '/land-issues/single-page-questions', {})
  })

  router.post('/' + version + '/land-issues/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
