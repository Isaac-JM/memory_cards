import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './lose_game.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<lose-game></lose-game>`,
            document.body
        )
    })
})
