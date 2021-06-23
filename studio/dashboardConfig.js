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
                  buildHookId: '60d37d6b55473400a2db8462',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-r8kqvjt3',
                  apiId: 'b18550f5-6bbb-4581-9ff0-aba8c451b4fd'
                },
                {
                  buildHookId: '60d37d6c34d90500d4a56892',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-ocsxxrq7',
                  apiId: '3f33d883-bdb4-4714-b485-b41c4e76c59c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/steve904/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-ocsxxrq7.netlify.app',
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
