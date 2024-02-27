import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './score_game.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<score-game></score-game>`,
            document.body
        )
    })
})
