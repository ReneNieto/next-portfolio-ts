import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Social Title',
      description: 'The title of the social media',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
      description: 'The url of the social media',
    },
  ],
})
