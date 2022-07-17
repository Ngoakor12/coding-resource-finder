const paths = require('./paths');

module.exports = {
    openapi: '3.0.3',
    info: {
        title: `Coding Resource Finder API Documentation ( count: ${
            Object.keys(paths.paths).length
        } )`,
        description: 'API Documentation for Coding Resource Finder',
        version: '1.0.0',
        contact: {
            name: 'Ngoako Ramokgopa',
            email: 'ngoakor12@gmail.com',
        },
    },
};
