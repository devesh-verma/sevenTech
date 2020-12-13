'use strict';

module.exports.getIncident = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: [
          {
            id: 1,
            location: {
              latitude: 12.9231501,
              longitude: 74.7818517
            },
            title: "incident title",
            category: 1,
            people: [
              {
                name: "Name of person",
                type: "staff"
              },
              {
                name: "Name of person",
                type: "witness"
              },
              {
                name: "Name of person",
                type: "staff"
              }
            ],
            comments: "This is a string of comments",
            incidentDate: "2020-09-01T13:26:00+00:00",
            createDate: "2020-09-01T13:32:59+01:00",
            modifyDate: "2020-09-01T13:32:59+01:00"
          },
          {
            id: 2,
            location: {
              latitude: 12.9231501,
              longitude: 74.7818517
            },
            title: "incident title",
            category: 1,
            people: [
              {
                name: "Name of person",
                type: "staff"
              },
              {
                name: "Name of person",
                type: "witness"
              },
              {
                name: "Name of person",
                type: "staff"
              }
            ],
            comments: "This is a string of comments",
            incidentDate: "2020-09-01T13:26:00+00:00",
            createDate: "2020-09-01T13:32:59+01:00",
            modifyDate: "2020-09-01T13:32:59+01:00"
          },
          {
            id: 3,
            location: {
              latitude: 12.9231501,
              longitude: 74.7818517
            },
            title: "incident title",
            category: 1,
            people: [
              {
                name: "Name of person",
                type: "staff"
              },
              {
                name: "Name of person",
                type: "witness"
              },
              {
                name: "Name of person",
                type: "staff"
              }
            ],
            comments: "This is a string of comments",
            incidentDate: "2020-09-01T13:26:00+00:00",
            createDate: "2020-09-01T13:32:59+01:00",
            modifyDate: "2020-09-01T13:32:59+01:00"
          },
          {
            id: 4,
            location: {
              latitude: 12.9231501,
              longitude: 74.7818517
            },
            title: "incident title",
            category: 1,
            people: [
              {
                name: "Name of person",
                type: "staff"
              },
              {
                name: "Name of person",
                type: "witness"
              },
              {
                name: "Name of person",
                type: "staff"
              }
            ],
            comments: "This is a string of comments",
            incidentDate: "2020-09-01T13:26:00+00:00",
            createDate: "2020-09-01T13:32:59+01:00",
            modifyDate: "2020-09-01T13:32:59+01:00"
          }
        ]
      },
      null,
      2
    ),
  };
};

module.exports.postIncident = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: [
          {
            id: 0,
            location: {
              latitude: 12.9231501,
              longitude: 74.7818517
            },
            title: "incident title",
            category: 1,
            people: [
              {
                name: "Name of person",
                type: "staff"
              },
              {
                name: "Name of person",
                type: "witness"
              },
              {
                name: "Name of person",
                type: "staff"
              }
            ],
            comments: "This is a string of comments",
            incidentDate: "2020-09-01T13:26:00+00:00",
            createDate: "2020-09-01T13:32:59+01:00",
            modifyDate: "2020-09-01T13:32:59+01:00"
          }
        ]
      },
      null,
      2
    ),
  };
};