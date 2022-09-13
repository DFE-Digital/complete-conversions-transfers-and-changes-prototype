module.exports = function (router) {

  var version = "0-6";

  router.get('/' + version + '/land-registry-title-plans/single-page-questions', function (req, res) {
    res.render(version + '/land-registry-title-plans/single-page-questions', {})
  })

  router.post('/' + version + '/land-registry-title-plans/single-page-questions', function (req, res) {
    const clearLandRegistry = req.session.data['clearLandRegistry']

    if (clearLandRegistry != 'Yes, the Land registry title plans or site plans have been cleared'){
      req.session.data.landRegistryStatus = 'inProgress'
    } else {
      req.session.data.landRegistryStatus = 'complete'
    }

    res.redirect('../project-task-list')
  })

}
