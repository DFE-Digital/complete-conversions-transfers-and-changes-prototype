module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/project-kick-off/save-proforma', function (req, res) {
    res.render(version + '/project-kick-off/save-proforma', {})
  })

  router.post('/' + version + '/project-kick-off/save-proforma', function (req, res) {
    res.redirect('proforma-url')
  })


  router.get('/' + version + '/project-kick-off/proforma-url', function (req, res) {
    res.render(version + '/project-kick-off/proforma-url', {})
  })

  router.post('/' + version + '/project-kick-off/proforma-url', function (req, res) {
    res.redirect('check-trust-model-docs')
  })


  router.get('/' + version + '/project-kick-off/check-trust-model-docs', function (req, res) {
    res.render(version + '/project-kick-off/check-trust-model-docs', {})
  })

  router.post('/' + version + '/project-kick-off/check-trust-model-docs', function (req, res) {
    res.redirect('trust-model-docs-url')
  })


  router.get('/' + version + '/project-kick-off/trust-model-docs-url', function (req, res) {
    res.render(version + '/project-kick-off/trust-model-docs-url', {})
  })

  router.post('/' + version + '/project-kick-off/trust-model-docs-url', function (req, res) {
    res.redirect('check-academy-order')
  })


  router.get('/' + version + '/project-kick-off/check-academy-order', function (req, res) {
    res.render(version + '/project-kick-off/check-academy-order', {})
  })

  router.post('/' + version + '/project-kick-off/check-academy-order', function (req, res) {
    res.redirect('academy-order-url')
  })


  router.get('/' + version + '/project-kick-off/academy-order-url', function (req, res) {
    res.render(version + '/project-kick-off/academy-order-url', {})
  })

  router.post('/' + version + '/project-kick-off/academy-order-url', function (req, res) {
    res.redirect('check-application-to-convert')
  })


  router.get('/' + version + '/project-kick-off/check-application-to-convert', function (req, res) {
    res.render(version + '/project-kick-off/check-application-to-convert', {})
  })

  router.post('/' + version + '/project-kick-off/check-application-to-convert', function (req, res) {
    res.redirect('application-to-convert-url')
  })


  router.get('/' + version + '/project-kick-off/application-to-convert-url', function (req, res) {
    res.render(version + '/project-kick-off/application-to-convert-url', {})
  })

  router.post('/' + version + '/project-kick-off/application-to-convert-url', function (req, res) {
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
