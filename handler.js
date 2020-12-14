const { Logger } = require('./utils/index');
const { HTTP_STATUS_CODES } = require('./utils/index');
const { config } = require('./config/config.js')
const { IncidentController } = require('./controllers/incident-controller');

// exposed lambda handler
exports.getIncident = async function (event, context) {
  Logger.info(config, "Processing handler.getIncident", { data: event.queryStringParameters });
  let incidentController = new IncidentController(config);
  let result = await incidentController.getIncident(event.queryStringParameters);
  return result;
}
exports.postIncident = async function (event, context) {
  Logger.info(config, "Processing handler.postIncident", { data: event.body });
  let incidentController = new IncidentController(config);
  try {
    let result = await incidentController.postIncident(event.body);
    return result;
  } catch (error) {
    return {
      statusCode: error.statusCode || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      body: JSON.stringify(error)
    }
  }
}
