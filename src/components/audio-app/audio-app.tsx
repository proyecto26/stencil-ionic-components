import { Component, h } from '@stencil/core';

@Component({
  tag: 'audio-app',
  styleUrl: 'audio-app.scss'
})
export class AudioApp {

  render() {
    return (
      <ion-app>
        <ion-router>
          <ion-route url='/' component="page-home"></ion-route>
        </ion-router>
        <ion-nav animated={false}/>
      </ion-app>
    );
  }

}
