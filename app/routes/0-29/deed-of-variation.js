module.exports = function (router) {

  var version = "0-29";

  router.get('/' + version + '/deed-of-variation/single-page-questions', function (req, res) {
    res.render(version + '/deed-of-variation/single-page-questions', {})
  })

  router.post('/' + version + '/deed-of-variation/single-page-questions', function (req, res) {
    const checkDeedOfVariation = req.session.data['checkDeedOfVariation']

    if (checkDeedOfVariation != 'Yes, the Deed of variation has been cleared'){
      req.session.data.deedOfVariationStatus = 'inProgress'
    } else {
      req.session.data.deedOfVariationStatus = 'completed'
    }

    res.redirect('../project-task-list')
  })

}
