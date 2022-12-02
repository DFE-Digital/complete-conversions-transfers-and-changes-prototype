module.exports = function (router) {

  var version = "0-12";

  router.get('/' + version + '/125-year-lease/single-page-questions', function (req, res) {
    res.render(version + '/125-year-lease/single-page-questions', {})
  })

  router.post('/' + version + '/125-year-lease/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
