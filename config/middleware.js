module.exports.setFlash = function(req, res, next){
    // fetches everything from the request flash and puts into the locals
    res.locals = {
        'success_msg': req.flash('success_msg'),
        'error_msg': req.flash('error_msg'),
        'error': req.flash('error')
    }
    // paases to the next middleware
    next();
}