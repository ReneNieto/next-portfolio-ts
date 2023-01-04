import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'companyImg',
      title: 'Company Image',
      type: 'image',
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'text',
    },
    {
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'Is Currently Working Here',
      type: 'boolean',
    },
    {
      name: 'tecnologies',
      title: 'Tecnologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
