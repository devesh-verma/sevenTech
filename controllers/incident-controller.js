const { Logger } = require('../utils/index');
const { Response_Helper } = require('../utils/index');
const { HTTP_STATUS_CODES } = require('../utils/index');
const { PostIncidentModel } = require('../models/IncidentModel');
const { IncidentService } = require('../services/incident-service');

class IncidentController {
  constructor(config) {
    this.config = config;
    this.incidentService = new IncidentService(config);
  }

  async getIncident() {
    Logger.info(this.config, "Processing IncidentController.getIncident");
    let result = await this.incidentService.getIncident();
    
    return Response_Helper.prepareLambdaResponse(result, HTTP_STATUS_CODES.OK);
  }

  async postIncident(params) {
    return new Promise(async (resolve, reject) => {
      Logger.info(this.config, "Processing IncidentController.postIncident");
      const parsedData = JSON.parse(params);
      const newIncident = new PostIncidentModel(parsedData.data[0]);
      
      this._validate(newIncident)
        .then(async () => {
          let response = await this.incidentService.postIncident(newIncident);
          
          Logger.info(this.config, "Success: IncidentController.postIncident");
          resolve(Response_Helper.prepareLambdaResponse(response, HTTP_STATUS_CODES.OK));
        }).catch(error => {
          Logger.info(this.config, "Failure: IncidentController.postIncident");
          reject({
            statuCode: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
            message: error.message || "Validation error",
            error: error.errors
          })
        })
    })
  }

  _validate(data) {
    return new Promise((resolve, reject) => {
      data.validate(err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      })
    })
  }
}

module.exports = {
  IncidentController
}
