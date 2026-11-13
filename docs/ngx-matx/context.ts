// @ts-nocheck
import { Provider } from '@angular/core';
import { NG_DOC_CONTEXT, NG_DOC_ROUTE_PREFIX, NG_DOC_SHIKI_THEME } from '@ng-doc/app/tokens';

export function provideNgDocContext(): Provider[] {
  return [{
    provide: NG_DOC_CONTEXT,
    useValue: {
      navigation: [
          
        {
          title: `Guides`,
          route: '/guides',
          expandable: true,
          expanded: false,
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `Getting started`,
          route: '/guides/getting-started',
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
          
        {
          title: `Components`,
          route: '/components',
          expandable: true,
          expanded: false,
          order: 2,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `Code editor`,
          route: '/components/code-editor',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Confirmation dialog`,
          route: '/components/confirmation-dialog',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Drag drop tree`,
          route: '/components/drag-drop-tree',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Editor app`,
          route: '/components/editor-app',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Explorer`,
          route: '/components/explorer',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `File importer`,
          route: '/components/file-importer',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `File tab bar`,
          route: '/components/file-tab-bar',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Full width form fields`,
          route: '/components/full-width-form-fields',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Menu bar`,
          route: '/components/menu-bar',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Overflow tooltip`,
          route: '/components/overflow-tooltip',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Panel`,
          route: '/components/panel',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
          
        {
          title: `Styles`,
          route: '/styles',
          expandable: true,
          expanded: false,
          order: 3,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `Thin scrollbars`,
          route: '/styles/thin-scrollbars',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
      ],
      apiLists: [],
    },
  }, {
    provide: NG_DOC_ROUTE_PREFIX,
    useValue: '',
  }, {
    provide: NG_DOC_SHIKI_THEME,
    useValue: {
      light: 'css-variables',
      dark: 'css-variables',
    },
  }];
}
