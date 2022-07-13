module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/land-questionnaire-registry-title/check-land-questionnaire', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/check-land-questionnaire', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/check-land-questionnaire', function (req, res) {
    res.redirect('clear-land-questionnaire')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/clear-land-questionnaire', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/clear-land-questionnaire', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/clear-land-questionnaire', function (req, res) {
    res.redirect('clear-land-registry')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/clear-land-registry', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/clear-land-registry', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/clear-land-registry', function (req, res) {
    res.redirect('check-trust-modification-order')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/check-trust-modification-order', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/check-trust-modification-order', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/check-trust-modification-order', function (req, res) {
    res.redirect('clear-direction-to-transfer')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/clear-direction-to-transfer', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/clear-direction-to-transfer', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/clear-direction-to-transfer', function (req, res) {
    res.redirect('check-answers')
  })


  router.get('/' + version + '/land-questionnaire-registry-title/check-answers', function (req, res) {
    res.render(version + '/land-questionnaire-registry-title/check-answers', {})
  })

  router.post('/' + version + '/land-questionnaire-registry-title/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}