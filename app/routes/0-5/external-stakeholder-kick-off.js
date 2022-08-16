module.exports = function (router) {

  var version = "0-5";

  router.get('/' + version + '/external-stakeholder-kick-off/single-page-questions', function (req, res) {
    res.render(version + '/external-stakeholder-kick-off/single-page-questions', {})
  })

  router.post('/' + version + '/external-stakeholder-kick-off/single-page-questions', function (req, res) {
    const checkIntroductoryEmailSent = req.session.data['checkIntroductoryEmailSent']
    const haveYouAgreedKickoffDate = req.session.data['haveYouAgreedKickoffDate']
    const kickoffDateDay = req.session.data['kickoffDateDay']
    const kickoffDateMonth = req.session.data['kickoffDateMonth']
    const kickoffDateYear = req.session.data['kickoffDateYear']
    const hadKickoff = req.session.data['hadKickoff']
    const hadLocalAuthorityKickoff = req.session.data['hadLocalAuthorityKickoff']

    if ( checkIntroductoryEmailSent == 'No' ||
      checkIntroductoryEmailSent == null ||
      haveYouAgreedKickoffDate == 'No' ||
      haveYouAgreedKickoffDate == null ||
      kickoffDateDay == null ||
      kickoffDateDay == '' ||
      kickoffDateMonth == null ||
      kickoffDateMonth == '' ||
      kickoffDateYear == null ||
      kickoffDateYear == '' ||
      hadKickoff == 'No' ||
      hadKickoff == null ||
      hadLocalAuthorityKickoff == 'No' ||
      hadLocalAuthorityKickoff == null){
      req.session.data.externalStakeHolderKickoffStatus = 'inProgress'
    } else {
      req.session.data.externalStakeHolderKickoffStatus = 'complete'
    }
    res.redirect('../project-task-list')
  })

}
