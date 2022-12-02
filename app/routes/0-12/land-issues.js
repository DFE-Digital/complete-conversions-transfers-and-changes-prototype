module.exports = function (router) {

  var version = "0-12";

  router.get('/' + version + '/land-issues/single-page-questions', function (req, res) {
    res.render(version + '/land-issues/single-page-questions', {})
  })

  router.post('/' + version + '/land-issues/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

  router.get('/' + version + '/land-issues/land-building-leasing-arrangements-or-transfer-agreements', function (req, res) {
    res.render(version + '/land-issues/land-building-leasing-arrangements-or-transfer-agreements', {})
  })

  router.post('/' + version + '/land-issues/land-building-leasing-arrangements-or-transfer-agreements', function (req, res) {
    res.redirect('single-page-questions')
  })

}
