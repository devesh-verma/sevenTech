const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const postIncidentSchema = new Schema({
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
      if (value.length < 0) {
        throw new Error('title is required');
      }
    }
  },
  category: {
    type: Number,
    required: true
  },
  comments: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 0) {
        throw new Error('comments is required');
      }
    }
  }
});
const PostIncidentModel = mongoose.model('PostIncident', postIncidentSchema);

module.exports = {
  PostIncidentModel
};
