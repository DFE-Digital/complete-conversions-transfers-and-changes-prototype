module.exports = function (router) {

  var version = "0-30";

  router.get('/' + version + '/add-project/add-project', function (req, res) {
    res.render(version + '/add-project/add-project', {})
  })

  router.post('/' + version + '/add-project/add-project', function (req, res) {
    res.redirect('../project-information')
  })

}
