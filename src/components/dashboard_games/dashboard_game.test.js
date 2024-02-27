import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './dashboard_game.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<dashboard-game></dashboard-game>`,
            document.body
        )
    })
})
