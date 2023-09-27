module.exports = function (router) {

  var version = "";

  router.get('/' + version + '/external-stakeholder-kick-off/single-page-questions', function (req, res) {
    res.render(version + '/external-stakeholder-kick-off/single-page-questions', {})
  })

  router.post('/' + version + '/external-stakeholder-kick-off/single-page-questions', function (req, res) {
    const externalStakeHolderKickoff = req.session.data['externalStakeHolderKickoff']

    if (externalStakeHolderKickoff.includes('sendIntroductoryEmails') &
      externalStakeHolderKickoff.includes('saveProforma') &
      externalStakeHolderKickoff.includes('confirmConversionDate') &
      externalStakeHolderKickoff.includes('sendKickOffInvites') &
      externalStakeHolderKickoff.includes('hostKickOffMeeting') &
      externalStakeHolderKickoff.includes('shareConversionChecklist') &
      externalStakeHolderKickoff.includes('empty')){
      req.session.data.externalStakeHolderKickoffStatus = 'completed'
    }else if (externalStakeHolderKickoff == ('empty')){
      req.session.data.externalStakeHolderKickoffStatus = 'notStarted'
    }else {
      req.session.data.externalStakeHolderKickoffStatus = 'inProgress'
    }

    res.redirect('../project-task-list')
  })

}
