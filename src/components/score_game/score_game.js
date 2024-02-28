import { LitElement, css, html } from 'lit'
import { TWStyles } from '../../../tw.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ScoreGame extends LitElement {

  static get properties() {
    return {
        playerName:{type:String},
        score:{type:Number}
    };
  }

  constructor() {
    super()
    this.playerName=""
    this.score=Number(localStorage.getItem("score"))?Number(localStorage.getItem("score")):0
    this.dropdown=false;
  }


  changeLevel(e){
    this.dropdown=false;
    this.shadowRoot.querySelectorAll('input[type="radio"]').forEach((res)=>{
      res.checked?localStorage.setItem('level',res.value):''
    })
 
    localStorage.removeItem('score')

    const event = new CustomEvent('resetGame', {
      detail: true,
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
    this.requestUpdate();
  }

  render() {
    const level=localStorage.getItem("level")

    return html`
    <div class="w-full p-2 bg-white border border-gray-200 rounded-lg shadow flex justify-between items-center">
       <span>${this.playerName}</span>
       <span>Score: ${this.score}</span>
<div>     
<button @click="${(e)=>{this.dropdown?this.dropdown=false:this.dropdown=true, this.requestUpdate()}}" id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" class="bg-blue-200 hover:bg-blue-400  font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center" type="button">Level <svg class="w-1.5 h-1.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdownDefaultCheckbox" class="${this.dropdown?'block':'hidden'} z-10  w-48 bg-white divide-y divide-gray-100 rounded-lg shadow absolute right-0">
    <ul class="p-3 space-y-3 text-sm text-gray-700" aria-labelledby="dropdownCheckboxButton">
      <li>
        <div class="flex items-center">
          <input ?checked=${level==="easy"} id="checkbox-item-1" name="level" type="radio" value="easy" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2">
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 ">Easy</label>
        </div>
      </li>
      <li>
        <div class="flex items-center">
            <input ?checked=${level==="medium"} id="checkbox-item-2" name="level"  type="radio" value="medium" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2">
            <label for="checkbox-item-2"  class="ms-2 text-sm font-medium text-gray-900 ">Medium</label>
          </div>
      </li>
      <li>
        <div class="flex items-center">
          <input ?checked=${level==="hard"} id="checkbox-item-3" name="level" type="radio"  value="hard" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2">
          <label for="checkbox-item-3" class="ms-2 text-sm font-medium text-gray-900 ">Hard</label>
        </div>
      </li>
      <li>
      <div class="flex items-center">
      <button @click="${this.changeLevel}" type="button" class="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center">Play</button>
      </div>
    </li>
    </ul>
</div>
</div>
    </div>
    `
  }




  static styles = [css``, TWStyles]
}

window.customElements.define('score-game', ScoreGame)
