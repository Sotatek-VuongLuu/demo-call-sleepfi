const AWS = require("@aws-sdk/client-cloudfront")
const call = async () => {
    let cloudfront = new AWS.CloudFront({ apiVersion: "2017-03-25" });
    var params = {
      DistributionId: "E2TXCE4LCVKNG2",
      InvalidationBatch: {
        CallerReference: Math.random() + "",
        Paths: {
          Quantity: 1,
          Items: ["/*"],
        },
      },
    };
    
    // Invalidate cloudfront
    cloudfront.createInvalidation(params, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    });
}

call()