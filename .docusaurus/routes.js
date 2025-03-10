import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/__docusaurus/debug',
    component: ComponentCreator('/blog/__docusaurus/debug', '042'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/config',
    component: ComponentCreator('/blog/__docusaurus/debug/config', 'ebe'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/content',
    component: ComponentCreator('/blog/__docusaurus/debug/content', '79a'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/globalData',
    component: ComponentCreator('/blog/__docusaurus/debug/globalData', '84e'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/metadata',
    component: ComponentCreator('/blog/__docusaurus/debug/metadata', 'd20'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/registry',
    component: ComponentCreator('/blog/__docusaurus/debug/registry', '4a4'),
    exact: true
  },
  {
    path: '/blog/__docusaurus/debug/routes',
    component: ComponentCreator('/blog/__docusaurus/debug/routes', '1b9'),
    exact: true
  },
  {
    path: '/blog/Blog',
    component: ComponentCreator('/blog/Blog', 'a30'),
    exact: true
  },
  {
    path: '/blog/Home',
    component: ComponentCreator('/blog/Home', '707'),
    exact: true
  },
  {
    path: '/blog/Perspective',
    component: ComponentCreator('/blog/Perspective', 'a05'),
    exact: true
  },
  {
    path: '/blog/Project',
    component: ComponentCreator('/blog/Project', '1e7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
