// @ts-nocheck
import {Routes} from '@angular/router';
import NgDocCategory_01ba782aace17950556a3bf0 from '../../projects/docs/src/app/components/ng-doc.category';
import NgDocCategory_2e3aac571423f0aeac3f6867 from '../../projects/docs/src/app/guides/ng-doc.category';
import NgDocCategory_03f2a80121529bdfdf802344 from '../../projects/docs/src/app/styles/ng-doc.category';

export const NG_DOC_ROUTING: Routes = [
	
	{
		path: 'components',
		title: `Components`,
    data: {ngDocTitle: 'category'},
    providers: [
      ...(NgDocCategory_01ba782aace17950556a3bf0.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'code-editor',
			pathMatch: 'full'
		},
	{
		path: 'code-editor',
		title: `Code editor`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/code-editor/page'),
	},
	{
		path: 'confirmation-dialog',
		title: `Confirmation dialog`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/confirmation-dialog/page'),
	},
	{
		path: 'drag-drop-tree',
		title: `Drag drop tree`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/drag-drop-tree/page'),
	},
	{
		path: 'editor-app',
		title: `Editor app`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/editor-app/page'),
	},
	{
		path: 'explorer',
		title: `Explorer`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/explorer/page'),
	},
	{
		path: 'file-importer',
		title: `File importer`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/file-importer/page'),
	},
	{
		path: 'file-tab-bar',
		title: `File tab bar`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/file-tab-bar/page'),
	},
	{
		path: 'full-width-form-fields',
		title: `Full width form fields`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/full-width-form-fields/page'),
	},
	{
		path: 'menu-bar',
		title: `Menu bar`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/menu-bar/page'),
	},
	{
		path: 'overflow-tooltip',
		title: `Overflow tooltip`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/overflow-tooltip/page'),
	},
	{
		path: 'panel',
		title: `Panel`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/components/panel/page'),
	},],
	},
	
	{
		path: 'guides',
		title: `Guides`,
    data: {ngDocTitle: 'category'},
    providers: [
      ...(NgDocCategory_2e3aac571423f0aeac3f6867.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'getting-started',
			pathMatch: 'full'
		},
	{
		path: 'getting-started',
		title: `Getting started`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/guides/getting-started/page'),
	},],
	},
	
	{
		path: 'styles',
		title: `Styles`,
    data: {ngDocTitle: 'category'},
    providers: [
      ...(NgDocCategory_03f2a80121529bdfdf802344.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'thin-scrollbars',
			pathMatch: 'full'
		},
	{
		path: 'thin-scrollbars',
		title: `Thin scrollbars`,
    data: {ngDocTitle: 'page'},
		loadChildren: () => import('./guides/app/styles/thin-scrollbars/page'),
	},],
	},
];
