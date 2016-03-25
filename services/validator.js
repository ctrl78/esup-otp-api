var restify = require('restify');

var required = {
    create_user: ['uid'],
    get_user: ['uid'],
    set_otp: ['uid', 'otp'],
    get_available_transports: ['uid'],
    verify_code: ['uid', 'otp'],
    send_code: ['uid', 'method', 'transport'],
    generate: ['uid', 'method'],
    get_google_authenticator_secret: ['uid'],
    toggle_method: ['uid', 'method'],
    update_transport: ['uid', 'transport', 'new_transport'],
    toggle_method_transport: ['transport', 'method'],
    get_activate_methods: ['uid'],
    toggle_method_admin: ['method'],
}

function validate(req, required) {
    var validate = true;
    for (i in required) {
        if (req.params[required[i]] && req.params[required[i]]!='');
        else validate = false;
    }
    return validate;
}

function check_parameters(req, required) {
    if (validate(req, required)) {
        return true
    } else {
        return false;
    }
}

exports.create_user = function(req, res, next) {
    if (check_parameters(req, required.create_user)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.get_user = function(req, res, next) {
    if (check_parameters(req, required.get_user)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.set_otp = function(req, res, next) {
    if (check_parameters(req, required.set_otp)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.get_available_transports = function(req, res, next) {
    if (check_parameters(req, required.get_available_transports)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.get_activate_methods = function(req, res, next) {
    if (check_parameters(req, required.get_activate_methods)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.toggle_method = function(req, res, next) {
    if (check_parameters(req, required.toggle_method)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.update_transport = function(req, res, next) {
    if (check_parameters(req, required.update_transport)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.toggle_method_transport = function(req, res, next) {
    if (check_parameters(req, required.toggle_method_transport)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.toggle_method_admin = function(req, res, next) {
    if (check_parameters(req, required.toggle_method_admin)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.send_code = function(req, res, next) {
    if (check_parameters(req, required.send_code)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.verify_code = function(req, res, next) {
    if (check_parameters(req, required.verify_code)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.generate= function(req, res, next) {
    if (check_parameters(req, required.generate)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}

exports.get_google_authenticator_secret = function(req, res, next) {
    if (check_parameters(req, required.get_google_authenticator_secret)) {
        return next();
    } else {
        return next(new restify.InvalidArgumentError());
    }
}
