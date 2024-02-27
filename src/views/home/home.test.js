import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './home.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<home-view></home-view>`,
            document.body
        )
    })
})
