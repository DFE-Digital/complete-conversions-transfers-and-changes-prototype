module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/additional-documents/check-articles-of-association', function (req, res) {
    res.render(version + '/additional-documents/check-articles-of-association', {})
  })

  router.post('/' + version + '/additional-documents/check-articles-of-association', function (req, res) {
    res.redirect('check-answers')
  })

  router.get('/' + version + '/additional-documents/check-answers', function (req, res) {
    res.render(version + '/additional-documents/check-answers', {})
  })

  router.post('/' + version + '/additional-documents/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}
