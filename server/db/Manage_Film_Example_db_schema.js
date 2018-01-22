/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/Manage_Film_Example_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_Manage_Film_Example_db_schema = [];
const db_Manage_Film_Example_db = [];

/**
 * SCHEMA DB Manage_Film_Example_db
 */



 /**
  * Actor
  */
db_Manage_Film_Example_db_schema.Actor = new mongoose.Schema({
	birthDate: {
		type: 'Date'
	},
	name: {
		type: 'String', 
		required : true
	},
	surname: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	cast: [{
		type: Schema.ObjectId,
		ref : "Film"
	}],
	*/
});


 /**
  * Film
  */
db_Manage_Film_Example_db_schema.Film = new mongoose.Schema({
	genre: {
		type: 'String',
		enum : ["Action","Crime","Fantasy","Horror"], 
	},
	title: {
		type: 'String', 
		required : true
	},
	year: {
		type: 'Number'
	},
	//RELATIONS
	cast: [{
		type: Schema.ObjectId,
		ref : "Actor"
	}],
	filmMaker: {
		type: Schema.ObjectId, 
		required : true,
		ref : "FilmMaker"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * FilmMaker
  */
db_Manage_Film_Example_db_schema.FilmMaker = new mongoose.Schema({
	name: {
		type: 'String', 
		required : true
	},
	surname: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	filmMaker: {
		type: Schema.ObjectId, 
		required : true,
		ref : "Film"
	},
	*/
});



/**
 * SCHEMA DB User
 */

db_Manage_Film_Example_db_schema.User = new mongoose.Schema({
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
});


// Import schema customization
require('./Manage_Film_Example_db_customSchema.js');
var Manage_Film_Example_db_model = require('./Manage_Film_Example_db_crud.js');

// Declare mongoose model

db_Manage_Film_Example_db.Actor = Manage_Film_Example_db_model.connection.model('Actor', db_Manage_Film_Example_db_schema.Actor );
db_Manage_Film_Example_db.Film = Manage_Film_Example_db_model.connection.model('Film', db_Manage_Film_Example_db_schema.Film );
db_Manage_Film_Example_db.FilmMaker = Manage_Film_Example_db_model.connection.model('FilmMaker', db_Manage_Film_Example_db_schema.FilmMaker );

db_Manage_Film_Example_db.User = Manage_Film_Example_db_model.connection.model('User', db_Manage_Film_Example_db_schema.User);

module.exports = db_Manage_Film_Example_db;

// Create ADMIN user if does not exist
createUser.createUser();
