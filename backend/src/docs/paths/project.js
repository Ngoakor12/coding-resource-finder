module.exports = {
    '/all/projects': {
        get: {
            tags: ['Project'],
            summary: 'Get all projects',
            operationId: 'projects',
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
                                                title: '1. semitone difference - basic algorithm',
                                                url: 'http://syllabus.africacode.net/projects/semitone-challenge/basic-algorithm/',
                                                type: 'project',
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
    '/all/projects/{page}': {
        get: {
            tags: ['Project'],
            summary: 'Get project by page',
            operationId: 'project_page',
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
                                        example: 11,
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
                                                url: 'http://syllabus.africacode.net/projects/semitone-challenge/gui-part-1/',
                                                title: '1. semitone difference - Make a simple GUI',
                                                type: 'project',
                                            },
                                            {
                                                url: 'http://syllabus.africacode.net/projects/semitone-challenge/basic-algorithm/',
                                                title: '1. semitone difference - basic algorithm',
                                                type: 'project',
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
