
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const properties = require('../properties.js');
const logger = require('../logger.js');
const app = require('../app.js');
const path = require('path');
exports.connection;


/**
 * Start database connection
 */
connectDB = function()  {
	const dbConnection_Manage_Film_Example_db = mongoose.createConnection('mongodb://' + properties.Manage_Film_Example_db_dbUrl, function(err){
		if(err) {
			logger.error(err);
			setTimeout(function() {
				console.log("Retry DB connection");
				connectDB();
			}, 3000);
		}
		else
		{
		    exports.connection = dbConnection_Manage_Film_Example_db;
			logger.info("MongoDB connected at: " + properties.Manage_Film_Example_db_dbUrl);
			
			//START IMPORT RESOURCE

			require('./Manage_Film_Example_db_schema.js');
            require('../security/userResource.js');

			require('../resource/Manage_Film_Example_db/Actor.js');
			require('../resource/Manage_Film_Example_db/Film.js');
			require('../resource/Manage_Film_Example_db/FilmMaker.js');
			
			//END IMPORT RESOURCE
		}
		
		
        // Redirect for Angular 4 pages
        app.use('*', (req, res, next) => {
            if(req._parsedOriginalUrl) {
                url = req._parsedOriginalUrl.path;
                if(!url.startsWith('/api/') && url.indexOf('.') == -1) {
                    res.status(200).sendFile(path.resolve(__dirname + '//..//..//client//dist//index.html'));
                } else {
                    next();
                }
            } else {
                next();
            }
        });
	});

}

connectDB();