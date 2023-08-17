module.exports = function (router) {

  var version = "0-30";

  router.get('/' + version + '/projects/team/unassigned', function (req, res) {
    res.render(version + '/projects/team/unassigned', {})
  })

  router.post('/' + version + '/projects/team/unassigned', function (req, res) {
    req.session.data.fromTeamLeadProjectList = 'true'

    res.redirect('/' + version + '/assign-user/edit-completed-by')
  })

}
