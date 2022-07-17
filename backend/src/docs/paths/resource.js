module.exports = {
    '/all': {
        get: {
            tags: ['Resources'],
            summary: 'Get all resources',
            operationId: 'resource',
            responses: {
                200: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    num_of_resources: {
                                        type: 'number',
                                        example: 2,
                                    },
                                    data: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        example: [
                                            {
                                                title: '1. semitone difference - Make a simple GUI',
                                                url: 'http://syllabus.africacode.net/projects/semitone-challenge/gui-part-1/',
                                                type: 'project',
                                            },
                                            {
                                                title: 'API basics',
                                                url: 'http://syllabus.africacode.net/topics/apis/basics/',
                                                type: 'topic',
                                            },
                                        ],
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    '/all/{page}': {
        get: {
            tags: ['Resources'],
            summary: 'Get a page of resources',
            operationId: 'resource_page',
            parameters: [
                {
                    in: 'path',
                    name: 'page',
                    required: true,
                    description: 'Page number',
                    schema: {
                        type: 'integer',
                        example: 1,
                    },
                },
            ],
            responses: {
                200: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    current_page: {
                                        type: 'number',
                                        example: 1,
                                    },
                                    num_of_pages: {
                                        type: 'number',
                                        example: 29,
                                    },
                                    num_of_resources: {
                                        type: 'number',
                                        example: 20,
                                    },
                                    data: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        example: [
                                            {
                                                title: '1. semitone difference - Make a simple GUI',
                                                url: 'http://syllabus.africacode.net/projects/semitone-challenge/gui-part-1/',
                                                type: 'project',
                                            },
                                            {
                                                title: 'API basics',
                                                url: 'http://syllabus.africacode.net/topics/apis/basics/',
                                                type: 'topic',
                                            },
                                        ],
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
