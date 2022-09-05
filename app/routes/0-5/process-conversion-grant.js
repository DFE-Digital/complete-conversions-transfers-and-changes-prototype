module.exports = function (router) {

  var version = "0-5";

  // router.get('/' + version + '/process-conversion-grant/single-page-questions', function (req, res) {
  //   res.render(version + '/process-conversion-grant/single-page-questions', {})
  // })

  // router.post('/' + version + '/process-conversion-grant/single-page-questions', function (req, res) {
  //   const checkVendorAccount = req.session.data['checkVendorAccount']
  //   const checkGrantPaymentForm = req.session.data['checkGrantPaymentForm']
  //   const checkEmailEsfa = req.session.data['checkEmailEsfa']

  //   if (checkVendorAccount == 'No' ||
  //     checkVendorAccount == null ||
  //     checkGrantPaymentForm == 'No' ||
  //     checkGrantPaymentForm == null ||
  //     checkEmailEsfa == 'No' ||
  //     checkEmailEsfa == null){
  //     req.session.data.processConversionGrantStatus = 'inProgress'
  //   } else {
  //     req.session.data.processConversionGrantStatus = 'complete'
  //   }
  //   res.redirect('../project-task-list')
  // })

  router.get('/' + version + '/checklist-test/single-page-questions', function (req, res) {
    res.render(version + '/checklist-test/single-page-questions', {})
  })

  router.post('/' + version + '/checklist-test/single-page-questions', function (req, res) {
    const testReceivedDocumentStatus = req.session.data['testReceivedDocumentStatus']
    const testReceivedDocument = req.session.data['testReceivedDocument']

    if (testReceivedDocument.includes('Cleared document')){
      req.session.data.testReceivedDocumentStatus = 'complete'
    }else if (testReceivedDocument.includes('Received document') || testReceivedDocument.includes('Sent to policy team')){
      req.session.data.testReceivedDocumentStatus = 'inProgress'
    }else {
      req.session.data.testReceivedDocumentStatus = 'notStarted'
    }

    res.redirect('../project-task-list')
  })

}
