import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './board_game.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<board-game></board-game>`,
            document.body
        )
    })
})
