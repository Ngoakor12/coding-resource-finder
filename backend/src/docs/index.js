const servers = require('./servers');
const tags = require('./tags');
const swagger = require('./swagger');
const apis = require('./paths');

module.exports = {
    ...swagger,
    ...servers,
    ...tags,
    ...apis,
};
