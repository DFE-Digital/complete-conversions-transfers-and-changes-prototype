module.exports = function (router) {

  var version = "0-28";

  router.get('/' + version + '/project-list/team/unassigned', function (req, res) {
    res.render(version + '/project-list/team/unassigned', {})
  })

  router.post('/' + version + '/project-list/team/unassigned', function (req, res) {
    req.session.data.fromTeamLeadProjectList = 'true'

    res.redirect('/' + version + '/assign-user/edit-completed-by')
  })

}
