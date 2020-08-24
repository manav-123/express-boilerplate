define({ "api": [  {    "type": "get",    "url": "v1/files/:_id",    "title": "Delete file",    "description": "<p>Delete file</p>",    "version": "1.0.0",    "name": "Delete_any_uploaded_file",    "group": "Files",    "permission": [      {        "name": "public"      }    ],    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ],        "Unauthorized 401": [          {            "group": "Unauthorized 401",            "optional": false,            "field": "Unauthorized",            "description": "<p>Only authenticated users can create the data</p>"          }        ]      }    },    "filename": "src/api/v1/files/routes.js",    "groupTitle": "Files"  },  {    "type": "get",    "url": "v1/files/:_id",    "title": "Download file",    "description": "<p>Download file</p>",    "version": "1.0.0",    "name": "getFile",    "group": "Files",    "permission": [      {        "name": "public"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "number",            "optional": false,            "field": "width",            "description": "<p>desire width</p>"          },          {            "group": "Parameter",            "type": "number",            "optional": false,            "field": "height",            "description": "<p>desire height</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "accessToken",            "description": "<p>user access token</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "format",            "description": "<p>desire format</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ],        "Unauthorized 401": [          {            "group": "Unauthorized 401",            "optional": false,            "field": "Unauthorized",            "description": "<p>Only authenticated users can create the data</p>"          }        ]      }    },    "filename": "src/api/v1/files/routes.js",    "groupTitle": "Files"  },  {    "type": "post",    "url": "v1/files/",    "title": "Upload file",    "description": "<p>Upload file</p>",    "version": "1.0.0",    "name": "uploadFile",    "group": "Files",    "permission": [      {        "name": "user"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>User's access token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "file",            "optional": false,            "field": "file",            "description": "<p>file</p>"          },          {            "group": "Parameter",            "type": "String",            "allowedValues": [              "video",              "image"            ],            "optional": false,            "field": "fileType",            "description": "<p>type of image</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ],        "Unauthorized 401": [          {            "group": "Unauthorized 401",            "optional": false,            "field": "Unauthorized",            "description": "<p>Only authenticated users can create the data</p>"          }        ]      }    },    "filename": "src/api/v1/files/routes.js",    "groupTitle": "Files"  },  {    "type": "PUT",    "url": "v1/user/block-unblock/:userId",    "title": "Block/Unblock company user",    "description": "<p>Company admin can block and unblock any user any time.</p>",    "version": "1.0.0",    "name": "Block_Unblock_User",    "group": "User",    "permission": [      {        "name": "private"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "status",            "description": ""          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>User is already added on platform</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "No",            "description": "<p>Content</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "PUT",    "url": "v1/user/change-password",    "title": "Change Password",    "description": "<p>User can change password</p>",    "version": "1.0.0",    "name": "Change_Password",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>(minimum 8 , maximum 16)  New password for account</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "oldPassword",            "description": "<p>(minimum 8 , maximum 16)  Old password for account</p>"          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Old password does not matched</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "No",            "description": "<p>Content</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "PUT",    "url": "v1/user/change-role",    "title": "Change Roles",    "description": "<p>Change Role of users</p>",    "version": "1.0.0",    "name": "Change_Roles",    "group": "User",    "permission": [      {        "name": "private"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userId",            "description": "<p>User id of user</p>"          },          {            "group": "Parameter",            "type": "role",            "optional": false,            "field": "role",            "description": "<p>[admin, team-member]</p>"          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Invalid data</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "No",            "description": "<p>Content</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "PUT",    "url": "v1/user/edit-profile",    "title": "Edit Profile",    "description": "<p>Update profile information</p>",    "version": "1.0.0",    "name": "Edit_Profile",    "group": "User",    "permission": [      {        "name": "private"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "firstName",            "description": "<p>First Name of user</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "lastName",            "description": "<p>Last Name of user</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "photo",            "description": "<p>photo id user</p>"          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Invalid data</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "No",            "description": "<p>Content</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "POST",    "url": "v1/user/forgot-password",    "title": "Forgot Password",    "description": "<p>Request reset password</p>",    "version": "1.0.0",    "name": "Forgot_Password",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Registered email</p>"          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Email not found</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "No",            "description": "<p>Content Redirected to landing page.</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "PUT",    "url": "v1/user/reset-password",    "title": "Reset Password",    "description": "<p>User can reset password</p>",    "version": "1.0.0",    "name": "Reset_Password",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Access token</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>New password for account</p>"          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Old password and New Password are same.</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "No",            "description": "<p>Content</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "GET",    "url": "v1/user/user-available",    "title": "User available",    "description": "<p>Check user is already added in platform or not</p>",    "version": "1.0.0",    "name": "User_available",    "group": "User",    "permission": [      {        "name": "private"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": ""          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>User is already added on platform</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "No",            "description": "<p>Content</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "delete",    "url": "v1/user/delete",    "title": "Delete user",    "description": "<p>Delete user account</p>",    "version": "1.0.0",    "name": "delete",    "group": "User",    "permission": [      {        "name": "private"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization token</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "Account",            "description": "<p>deleted successfully</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "v1/user/email-verification",    "title": "Email Verification",    "description": "<p>User's Email verification</p>",    "version": "1.0.0",    "name": "emailVerification",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Email Verification token</p>"          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Token expires</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "No",            "description": "<p>Content Redirected to landing page.</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "v1/user/login",    "title": "Login user",    "description": "<p>Login a account</p>",    "version": "1.0.0",    "name": "loginUser",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Password</p>"          },          {            "group": "Parameter",            "type": "String",            "allowedValues": [              "ios",              "android",              "browser"            ],            "optional": false,            "field": "clientType",            "description": "<p>Client Type</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "deviceToken",            "description": "<p>Device Token</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "token",            "description": "<p>Access Token's object {accessToken: String, refreshToken: String, expiresIn: Number}</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User detail object {_id:String, firstName:String, lastName:String, email: String }</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ],        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Credentials did not match</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "put",    "url": "v1/user/logout",    "title": "Logout user",    "description": "<p>Logout from a account</p>",    "version": "1.0.0",    "name": "logoutUser",    "group": "User",    "permission": [      {        "name": "private"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "refreshToken",            "description": "<p>Refresh token</p>"          }        ]      }    },    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization token</p>"          }        ]      }    },    "success": {      "fields": {        "No Content 204": [          {            "group": "No Content 204",            "optional": false,            "field": "User",            "description": "<p>logged out successfully</p>"          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Refresh token did not match</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "put",    "url": "v1/user/refresh-token",    "title": "Refresh token",    "description": "<p>Get new access token</p>",    "version": "1.0.0",    "name": "refreshToken",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "refreshToken",            "description": "<p>Refresh token</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "token",            "description": "<p>Access Token's object {accessToken: String, refreshToken: String, expiresIn: Number}</p>"          }        ]      }    },    "error": {      "fields": {        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Refresh token did not match</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "v1/user/register",    "title": "Register user",    "description": "<p>Register a user account</p>",    "version": "1.0.0",    "name": "registerUser",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "company",            "description": "<p>Company name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "firstName",            "description": "<p>First name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "lastName",            "description": "<p>Last name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Password</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "token",            "description": "<p>Access Token's object {accessToken: String, refreshToken: String, expiresIn: Number}</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>User detail object {_id:String, firstName:String, lastName:String, email: String }</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ],        "Conflict 409": [          {            "group": "Conflict 409",            "optional": false,            "field": "ValidationError",            "description": "<p>Email address is already exists</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "v1/user",    "title": "Get single user or list of users",    "description": "<p>Get user or All users</p>",    "version": "1.0.0",    "name": "user",    "group": "User",    "permission": [      {        "name": "private"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userId",            "description": "<p>(Optional)  User id of any user else all users returned</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "companyId",            "description": "<p>(Optional)  Get list of users under a single company</p>"          }        ]      }    },    "success": {      "fields": {        "Ok 200": [          {            "group": "Ok 200",            "optional": false,            "field": "User",            "description": "<p>fetched successfully</p>"          }        ]      }    },    "filename": "src/api/v1/user/routes.js",    "groupTitle": "User"  }] });
