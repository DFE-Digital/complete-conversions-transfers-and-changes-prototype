module.exports = function (router) {

  var version = "0-17";

  router.get('/' + version + '/subleases/single-page-questions', function (req, res) {
    res.render(version + '/subleases/single-page-questions', {})
  })

  router.post('/' + version + '/subleases/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
