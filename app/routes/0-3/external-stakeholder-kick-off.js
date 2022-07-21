module.exports = function (router) {

  var version = "0-3";

  router.get('/' + version + '/external-stakeholder-kick-off/check-introductory-email-sent', function (req, res) {
    res.render(version + '/external-stakeholder-kick-off/check-introductory-email-sent', {})
  })

  router.post('/' + version + '/external-stakeholder-kick-off/check-introductory-email-sent', function (req, res) {
    res.redirect('kick-off-date')
  })


  router.get('/' + version + '/external-stakeholder-kick-off/kick-off-date', function (req, res) {
    res.render(version + '/external-stakeholder-kick-off/kick-off-date', {})
  })

  router.post('/' + version + '/external-stakeholder-kick-off/kick-off-date', function (req, res) {
    res.redirect('had-kick-off')
  })


  router.get('/' + version + '/external-stakeholder-kick-off/had-kick-off', function (req, res) {
    res.render(version + '/external-stakeholder-kick-off/had-kick-off', {})
  })

  router.post('/' + version + '/external-stakeholder-kick-off/had-kick-off', function (req, res) {
    res.redirect('check-answers')
  })


  router.get('/' + version + '/external-stakeholder-kick-off/check-answers', function (req, res) {
    const checkIntroductoryEmailSent = req.session.data['checkIntroductoryEmailSent']
    const haveYouAgreedKickoffDate = req.session.data['haveYouAgreedKickoffDate']
    const kickoffDateDay = req.session.data['kickoffDateDay']
    const kickoffDateMonth = req.session.data['kickoffDateMonth']
    const kickoffDateYear = req.session.data['kickoffDateYear']
    const hadKickoff = req.session.data['hadKickoff']

    if ( checkIntroductoryEmailSent == 'No' ||
      haveYouAgreedKickoffDate == 'No' ||
      kickoffDateDay == null ||
      kickoffDateMonth == null ||
      kickoffDateYear == null ||
      hadKickoff == 'No' ){
      req.session.data.externalStakeHolderKickoffStatus = 'inProgress'
    } else {
      req.session.data.externalStakeHolderKickoffStatus = 'complete'
    }

    res.render(version + '/external-stakeholder-kick-off/check-answers', {})
  })

  router.post('/' + version + '/external-stakeholder-kick-off/check-answers', function (req, res) {
    res.redirect('../project-task-list')
  })

}
