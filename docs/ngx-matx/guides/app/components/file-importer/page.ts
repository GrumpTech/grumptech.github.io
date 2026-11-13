// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocPageWrapperComponent} from '@ng-doc/app';
import {NgDocPageType} from '@ng-doc/core';
import {ɵwithNgDocContent} from '@ng-doc/app';
import headerContentSource from './page.source.mjs';
const headerContent: string = '';

@Component({
  selector: 'ng-doc-page-wrapper-01aadacd35386aeac55e8496',
  template: `<ng-doc-page-wrapper [routes]="routes" [headerContent]="headerContent" [headerContentSource]="headerContentSource" [hasBreadcrumb]="hasBreadcrumb" [pageType]="pageType"></ng-doc-page-wrapper>`,
  imports: [NgDocPageWrapperComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapperComponent {
    routes = routes[0].children!;
    headerContent = headerContent;
    headerContentSource = headerContentSource;
    pageType: NgDocPageType = 'guide';
    hasBreadcrumb = true;
}


// The router shows the page only once its header has loaded, so the previous page stays on
// screen instead of an empty page.
const routes: Routes = [ɵwithNgDocContent({
  path: '',
  component: PageWrapperComponent,
  data: {
    ngDocPageType: 'guide',
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./index/page'),
      title: `File importer`,
      data: {
        icon: '',
        ngDocTitle: 'tab',
      }
    },
  ]
}, headerContentSource)]

export default routes;
