module.exports = function (router) {

  var version = "0-25";

  router.get('/' + version + '/contacts', function (req, res) {
    res.render(version + '/contacts', {})
  })

  router.post('/' + version + '/contacts', function (req, res) {
    res.redirect('contacts/edit-contact')
  })


  router.get('/' + version + '/contacts/edit-contact', function (req, res) {
    res.render(version + '/contacts/edit-contact', {})
  })

  router.post('/' + version + '/contacts/edit-contact', function (req, res) {
    res.redirect('../contacts')
  })

  router.get('/' + version + '/contacts/delete-contact', function (req, res) {
    res.render(version + '/contacts/delete-contact', {})
  })

  router.post('/' + version + '/contacts/delete-contact', function (req, res) {
    res.redirect('../contacts')
  })
}
