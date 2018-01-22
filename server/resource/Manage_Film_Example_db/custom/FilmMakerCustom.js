
const app = require('../../../app.js');
const db_Manage_Film_Example_db = require('../../../db/Manage_Film_Example_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB FilmMaker
 * 
	{
		name: {
			type: 'String', 
			required : true
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		filmMaker: {
			type: Schema.ObjectId, 
			required : true,
			ref : "Film"
		},
		
	}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


