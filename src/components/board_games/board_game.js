import { LitElement, css, html } from 'lit'
import { TWStyles } from '../../../tw.js'
import '../score_game/score_game.js'
import '../card_number/card_number.js'

export class BoardGame extends LitElement {

  static get properties() {
    return {
      correct_number:{type:Number},
      select_card:{type:Boolean},
      next:{type:Number}
    };
  }

  constructor() {
    super()
    this.listNumbers=this.changeOrder([1,2,3,4,5,6,7,8,9])
    this.correct_number=0
    this.select_card=false
    this.next=0;

  }

  changeOrder(array) {

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  shouldUpdate(changedProperties) {
    
    changedProperties.has('next') && this.next>0?
    this.listNumbers=this.changeOrder([1,2,3,4,5,6,7,8,9]):''
    return true
  }


  render() {
    return html`
    <div class="w-full h-[78vh] p-2  border border-gray-200 rounded-lg shadow">
      <div class="grid grid-cols-12 h-full w-full gap-2">
      ${this.listNumbers.map((res)=>{
        return html`
        <div class="col-span-4">
          <card-number number="${res}" correct_number=${this.correct_number} ?select_card=${this.select_card} next=${this.next}></card-number>
        </div>
      `
      })}
      </div>
    </div>
    `
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('board-game', BoardGame)
