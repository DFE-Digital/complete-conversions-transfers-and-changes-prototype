module.exports = function (router) {

  var version = "0-25";

  router.get('/' + version + '/trust-modification-order/single-page-questions', function (req, res) {
    res.render(version + '/trust-modification-order/single-page-questions', {})
  })

  router.post('/' + version + '/trust-modification-order/single-page-questions', function (req, res) {
    const clearTrustModificationOrder = req.session.data['clearTrustModificationOrder']

    if (clearTrustModificationOrder != 'Yes the legal team has cleared the Trust modification order'){
      req.session.data.trustModificationOrderStatus = 'inProgress'
    } else {
      req.session.data.trustModificationOrderStatus = 'completed'
    }

    res.redirect('../project-task-list')
  })

}
