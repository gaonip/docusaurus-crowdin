import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fr/__docusaurus/debug',
    component: ComponentCreator('/fr/__docusaurus/debug', '0ba'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/config',
    component: ComponentCreator('/fr/__docusaurus/debug/config', '2f7'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/content',
    component: ComponentCreator('/fr/__docusaurus/debug/content', '43d'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/globalData',
    component: ComponentCreator('/fr/__docusaurus/debug/globalData', 'dbd'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/metadata',
    component: ComponentCreator('/fr/__docusaurus/debug/metadata', '19c'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/registry',
    component: ComponentCreator('/fr/__docusaurus/debug/registry', '374'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/routes',
    component: ComponentCreator('/fr/__docusaurus/debug/routes', 'fac'),
    exact: true
  },
  {
    path: '/fr/blog',
    component: ComponentCreator('/fr/blog', '276'),
    exact: true
  },
  {
    path: '/fr/blog/archive',
    component: ComponentCreator('/fr/blog/archive', 'a75'),
    exact: true
  },
  {
    path: '/fr/blog/first-blog-post',
    component: ComponentCreator('/fr/blog/first-blog-post', '3a9'),
    exact: true
  },
  {
    path: '/fr/blog/long-blog-post',
    component: ComponentCreator('/fr/blog/long-blog-post', '438'),
    exact: true
  },
  {
    path: '/fr/blog/mdx-blog-post',
    component: ComponentCreator('/fr/blog/mdx-blog-post', '2ef'),
    exact: true
  },
  {
    path: '/fr/blog/tags',
    component: ComponentCreator('/fr/blog/tags', 'c74'),
    exact: true
  },
  {
    path: '/fr/blog/tags/docusaurus',
    component: ComponentCreator('/fr/blog/tags/docusaurus', '3b6'),
    exact: true
  },
  {
    path: '/fr/blog/tags/facebook',
    component: ComponentCreator('/fr/blog/tags/facebook', 'ea5'),
    exact: true
  },
  {
    path: '/fr/blog/tags/hello',
    component: ComponentCreator('/fr/blog/tags/hello', '161'),
    exact: true
  },
  {
    path: '/fr/blog/tags/hola',
    component: ComponentCreator('/fr/blog/tags/hola', 'faa'),
    exact: true
  },
  {
    path: '/fr/blog/welcome',
    component: ComponentCreator('/fr/blog/welcome', 'da6'),
    exact: true
  },
  {
    path: '/fr/markdown-page',
    component: ComponentCreator('/fr/markdown-page', '924'),
    exact: true
  },
  {
    path: '/fr/docs',
    component: ComponentCreator('/fr/docs', 'f0f'),
    routes: [
      {
        path: '/fr/docs/category/tutorial---basics',
        component: ComponentCreator('/fr/docs/category/tutorial---basics', '800'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/category/tutorial---extras',
        component: ComponentCreator('/fr/docs/category/tutorial---extras', '129'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/intro',
        component: ComponentCreator('/fr/docs/intro', '404'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/fr/docs/tutorial-basics/congratulations', '348'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/fr/docs/tutorial-basics/create-a-blog-post', '129'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/fr/docs/tutorial-basics/create-a-document', '4b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/fr/docs/tutorial-basics/create-a-page', 'a8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/fr/docs/tutorial-basics/deploy-your-site', 'df9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/fr/docs/tutorial-basics/markdown-features', '4f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/test',
        component: ComponentCreator('/fr/docs/tutorial-basics/test', 'f9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/fr/docs/tutorial-extras/manage-docs-versions', 'ec0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/fr/docs/tutorial-extras/translate-your-site', '54a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/fr/',
    component: ComponentCreator('/fr/', '857'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
