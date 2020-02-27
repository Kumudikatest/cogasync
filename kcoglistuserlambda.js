let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    try {
        let data = await cognito_idp.adminDisableUser({
            UserPoolId: "us-east-1_HdYJb7Znp",
            Username: "Kumu"
        }).promise();
        console.log(data);

    } catch (err) {
        console.log(err);
    };

    return { "message": "Successfully executed" };
};