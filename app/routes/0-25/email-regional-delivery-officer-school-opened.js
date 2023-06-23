module.exports = function (router) {

  var version = "0-25";

  router.get('/' + version + '/email-regional-delivery-officer-school-opened/single-page-questions', function (req, res) {
    res.render(version + '/email-regional-delivery-officer-school-opened/single-page-questions', {})
  })

  router.post('/' + version + '/email-regional-delivery-officer-school-opened/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
