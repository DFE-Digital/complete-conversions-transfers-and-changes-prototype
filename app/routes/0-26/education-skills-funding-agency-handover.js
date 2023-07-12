module.exports = function (router) {

  var version = "0-26";

  router.get('/' + version + '/education-skills-funding-agency-handover/single-page-questions', function (req, res) {
    res.render(version + '/education-skills-funding-agency-handover/single-page-questions', {})
  })

  router.post('/' + version + '/education-skills-funding-agency-handover/single-page-questions', function (req, res) {
    res.redirect('../project-task-list')
  })

}
