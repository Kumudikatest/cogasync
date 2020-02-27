let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    try {
        let data = await cognito_idp.adminCreateUser({
            UserPoolId: "us-east-1_HdYJb7Znp",
            Username: "Kumu",
            DesiredDeliveryMediums: ['SMS'],
            ForceAliasCreation: false,
            TemporaryPassword: "Test@123"
        }).promise();
        console.log(data);

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};