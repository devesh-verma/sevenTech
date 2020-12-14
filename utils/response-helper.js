//expects original event triggered by api gateway
function getQueryParameter(parameter, event) {
  return ((event.queryStringParameters || {})[parameter]);
}

function prepareLambdaResponse(body, statusCode) {
  return {
    statusCode,
    body: typeof body === 'object' ? JSON.stringify({ data: [body] }) : { data: [body] },
  }
}

module.exports = {
  getQueryParameter,
  prepareLambdaResponse
}
