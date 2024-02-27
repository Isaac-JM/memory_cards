import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './app.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<app-view></app-view>`,
            document.body
        )
    })
})
