module.exports = function (router) {

  var version = "0-28";

  router.get('/' + version + '/land-issues/single-page-questions', function (req, res) {
    res.render(version + '/land-issues/single-page-questions', {})
  })

  router.post('/' + version + '/land-issues/single-page-questions', function (req, res) {
    const checkDescribeLandIssues = req.session.data['describeLandIssues']

    if (checkDescribeLandIssues.includes('describeLandAndLeasingIssues') &
    checkDescribeLandIssues.includes('describeSharedUsageIssues') ){
      req.session.data.describeLandIssuesStatus = 'completed'
    }else if (checkDescribeLandIssues == ('empty')){
      req.session.data.describeLandIssuesStatus = 'notStarted'
    }else if (checkDescribeLandIssues.includes('notApplicable')){
      req.session.data.describeLandIssuesStatus = 'notApplicable'
    }else {
      req.session.data.describeLandIssuesStatus = 'inProgress'
    }



    res.redirect('../project-task-list')
  })

  router.get('/' + version + '/land-issues/land-building-leasing-arrangements-or-transfer-agreements', function (req, res) {
    res.render(version + '/land-issues/land-building-leasing-arrangements-or-transfer-agreements', {})
  })

  router.post('/' + version + '/land-issues/land-building-leasing-arrangements-or-transfer-agreements', function (req, res) {
    res.redirect('single-page-questions')
  })

  router.get('/' + version + '/land-issues/shared-usage-agreements', function (req, res) {
    res.render(version + '/land-issues/shared-usage-agreements', {})
  })

  router.post('/' + version + '/land-issues/shared-usage-agreements', function (req, res) {
    res.redirect('single-page-questions')
  })

}
