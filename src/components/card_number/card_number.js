import { LitElement, css, html } from 'lit'
import { TWStyles } from '../../../tw.js'
import '../score_game/score_game.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CardNumber extends LitElement {

  static get properties() {
    return {
        number:{type:String},
        hidden:{type:Boolean},
        correct_number:{type:Number},
        select_card:{type:Boolean},
        next:{type:Number},
        countdown:{type:Number}
    };
  }

  constructor() {
    super()
    this.number=""
    this.hidden=false;
    this.correct_number=0;
    this.numberClass=""
    this.select_card=false;
    this.next=0;
    this.countdown=0;

  }


  async connectedCallback(){
    super.connectedCallback();
  }

  selectCard(){
    if(this.select_card){
    if(this.correct_number==this.number){
      this.numberClass="bg-green-500"
    }else{
      this.numberClass="bg-red-500"
    }

    this.hidden=false;
    const event = new CustomEvent('cardValue', {
      detail: this.number,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate()
  }
  }

  shouldUpdate(changedProperties) {
    
    changedProperties.has('next') && this.next>0?
    (this.hidden=false,this.numberClass="",this.requestUpdate()):''
    console.log(this.countdown)
    changedProperties.has('countdown') && this.countdown===0?
    this.hidden=true:''
   
    return true
  }




  render() {
    return html`
  <div class="w-full h-full bg-blue-200 border border-gray-200 rounded-lg shadow flex items-center justify-center cursor-pointer ${this.numberClass}" @click="${this.selectCard}">
      <span style="font-size:100px" class="${this.hidden?"invisible":"block"}">${this.number}</span>
  </div>


    `
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('card-number', CardNumber)
