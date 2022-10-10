module.exports = function (router) {

  var version = "0-9";

  router.get('/' + version + '/direction-to-transfer/single-page-questions', function (req, res) {
    res.render(version + '/direction-to-transfer/single-page-questions', {})
  })

  router.post('/' + version + '/direction-to-transfer/single-page-questions', function (req, res) {
    const clearDirectionToTransfer = req.session.data['clearDirectionToTransfer']

    if (clearDirectionToTransfer != 'Yes, the Direction to transfer has cleared'){
      req.session.data.directionToTransferStatus = 'inProgress'
    } else {
      req.session.data.directionToTransferStatus = 'completed'
    }

    res.redirect('../project-task-list')
  })

}
