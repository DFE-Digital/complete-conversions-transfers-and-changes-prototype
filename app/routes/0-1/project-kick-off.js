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

}
