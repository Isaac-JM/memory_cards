import { LitElement, css, html } from 'lit'
import { TWStyles } from '../../../tw.js'
import { Router } from '@vaadin/router';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Navbar extends LitElement {

  static get properties() {
    return {};
  }

  constructor() {
    super()
  }



logout(){
  localStorage.removeItem("namePlayer")
  localStorage.removeItem("score")
  localStorage.removeItem("level")

  location.href='/home'
}


  render() {
    return html`
    

<nav class="bg-white border-gray-200 ">
<div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
  <span class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="./logo_game.png" class="h-8" alt="logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap ">Memory Cards</span>
  </span>

  <span class="cursor-pointer" @click="${this.logout}">
    <img src="./logout.png" class="h-8" alt="logout" />
  </span> 
 
</div>
</nav>

    `
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('navbar-component', Navbar)
