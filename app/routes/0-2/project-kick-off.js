module.exports = function (router) {

  var version = "0-2";




  router.get('/' + version + '/project-kick-off/check-conversion-documents', function (req, res) {
    res.render(version + '/project-kick-off/check-conversion-documents', {})
  })

  router.post('/' + version + '/project-kick-off/check-conversion-documents', function (req, res) {
    res.redirect('check-academy-order')
  })


  router.get('/' + version + '/project-kick-off/check-academy-order', function (req, res) {
    res.render(version + '/project-kick-off/check-academy-order', {})
  })

  router.post('/' + version + '/project-kick-off/check-academy-order', function (req, res) {
    res.redirect('check-application-to-convert')
  })


  router.get('/' + version + '/project-kick-off/check-application-to-convert', function (req, res) {
    res.render(version + '/project-kick-off/check-application-to-convert', {})
  })

  router.post('/' + version + '/project-kick-off/check-application-to-convert', function (req, res) {
    res.redirect('identify-things-to-discuss')
  })


  router.get('/' + version + '/project-kick-off/identify-things-to-discuss', function (req, res) {
    res.render(version + '/project-kick-off/identify-things-to-discuss', {})
  })

  router.post('/' + version + '/project-kick-off/identify-things-to-discuss', function (req, res) {
    res.redirect('complete-handover-meeting')
  })


  router.get('/' + version + '/project-kick-off/complete-handover-meeting', function (req, res) {
    res.render(version + '/project-kick-off/complete-handover-meeting', {})
  })

  router.post('/' + version + '/project-kick-off/complete-handover-meeting', function (req, res) {
    res.redirect('check-answers')
  })


  router.get('/' + version + '/project-kick-off/check-answers', function (req, res) {
    res.render(version + '/project-kick-off/check-answers', {})
  })

  router.post('/' + version + '/project-kick-off/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}
