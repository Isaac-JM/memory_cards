import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './card_number.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<card-number></card-number>`,
            document.body
        )
    })
})
