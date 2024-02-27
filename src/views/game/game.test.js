import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './game.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<game-view></game-view>`,
            document.body
        )
    })
})
