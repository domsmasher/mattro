exports.index = function(req, res){
    var base = ( 'production' == process.env.NODE_ENV ? '/website-clear/klog/' : '/klog' );
    console.log(process.env.NODE_ENV);
    res.render('index', { title: 'Express', baseUrl: base });
};