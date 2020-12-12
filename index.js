// exposed lambda handler
exports.handler = async function (event, context) {
    // route
    let result = {
        "body": "hello"
    }
    return JSON.stringify(result);
  }