module.exports = function (router) {

  var version = "0-26";

  router.get('/' + version + '/tenancy-at-will/single-page-questions', function (req, res) {
    res.render(version + '/tenancy-at-will/single-page-questions', {})
  })

  router.post('/' + version + '/tenancy-at-will/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
