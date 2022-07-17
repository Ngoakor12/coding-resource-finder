module.exports = {
    '/all/topics': {
        get: {
            tags: ['Topics'],
            summary: 'Get all topics',
            operationId: 'topics',
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
                                                title: 'API basics',
                                                url: 'http://syllabus.africacode.net/topics/apis/basics/',
                                                type: 'topic',
                                            },
                                            {
                                                title: 'APIs and Node',
                                                url: 'http://syllabus.africacode.net/topics/js-and-node-specific/apis-with-node/',
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
    '/all/topics/{page}': {
        get: {
            tags: ['Topics'],
            summary: 'Get a page of topics',
            operationId: 'topic_page',
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
                                        example: 18,
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
                                                title: 'API basics',
                                                url: 'http://syllabus.africacode.net/topics/apis/basics/',
                                                type: 'topic',
                                            },
                                            {
                                                title: 'APIs and Node',
                                                url: 'http://syllabus.africacode.net/topics/js-and-node-specific/apis-with-node/',
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
