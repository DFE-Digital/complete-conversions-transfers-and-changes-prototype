module.exports = function (router) {

  var version = "0-15";

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
