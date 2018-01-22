/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

exports.authMapping = {
    //STATIC SECURITY
    'POST - /api/changePassword$': [],
    'POST - /api/users/$': ["ADMIN"],
    'POST - /api/users/([^/])+$': ["ADMIN"],
    'GET - /api/users/$': ["ADMIN"],
    'GET - /api/users/([^/])+$': ["ADMIN"],
    'POST - /api/users/([^/])+/changePassword': ["ADMIN"],

    //YOUR SECURITY MAPPING
	'POST - /api/actors/$' : [],
	'DELETE - /api/actors/([^/])+$' : [],
	'GET - /api/actors/([^/])+$' : [],
	'GET - /api/actors/$' : [],
	'POST - /api/actors/([^/])+$' : [],
	'POST - /api/films/$' : [],
	'DELETE - /api/films/([^/])+$' : [],
	'GET - /api/films/findBycast/([^/])+$' : [],
	'GET - /api/films/findByfilmMaker/([^/])+$' : [],
	'GET - /api/films/([^/])+$' : [],
	'GET - /api/films/$' : [],
	'POST - /api/films/([^/])+$' : [],
	'POST - /api/filmmakers/$' : [],
	'DELETE - /api/filmmakers/([^/])+$' : [],
	'GET - /api/filmmakers/([^/])+$' : [],
	'GET - /api/filmmakers/$' : [],
	'POST - /api/filmmakers/([^/])+$' : [],
	

}
