const app = require('../app.js');
const db_Manage_Film_Example_db = require('../db/Manage_Film_Example_db_schema.js')
const properties = require('../properties.js');
const jwt = require('jsonwebtoken')
const handleError = require('./util.js').handleError

/*
 * SCHEMA DB User
 * 
	{
		username: {
			type: 'String',
            required: true
        },
		password: {
			type: 'String',
            required: true
        },
		mail: {
			type: 'String'
        },
		name: {
			type: 'String'
        },
		surname: {
			type: 'String'
        },
		roles: [{
            type: 'String'
        }]
		
	}
 * 
 */

//CRUD METHODS


//CRUD - CREATE

app.post(properties.api + '/Users/', function(req, res) {
    obj = new db_Manage_Film_Example_db.User(req.body);
    obj.save(function(err) {
        if (err) return handleError(err, res);
        res.send(obj);
    });
});

//CRUD - REMOVE

app['delete'](properties.api + '/Users/:id', function(req, res) {

    db_Manage_Film_Example_db.User.findByIdAndRemove(req.params.id, function(err) {
        if (err) return handleError(err, res);
        res.send({});
    });


});

//CRUD - GET ONE

app.get(properties.api + '/Users/:id', function(req, res) {
    db_Manage_Film_Example_db.User.findOne({ _id: req.params.id }).exec(function(err, obj) {
        if (err) return handleError(err, res);
        res.send(obj);
    });
});


//CRUD - GET LIST

app.get(properties.api + '/Users/', function(req, res) {
    db_Manage_Film_Example_db.User.find().exec(function(err, list) {
        if (err) return handleError(err, res);
        res.send(list);
    });
});

//CRUD - EDIT

app.post(properties.api + '/Users/:id', function(req, res) {
    db_Manage_Film_Example_db.User.findByIdAndUpdate(req.params.id, req.body, { 'new': true }, function(err, obj) {
        if (err) return handleError(err, res);
        res.send(obj);
    });
});

// change password

app.post(properties.api + '/Users/:id/changePassword', function(req, res) {
    
    db_Manage_Film_Example_db.User.findOne({ username: req.user.username, password: req.body.passwordAdmin }).exec(function(err, user) {
        if (err) return handleError(err, res);
        if (!user) return handleError("Admin password not valid", res);
        
        db_Manage_Film_Example_db.User.findByIdAndUpdate(req.params.id, {
            password: req.body.passwordNew
        }, { 'new': true }, function(err, obj) {
            if (err) return handleError(err, res);
            res.send({success: true});
        });

    });

});


/*
 *
 * ADD HERE YOURS CUSTOM SERVICES
 * 
 */
 
 