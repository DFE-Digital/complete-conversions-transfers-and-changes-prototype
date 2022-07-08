module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/process-conversion-grant/check-vendor-account', function (req, res) {
    res.render(version + '/process-conversion-grant/check-vendor-account', {})
  })

  router.post('/' + version + '/process-conversion-grant/check-vendor-account', function (req, res) {
    res.redirect('check-grant-payment-form')
  })

}
