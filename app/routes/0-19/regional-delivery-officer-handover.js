module.exports = function (router) {

  var version = "0-19";

  router.get('/' + version + '/regional-delivery-officer-handover/single-page-questions', function (req, res) {
    res.render(version + '/regional-delivery-officer-handover/single-page-questions', {})
  })

  router.post('/' + version + '/regional-delivery-officer-handover/single-page-questions', function (req, res) {
    const regionalDeliveryOfficerHandover = req.session.data['regionalDeliveryOfficerHandover']

    if (regionalDeliveryOfficerHandover.includes('doResearch') &
      regionalDeliveryOfficerHandover.includes('makeNotes') &
      regionalDeliveryOfficerHandover.includes('doHandover') &
      regionalDeliveryOfficerHandover.includes('empty')){
      req.session.data.handoverStatus = 'completed'
    }else if (regionalDeliveryOfficerHandover == ('empty')){
      req.session.data.handoverStatus = 'notStarted'
    }else {
      req.session.data.handoverStatus = 'inProgress'
    }

    res.redirect('../project-task-list')
  })


}
