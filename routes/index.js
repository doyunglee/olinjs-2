
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Cats' });
  res.render('catlist', { title: 'Cats'});
};


