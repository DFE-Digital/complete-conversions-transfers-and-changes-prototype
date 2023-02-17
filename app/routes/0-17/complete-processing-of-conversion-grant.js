module.exports = function (router) {

  var version = "0-17";

  router.get('/' + version + '/complete-processing-of-conversion-grant/single-page-questions', function (req, res) {
    res.render(version + '/complete-processing-of-conversion-grant/single-page-questions', {})
  })

  router.post('/' + version + '/complete-processing-of-conversion-grant/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
