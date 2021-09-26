module.exports = function (reg, res, next) {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    } 
  //  req.user ? next() : res.sendStatus(401)

}


// Auth middleware that checks if the user is logged in
// const isLoggedIn = (req, res, next) => {
//     if (req.user) {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// } 