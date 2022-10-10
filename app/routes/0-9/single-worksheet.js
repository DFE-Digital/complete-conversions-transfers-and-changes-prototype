module.exports = function (router) {

  var version = "0-9";

  router.get('/' + version + '/single-worksheet/single-page-questions', function (req, res) {
    res.render(version + '/single-worksheet/single-page-questions', {})
  })

  router.post('/' + version + '/single-worksheet/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
