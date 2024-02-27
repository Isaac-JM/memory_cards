import { LitElement, css, html } from 'lit'
import { TWStyles } from '../../../tw.js'
import '../../components/navbar/navbar.js'
import '../../components/level_selection/level_selection.js'
import '../../components/dashboard_games/dashboard_game.js'
import '../../components/lose_game/lose_game.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class GameView extends LitElement {

  static get properties() {
    return {
      messageLogin: { type: Object },
      playerName:{type:String}
    };
  }

  constructor() {
    super()
    this.messageLogin = {}
    this.playerName=localStorage.getItem("namePlayer")?localStorage.getItem("namePlayer"):''
    this.lose=false;
    this.level=localStorage.getItem("level")?localStorage.getItem("level"):''
    this.addEventListener("selectLevel",(e)=>{
      this.level=e.detail,
      this.requestUpdate()
    })

    this.addEventListener("selectLose",(e)=>{
      if(e.detail=="repeat"){
        this.lose=false
      }else{
        this.lose=false
        this.level=""
      }
   
      this.requestUpdate()
    })

    this.addEventListener("loseGame",(e)=>{
      this.lose=true,
      this.requestUpdate()
    })
  }


  render() {
    return html`
    <div class="h-[100vh] w-[100vw] bg-blue-100">
     <navbar-component ></navbar-component>

     <div class="flex items-center justify-center h-[90vh] w-full">
     ${this.lose?html`<lose-game></lose-game>`:
     this.level==""?
        html` <level-selection></level-selection>`:
        html`<dashboard-game playerName="${this.playerName}"></dashboard-game>`
      }
     
     </div>

     </div>
    
    </div>  
    `
  }


  static styles = [css``, TWStyles]
}

window.customElements.define('game-view', GameView)
