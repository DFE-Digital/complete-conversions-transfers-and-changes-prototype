module.exports = function (router) {

  var version = "";

  router.get('/' + version + '/redact-and-send-documents/single-page-questions', function (req, res) {
    res.render(version + '/redact-and-send-documents/single-page-questions', {})
  })

  router.post('/' + version + '/redact-and-send-documents/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
