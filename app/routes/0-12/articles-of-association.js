module.exports = function (router) {

  var version = "0-12";

  router.get('/' + version + '/articles-of-association/single-page-questions', function (req, res) {
    res.render(version + '/articles-of-association/single-page-questions', {})
  })

  router.post('/' + version + '/articles-of-association/single-page-questions', function (req, res) {
    const checkArticlesOfAssociation = req.session.data['checkArticlesOfAssociation']

    if (checkArticlesOfAssociation != 'Yes, the Articles of association have been cleared'){
      req.session.data.articlesOfAssociationStatus = 'inProgress'
    } else {
      req.session.data.articlesOfAssociationStatus = 'completed'
    }

    res.redirect('../project-task-list')
  })

}
