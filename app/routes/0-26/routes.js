module.exports = function (router) {

  var version = "0-26";

  router.get('/' + version + '/set-up', function (req, res) {
    res.render(version + '/set-up', {})
  })

  router.post("/" + version + "/set-up", function (req, res) {
    const userType = req.session.data["userType"];
    const setPrototypeVariant = req.session.data["setPrototypeVariant"];

    let variant = "";
    if (setPrototypeVariant == "2") {
      variant = "-2";
    }

    if (userType == "team-lead") {
      res.redirect("project-list" + variant + "/team-lead/unassigned");
    } else {
      res.redirect("project-list" + variant + "/caseworker/active");
    }
  });


  router.get('/' + version + '/start', function (req, res) {
    const journeyType = req.session.data['journeyType']

    if (journeyType == null){
      req.session.data.journeyType = ['multiPage']
    }
    res.render(version + '/start', {})
  })

  router.post('/' + version + '/start', function (req, res) {
    req.session.data.fromTeamLeadProjectList = 'true'

    res.redirect('assign-user/edit-completed-by')
  })


  router.get('/' + version + '/project-task-list', function (req, res) {
    res.render(version + '/project-task-list', {})
  })

  router.post('/' + version + '/project-task-list', function (req, res) {
    res.redirect('project-completed')
  })


  router.get('/' + version + '/project-completed', function (req, res) {
    res.render(version + '/project-completed', {})
  })

  router.post('/' + version + '/project-completed', function (req, res) {
    const userType = req.session.data['userType']

    if (userType == 'team-lead'){
      res.redirect('project-list/team-lead/unassigned')
    } else {
      res.redirect('project-list/caseworker/active')
    }
  })

}
