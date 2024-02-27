import { LitElement, css, html } from 'lit'
import { TWStyles } from '../../../tw.js'
import '../score_game/score_game.js'
import '../board_games/board_game.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class DashboardGame extends LitElement {

  static get properties() {
    return {
        playerName:{type:String}
    };
  }

  constructor() {
    super()
    this.playerName=""
    this.message="Memorize the cards..."
    this.select_card=false;
    this.randomNumber=0;
    this.correct_number="";
    this.score=0;
    this.next=0;
    this.countdown=0;
    this.addEventListener("cardValue",this.checkNumber)

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

  changeMessage(){
    this.message="Memorize the cards..."
    this.countDown()
    const level=localStorage.getItem("level")
    let time=0;
    this.next=this.next+1;
    switch(level){
        case 'easy':
            time=10000
        break;
        case 'medium':
            time=5000
        break;
        case 'hard':
            time=2000
        break;
    }
    this.randomNumber=Math.floor(Math.random() * 9) + 1;
    setTimeout(()=>{ 
    this.message=`Where is the number ${this.randomNumber}?`,
    this.select_card=true,
    this.requestUpdate()},time)
    this.requestUpdate()
  }

    countDown(){
        const level=localStorage.getItem("level")
        let time=0;
        switch(level){
            case 'easy':
              this.countdown=10
              time=10000
            break;
            case 'medium':
              this.countdown=5
              time=5000
            break;
            case 'hard':
              this.countdown=2
              time=2000
            break;
        }

        const interval=setInterval(()=>{this.countdown--,this.requestUpdate()},1000)
        setTimeout(function() {
          clearInterval(interval);
      }, time);
    }

  async connectedCallback(){
    super.connectedCallback();
    this.changeMessage()
  }

  checkNumber(e){
    this.select_card=false;
    if(Number(e.detail)==this.randomNumber){
        const level=localStorage.getItem("level")
        this.score=0;
        switch(level){
            case 'easy':
                this.score=Number(localStorage.getItem("score"))?Number(localStorage.getItem("score"))+10:0+10
                localStorage.setItem("score",this.score)
            break;
            case 'medium':
                this.score=Number(localStorage.getItem("score"))?Number(localStorage.getItem("score"))+20:0+20
                localStorage.setItem("score",this.score)
            break;
            case 'hard':
                this.score=Number(localStorage.getItem("score"))?Number(localStorage.getItem("score"))+30:0+30
                localStorage.setItem("score",this.score)
            break;
        }
        this.requestUpdate()
        setTimeout(()=>{ this.changeMessage()},2000)
    }else{

      if ("vibrate" in navigator) {
          navigator.vibrate(2000);
      }
      
        this.score=0
        setTimeout(()=>{ 
            const event = new CustomEvent('loseGame', {
                detail: true,
                bubbles: true,
                composed: true
              });
          
              this.dispatchEvent(event);
        },2000)
        this.requestUpdate()
    }
  }






  render() {
    return html`
    <div class="w-[99vw]  2xl:w-[90vw] h-[89vh]  p-2 bg-white border border-gray-200 rounded-lg shadow ">
    <div class="text-center">
      <score-game playerName="${this.playerName}" score=${this.score}></score-game>
    </div>

    <div class="pt-2">
        <div class="text-center">
            <span>${this.message} ${this.countdown>0?this.countdown:''}</span>
        </div>
        <board-game correct_number="${this.randomNumber}" ?select_card=${this.select_card} next=${this.next}></board-game>
    </div>

</div>
    `
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('dashboard-game', DashboardGame)
