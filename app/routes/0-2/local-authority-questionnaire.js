module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/local-authority-questionnaire/check-local-authority-questionnaire', function (req, res) {
    res.render(version + '/local-authority-questionnaire/check-local-authority-questionnaire', {})
  })

  router.post('/' + version + '/local-authority-questionnaire/check-local-authority-questionnaire', function (req, res) {
    res.redirect('NEXT PAGE')
  })

}
