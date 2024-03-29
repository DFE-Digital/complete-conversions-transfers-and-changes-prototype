module.exports = function (router) {

  var version = "0-9";

  router.get('/' + version + '/set-up', function (req, res) {
    res.render(version + '/set-up', {})
  })

  router.post('/' + version + '/set-up', function (req, res) {
    res.redirect('start')
  })


  router.get('/' + version + '/start', function (req, res) {
    const journeyType = req.session.data['journeyType']

    if (journeyType == null){
      req.session.data.journeyType = ['multiPage']
    }
    res.render(version + '/start', {})
  })

  router.post('/' + version + '/start', function (req, res) {
    res.redirect('start')
  })


  router.get('/' + version + '/project-task-list', function (req, res) {
    res.render(version + '/project-task-list', {})
  })

  router.post('/' + version + '/project-task-list', function (req, res) {
    res.redirect('project-closed')
  })


  router.get('/' + version + '/project-closed', function (req, res) {
    res.render(version + '/project-closed', {})
  })

  router.post('/' + version + '/project-closed', function (req, res) {
    res.redirect('project-list-2')
  })

}
