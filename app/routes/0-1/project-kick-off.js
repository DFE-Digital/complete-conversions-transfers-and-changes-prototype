module.exports = function (router) {

  var version = "0-1";

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

}
