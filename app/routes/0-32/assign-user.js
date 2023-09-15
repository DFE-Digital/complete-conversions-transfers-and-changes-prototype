module.exports = function (router) {

  var version = "";

  router.get('/' + version + '/assign-user/edit-contact', function (req, res) {
    res.render(version + '/assign-user/edit-contact', {})
  })

  router.post('/' + version + '/assign-user/edit-contact', function (req, res) {

    if ( req.session.data['fromTeamLeadProjectList'] == 'true' ){
      res.redirect('/' + version + '/projects/team/unassigned')
    } else {
      res.redirect('../project/conversion/about-the-project')
    }

  })



}
