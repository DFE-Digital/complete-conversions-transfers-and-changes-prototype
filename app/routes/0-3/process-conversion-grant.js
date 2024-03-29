module.exports = function (router) {

  var version = "0-3";

  router.get('/' + version + '/process-conversion-grant/check-vendor-account', function (req, res) {
    const journeyType = req.session.data['journeyType']

    if (journeyType == 'singlePage'){
      res.redirect('single-page-questions')
    } else {
      res.render(version + '/process-conversion-grant/check-vendor-account', {})
    }
  })

  router.post('/' + version + '/process-conversion-grant/check-vendor-account', function (req, res) {
    res.redirect('check-grant-payment-form')
  })


  router.get('/' + version + '/process-conversion-grant/check-grant-payment-form', function (req, res) {
    res.render(version + '/process-conversion-grant/check-grant-payment-form', {})
  })

  router.post('/' + version + '/process-conversion-grant/check-grant-payment-form', function (req, res) {
    res.redirect('email-form-to-ESFA')
  })


  router.get('/' + version + '/process-conversion-grant/email-form-to-ESFA', function (req, res) {
    res.render(version + '/process-conversion-grant/email-form-to-ESFA', {})
  })

  router.post('/' + version + '/process-conversion-grant/email-form-to-ESFA', function (req, res) {
    res.redirect('check-answers')
  })


  router.get('/' + version + '/process-conversion-grant/check-answers', function (req, res) {
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
    res.render(version + '/process-conversion-grant/check-answers', {})
  })

  router.post('/' + version + '/process-conversion-grant/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })


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
