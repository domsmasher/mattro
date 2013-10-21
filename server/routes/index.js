exports.index = function(req, res){
    var production = ( 'production' == process.env.NODE_ENV ? true : false );

    res.render('index', { title: 'Express', production: production });
};