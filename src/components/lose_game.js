import { LitElement, css, html } from 'lit'
import { TWStyles } from '../../tw.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class LoseGame extends LitElement {

  static get properties() {
    return {};
  }

  constructor() {
    super()

  }


  selectLose(e) {
    localStorage.removeItem("score")
    const event = new CustomEvent('selectLose', {
      detail: e.target.value,
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }


  render() {
    return html`
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  ">
    <div class="text-center">
      <h5 class="text-xl font-medium text-gray-900 ">You have failed..</h5>
    </div>

    <div class="pt-2">
        <form class="space-y-6" action="#">
        <button @click="${this.selectLose}" type="button" class="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="repit">Repit</button>
        <button @click="${this.selectLose}" type="button" class="w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="level">Change level</button>
        </form>
    </div>
</div>
    `
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('lose-game', LoseGame)
