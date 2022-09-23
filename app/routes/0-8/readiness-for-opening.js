module.exports = function (router) {

  var version = "0-7";

  router.get('/' + version + '/readiness-for-opening/single-page-questions', function (req, res) {
    res.render(version + '/readiness-for-opening/single-page-questions', {})
  })

  router.post('/' + version + '/readiness-for-opening/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
