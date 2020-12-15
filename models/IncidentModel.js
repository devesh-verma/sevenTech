const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const postIncidentSchema = new Schema({
  _id: false,
  id: {
    type: Number,
    required: true,
    validate(value) {
      if (!String(value)) {
        throw new Error('Id is required');
      }
    }
  },
  location: {
    latitude: {
      type: Number,
      required: true,
      validate(value) {
        if (!value) {
          throw new Error('latitude is required');
        }
      }
    },
    longitude: {
      type: Number,
      required: true,
      validate(value) {
        if (!value) {
          throw new Error('latitude is required');
        }
      }
    }
  },
  title: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        throw new Error('title is required');
      }
    }
  },
  category: {
    type: Number,
    required: true,
    validate(value) {
      if (!value) {
        throw new Error('category is required');
      }
    }
  },
  people: [{
    _id: false,
    name: {
      type: String,
      required: true,
      validate(value) {
        if (!value) {
          throw new Error('name is required');
        }
      }
    },
    type: {
      type: String,
      required: true,
      validate(value) {
        if (!value) {
          throw new Error('type is required');
        }
      }
    }
  }],
  comments: {
    type: String,
    required: true,
    validate(value) {
      if (!value) {
        throw new Error('comments is required');
      }
    }
  },
  incidentDate: {
    type: Date,
    required: true,
    validate(value) {
      if (!value) {
        throw new Error('incidentDate is required');
      }
    }
  },
  createDate: {
    type: Date,
    required: true,
    validate(value) {
      if (!value) {
        throw new Error('createDate is required');
      }
    }
  },
  modifyDate: {
    type: Date,
    required: true,
    validate(value) {
      if (!value) {
        throw new Error('modifyDate is required');
      }
    }
  }
});
const PostIncidentModel = mongoose.model('PostIncident', postIncidentSchema);

module.exports = {
  PostIncidentModel
};
