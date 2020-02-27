let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {

    try {
        let data = await cognito_idp.adminGetUser({
            UserPoolId: "us-east-1_HdYJb7Znp",
            Username: "Kumu"
        }).promise();
        console.log(data);

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};