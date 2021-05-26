"use strict";
exports.__esModule = true;
exports.router = void 0;
var express = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('not permitted');
}
var router = express.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n  <form method=\"POST\">\n    <div>\n      <label>Email</label>\n      <input name=\"email\" />\n    </div>\n    <div>\n      <label>Password</label>\n      <input name=\"password\" type=\"password\"/>\n    </div>\n    <button>Submit</button>\n  </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        console.log('req.session: ' + req.session);
        res.redirect('/');
    }
    else {
        res.send('invalid email or password');
    }
});
router.get('/', function (req, res) {
    console.log('req session 2: ' + req.session);
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>you are logged in</div>\n        <a href='/logout'>Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>you are not logged in</div>\n        <a href='/login'>Login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('welcome');
});
