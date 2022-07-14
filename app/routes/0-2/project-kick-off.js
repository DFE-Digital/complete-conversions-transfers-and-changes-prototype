module.exports = function (router) {

  var version = "0-2";




  router.get('/' + version + '/project-kick-off/check-conversion-documents', function (req, res) {
    res.render(version + '/project-kick-off/check-conversion-documents', {})
  })

  router.post('/' + version + '/project-kick-off/check-conversion-documents', function (req, res) {
    res.redirect('research-and-questions-for-delivery-officer')
  })


  router.get('/' + version + '/project-kick-off/research-and-questions-for-delivery-officer', function (req, res) {
    res.render(version + '/project-kick-off/research-and-questions-for-delivery-officer', {})
  })

  router.post('/' + version + '/project-kick-off/research-and-questions-for-delivery-officer', function (req, res) {
    res.redirect('complete-handover-meeting')
  })


  router.get('/' + version + '/project-kick-off/complete-handover-meeting', function (req, res) {
    res.render(version + '/project-kick-off/complete-handover-meeting', {})
  })

  router.post('/' + version + '/project-kick-off/complete-handover-meeting', function (req, res) {
    res.redirect('check-answers')
  })


  router.get('/' + version + '/project-kick-off/check-answers', function (req, res) {
    const checkConversionDocuments = req.session.data['checkConversionDocuments']
    const researchAndQuestionsForDeliveryOfficer = req.session.data['researchAndQuestionsForDeliveryOfficer']
    const completedHandoverMeeting = req.session.data['completedHandoverMeeting']

    if ( checkConversionDocuments == null ||
      researchAndQuestionsForDeliveryOfficer == null ||
      researchAndQuestionsForDeliveryOfficer == '' ||
      completedHandoverMeeting == null){
      req.session.data.handoverStatus = 'inProgress'
    } else {
      req.session.data.handoverStatus = 'complete'
    }
    res.render(version + '/project-kick-off/check-answers', {})
  })

  router.post('/' + version + '/project-kick-off/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}
