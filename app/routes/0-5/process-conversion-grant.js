module.exports = function (router) {

  var version = "0-5";

  router.get('/' + version + '/process-conversion-grant/single-page-questions', function (req, res) {
    res.render(version + '/process-conversion-grant/single-page-questions', {})
  })

  router.post('/' + version + '/process-conversion-grant/single-page-questions', function (req, res) {
    const checkVendorAccount = req.session.data['checkVendorAccount']
    const checkGrantPaymentForm = req.session.data['checkGrantPaymentForm']
    const checkEmailEsfa = req.session.data['checkEmailEsfa']

    if (checkVendorAccount == 'No' ||
      checkVendorAccount == null ||
      checkGrantPaymentForm == 'No' ||
      checkGrantPaymentForm == null ||
      checkEmailEsfa == 'No' ||
      checkEmailEsfa == null){
      req.session.data.processConversionGrantStatus = 'inProgress'
    } else {
      req.session.data.processConversionGrantStatus = 'complete'
    }
    res.redirect('../project-task-list')
  })

}
