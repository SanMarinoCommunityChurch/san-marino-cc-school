export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title for backend organization only.',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Testimonial Content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'attribution',
            title: 'Attribution',
            description: 'Name of the parent or person providing testimonial.',
            type: 'string'
        }
    ]
}