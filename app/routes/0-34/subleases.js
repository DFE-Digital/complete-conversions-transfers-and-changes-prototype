module.exports = function (router) {

  var version = "";

  router.get('/' + version + '/subleases/single-page-questions', function (req, res) {
    res.render(version + '/subleases/single-page-questions', {})
  })

  router.post('/' + version + '/subleases/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
