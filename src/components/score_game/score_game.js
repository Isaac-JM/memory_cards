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

  }


  selectLevel(e) {
    localStorage.setItem("level",e.target.value)
    const event = new CustomEvent('selectLevel', {
      detail: e.target.value,
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }


  render() {
    return html`
    <div class="w-full p-2 bg-white border border-gray-200 rounded-lg shadow flex justify-around">
       <span>${this.playerName}</span>
       <span>Score: ${this.score}</span>
    </div>
    `
  }




  static styles = [css``, TWStyles]
}

window.customElements.define('score-game', ScoreGame)
