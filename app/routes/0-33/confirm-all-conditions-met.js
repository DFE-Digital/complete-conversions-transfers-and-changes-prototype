module.exports = function (router) {

  var version = "";

  router.get('/' + version + '/confirm-all-conditions-met/single-page-questions', function (req, res) {
    res.render(version + '/confirm-all-conditions-met/single-page-questions', {})
  })

  router.post('/' + version + '/confirm-all-conditions-met/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
