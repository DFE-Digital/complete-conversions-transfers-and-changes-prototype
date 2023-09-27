module.exports = function (router) {

  var version = "";

  router.get('/' + version + '/baseline-checks/single-page-questions', function (req, res) {
    res.render(version + '/baseline-checks/single-page-questions', {})
  })

  router.post('/' + version + '/baseline-checks/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
