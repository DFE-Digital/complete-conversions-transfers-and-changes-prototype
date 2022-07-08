module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/external-stakeholder-kick-off/check-introductory-email-sent', function (req, res) {
    res.render(version + '/external-stakeholder-kick-off/check-introductory-email-sent', {})
  })

  router.post('/' + version + '/external-stakeholder-kick-off/check-introductory-email-sent', function (req, res) {
    res.redirect('kick-off-date')
  })


  router.get('/' + version + '/external-stakeholder-kick-off/kick-off-date', function (req, res) {
    res.render(version + '/external-stakeholder-kick-off/kick-off-date', {})
  })

  router.post('/' + version + '/external-stakeholder-kick-off/kick-off-date', function (req, res) {
    res.redirect('had-kick-off')
  })

}
