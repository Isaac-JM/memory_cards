import { LitElement, css, html } from 'lit'
import { TWStyles } from '../../tw.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class HomeView extends LitElement {

  static get properties() {
    return {
      messageLogin: { type: Object }
    };
  }

  constructor() {
    super()
    this.messageLogin = {}
  }

  shouldUpdate(changedProperties) {

    changedProperties.has('messageLogin') && Object.keys(this.messageLogin).length > 0 ?
      setTimeout(() => this.messageLogin = {}, 2000) : ''

    return true
  }


  sendEvent(name) {
    const event = new CustomEvent('playerName', {
      detail: name,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  newPlayer() {
    const inputValue=this.shadowRoot.getElementById("new-player").value

    inputValue!=""?
    this.sendEvent(inputValue):
    this.messageLogin={message:"Invalid Name",color:"text-red-500"}

  }



  render() {
    return html`
    <div class="h-[100vh] w-[100vw] flex justify-center items-center bg-blue-100">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div class="text-center">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Memory Cards</h5>
              </div>

                  <div>
                  <form class="space-y-6" action="#">
                  <div class="flex justify-center">
                    <img src="/src/assets/logo_game.png" class="h-[200px] w-[200px]">
                  </div>
                      <div>
                          <label for="player" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                          <input @click="${(e) => this.messageLogin = {}}" id="new-player" type="text" name="player" id="player" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                      </div>
                      <div class="text-sm font-medium ${this.messageLogin.color ? this.messageLogin.color : ''} dark:text-gray-300">
                      ${this.messageLogin.message ? this.messageLogin.message : ''}
                      </div>
                      <button @click="${this.newPlayer}" type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start</button>
                  </form>
              </div>
          </div>
    </div>  
    `
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('home-view', HomeView)
