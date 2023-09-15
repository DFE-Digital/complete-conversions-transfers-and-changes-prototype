module.exports = function (router) {

  var version = "";

  router.get('/' + version + '/process-conversion-grant/single-page-questions', function (req, res) {
    res.render(version + '/process-conversion-grant/single-page-questions', {})
  })

  router.post('/' + version + '/process-conversion-grant/single-page-questions', function (req, res) {
    const processConversionGrant = req.session.data['processConversionGrant']

    if (processConversionGrant.includes('checkVendorAccount') &
      processConversionGrant.includes('checkSchoolEligibility') &
      processConversionGrant.includes('checkGrantForm') &
      processConversionGrant.includes('sendToPaymentsTeam') &
      processConversionGrant.includes('giveSchoolPaymentDate') &
      processConversionGrant.includes('checkSchoolGotGrant') &
      processConversionGrant.includes('empty')){
      req.session.data.processConversionGrantStatus = 'completed'
    }else if (processConversionGrant == ('empty')){
      req.session.data.processConversionGrantStatus = 'notStarted'
    }else {
      req.session.data.processConversionGrantStatus = 'inProgress'
    }

    res.redirect('../project-task-list')
  })

}
