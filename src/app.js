import { LitElement, css, html } from 'lit'
import { TWStyles } from '../tw.js'
import { Router } from '@vaadin/router';
import './views/game.js'
import './views/home.js'

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
      var enlace = document.createElement('a');
    
        enlace.href = '/game';
      
        document.body.appendChild(enlace);

        enlace.click();

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

//  async connectedCallback(){
//   super.connectedCallback();
//   const url=String(location.href).split("/")

//   if(url[url.length-1]=="game"){

//     const {GameView}=await import('./views/game.js')

//     this.view = new GameView();
//     this.view.playerName=localStorage.getItem("namePlayer")?localStorage.getItem("namePlayer"):''

//   }else{
//     const {HomeView}=await import('./views/home.js')

//     this.view = new HomeView();
//   }
//   // if(url[url.length-1]!="game"){
//   //   url[url.length-1]==="home"?'':
//   //   location.href="/home"
//   // }

//   this.requestUpdate()

//  }


  render() {
    return  html`<div id="outlet"></div>`;
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('app-view', App)
