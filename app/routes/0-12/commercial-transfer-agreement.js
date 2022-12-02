module.exports = function (router) {

  var version = "0-12";

  router.get('/' + version + '/commercial-transfer-agreement/single-page-questions', function (req, res) {
    res.render(version + '/commercial-transfer-agreement/single-page-questions', {})
  })

  router.post('/' + version + '/commercial-transfer-agreement/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
