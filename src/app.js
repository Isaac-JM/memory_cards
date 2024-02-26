import { LitElement, css, html } from 'lit'
import { TWStyles } from '../tw.js'


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
      location.href="/game"
    })
  }


 async connectedCallback(){
  super.connectedCallback();
  const url=String(location.href).split("/")

  if(url[url.length-1]=="game"){

    const {GameView}=await import('./views/game.js')

    this.view = new GameView();
    this.view.playerName=localStorage.getItem("namePlayer")?localStorage.getItem("namePlayer"):''

  }else{
    const {HomeView}=await import('./views/home.js')

    this.view = new HomeView();
  }
  if(url[url.length-1]!="game"){
    url[url.length-1]==="home"?'':
    location.href="/home"
  }

  this.requestUpdate()

 }


  render() {
    return this.view;
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('app-view', App)
