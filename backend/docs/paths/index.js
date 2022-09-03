const project = require('./project');
const resource = require('./resource');
const topic = require('./topic');

module.exports = {
    paths: {
        ...project,
        ...resource,
        ...topic,
    },
};
