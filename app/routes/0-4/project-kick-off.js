module.exports = function (router) {

  var version = "0-4";

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
