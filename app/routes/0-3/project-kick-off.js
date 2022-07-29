module.exports = function (router) {

  var version = "0-3";

  router.get('/' + version + '/project-kick-off/check-conversion-documents', function (req, res) {
    const journeyType = req.session.data['journeyType']

    if (journeyType == 'singlePage'){
      res.redirect('single-page-questions')
    } else {
      res.render(version + '/project-kick-off/check-conversion-documents', {})
    }
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
    const researchAndQuestionsForDeliveryOfficer = req.session.data['researchAndQuestionsForDeliveryOfficer']
    const handoverDateDay = req.session.data['handoverDateDay']
    const handoverDateMonth = req.session.data['handoverDateMonth']
    const handoverDateYear = req.session.data['handoverDateYear']

    if (researchAndQuestionsForDeliveryOfficer == null ||
      researchAndQuestionsForDeliveryOfficer == '' ||
      handoverDateDay == '' ||
      handoverDateDay ==  null ||
      handoverDateMonth == '' ||
      handoverDateMonth == null ||
      handoverDateYear == '' ||
      handoverDateYear == null){
      req.session.data.handoverStatus = 'inProgress'
    } else {
      req.session.data.handoverStatus = 'complete'
    }
    res.render(version + '/project-kick-off/check-answers', {})
  })

  router.post('/' + version + '/project-kick-off/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })


  router.get('/' + version + '/project-kick-off/single-page-questions', function (req, res) {
    res.render(version + '/project-kick-off/single-page-questions', {})
  })

  router.post('/' + version + '/project-kick-off/single-page-questions', function (req, res) {
    const researchAndQuestionsForDeliveryOfficer = req.session.data['researchAndQuestionsForDeliveryOfficer']
    const handoverDateDay = req.session.data['handoverDateDay']
    const handoverDateMonth = req.session.data['handoverDateMonth']
    const handoverDateYear = req.session.data['handoverDateYear']

    if (researchAndQuestionsForDeliveryOfficer == null ||
      researchAndQuestionsForDeliveryOfficer == '' ||
      handoverDateDay == '' ||
      handoverDateDay ==  null ||
      handoverDateMonth == '' ||
      handoverDateMonth == null ||
      handoverDateYear == '' ||
      handoverDateYear == null){
      req.session.data.handoverStatus = 'inProgress'
    } else {
      req.session.data.handoverStatus = 'complete'
    }
    res.redirect('../project-task-list')
  })

}
