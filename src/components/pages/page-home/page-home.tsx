import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.scss',
  shadow: false
})
export class PageHome {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-title>My WebComponents</ion-title>
        </ion-header>
        <ion-content>
          <my-component></my-component>
        </ion-content>
        <ion-footer>
          <ion-toolbar>
            <ion-title>Footer</ion-title>
          </ion-toolbar>
        </ion-footer>
      </Host>
    );
  }
}
