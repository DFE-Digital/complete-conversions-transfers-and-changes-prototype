module.exports = function (router) {

  var version = "0-7";

  router.get('/' + version + '/tupe/single-page-questions', function (req, res) {
    res.render(version + '/tupe/single-page-questions', {})
  })

  router.post('/' + version + '/tupe/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
