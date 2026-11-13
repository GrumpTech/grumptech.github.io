// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../../projects/docs/src/app/components/full-width-form-fields/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';
import {ɵwithNgDocContent} from '@ng-doc/app';
import pageContentSource from './page.source.mjs';
const pageContent: string = '';

@Component({
  selector: 'ng-doc-page-3b7258970188b63fad265745',
  template: `<ng-doc-page></ng-doc-page>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgDocPageComponent,
    ...PLAYGROUND_COMPONENTS,
  ],
  providers: [
    {provide: NgDocRootPage, useExisting: PageComponent},
    PLAYGROUND_PROVIDERS,
    (entry.providers ?? []),
  ],
})
export class PageComponent extends NgDocRootPage {
  readonly pageType: NgDocPageType = 'guide';
  readonly pageContent: string = pageContent;
  readonly pageContentSource = pageContentSource;
  readonly page?: NgDocPage = entry;
  readonly demoAssets: NgDocDemoAssets = demoAssets;

  constructor() {
    super();
  }
}

// The router shows the page only once its content has loaded, so the previous page stays on
// screen instead of an empty page.
const routes: Routes = [ɵwithNgDocContent({
  ...(isRoute(entry.route) ? entry.route : {}),
  path: '',
  component: PageComponent,
}, pageContentSource)]

export default routes;

