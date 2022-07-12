module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/additional-documents/check-articles-of-association', function (req, res) {
    res.render(version + '/additional-documents/check-articles-of-association', {})
  })

  router.post('/' + version + '/additional-documents/check-articles-of-association', function (req, res) {
    res.redirect('check-supplementary-funding-agreement')
  })


  router.get('/' + version + '/additional-documents/check-supplementary-funding-agreement', function (req, res) {
    res.render(version + '/additional-documents/check-supplementary-funding-agreement', {})
  })

  router.post('/' + version + '/additional-documents/check-supplementary-funding-agreement', function (req, res) {
    res.redirect('check-church-supplementary-agreement')
  })


  router.get('/' + version + '/additional-documents/check-church-supplementary-agreement', function (req, res) {
    res.render(version + '/additional-documents/check-church-supplementary-agreement', {})
  })

  router.post('/' + version + '/additional-documents/check-church-supplementary-agreement', function (req, res) {
    res.redirect('check-deed-of-novation-and-variation')
  })


  router.get('/' + version + '/additional-documents/check-deed-of-novation-and-variation', function (req, res) {
    res.render(version + '/additional-documents/check-deed-of-novation-and-variation', {})
  })

  router.post('/' + version + '/additional-documents/check-deed-of-novation-and-variation', function (req, res) {
    res.redirect('check-answers')
  })


  router.get('/' + version + '/additional-documents/check-answers', function (req, res) {
    res.render(version + '/additional-documents/check-answers', {})
  })

  router.post('/' + version + '/additional-documents/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}
