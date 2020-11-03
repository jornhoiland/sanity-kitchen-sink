export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa12756e91ce79a7f09cfc4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qt5s23r2',
                  apiId: '99f5549e-d89a-4b83-af84-80650ef1aebb'
                },
                {
                  buildHookId: '5fa12756800ab28920e52e8b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gv2feutn',
                  apiId: '1cb54e6d-a7bc-4514-80d4-6e44e0470665'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jornhoiland/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gv2feutn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
