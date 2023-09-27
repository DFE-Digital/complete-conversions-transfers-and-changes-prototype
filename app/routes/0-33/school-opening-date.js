module.exports = function (router) {

  var version = "";

  router.get('/' + version + '/school-opening-date/single-page-questions', function (req, res) {
    res.render(version + '/school-opening-date/single-page-questions', {})
  })

  router.post('/' + version + '/school-opening-date/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
