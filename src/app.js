import { LitElement, css, html } from 'lit'
import { TWStyles } from '../tw.js'
import { Router } from '@vaadin/router';
import './views/game/game.js'
import './views/home/home.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class App extends LitElement {

  static get properties() {
    return {};
  }

  constructor() {
    super()
    this.view=""
    this.addEventListener("playerName",(e)=>{
      localStorage.setItem("namePlayer",e.detail)
      location.href='/game'
    })
  }

  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/home', component: 'home-view' },
      { path: '/game', component: 'game-view' },
      { path: '(.*)', redirect: '/home' },
    ]);
  }


  render() {
    return  html`<div id="outlet"></div>`;
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('app-view', App)
