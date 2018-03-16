//控制登录
exports.checkLogin = function (req,res,next) {
  if(res.session.user){
      next();
  }else{
      res.redirect('/user/business');
  }
};
exports.checkNotLogin = function (req,res,next) {
    if(req.session.user){
        res.redirect('/');
    }else{
        next();
    }
};