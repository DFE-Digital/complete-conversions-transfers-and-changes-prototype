module.exports = function (router) {

  var version = "0-26";

  router.get('/' + version + '/confirm-school-actions-completed/single-page-questions', function (req, res) {
    res.render(version + '/confirm-school-actions-completed/single-page-questions', {})
  })

  router.post('/' + version + '/confirm-school-actions-completed/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
