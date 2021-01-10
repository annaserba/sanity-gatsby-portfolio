export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ffb8cda34de3f8de412399f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bjapgdm9',
                  apiId: '3e7ca9dc-66b4-4525-89ab-f277e5de824a'
                },
                {
                  buildHookId: '5ffb8cda1e1809067a40edd1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9dm5uhhs',
                  apiId: '65da622b-40e1-41d4-9f2b-33120d4a2d47'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/annaserba/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9dm5uhhs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
