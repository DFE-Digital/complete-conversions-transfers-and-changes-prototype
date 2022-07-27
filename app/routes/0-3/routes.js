module.exports = function (router) {

  var version = "0-3";

  router.get('/' + version + '/set-up', function (req, res) {
    res.render(version + '/set-up', {})
  })

  router.post('/' + version + '/set-up', function (req, res) {
    res.redirect('start')
  })


  router.get('/' + version + '/start', function (req, res) {
    const journeyType = req.session.data['journeyType']

    if (journeyType == null){
      req.session.data.journeyType = ['singlePage']
    }

    res.render(version + '/start', {})
  })

  router.post('/' + version + '/start', function (req, res) {

    res.redirect('start')
  })


}
