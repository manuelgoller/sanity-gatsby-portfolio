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
                  buildHookId: '5e84a69fa8e3d7e85d94e319',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-p5kxgfyv',
                  apiId: 'cde58f8e-0298-4350-a05c-6aefbad3f937'
                },
                {
                  buildHookId: '5e84a6a0a063b23bb0416144',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u7t5tyz4',
                  apiId: '453cb7fe-cb12-4b95-b636-2766a4aea8f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/manuelgoller/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u7t5tyz4.netlify.com',
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
