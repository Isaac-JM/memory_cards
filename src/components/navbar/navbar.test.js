import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './navbar.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<navbar-component></navbar-component>`,
            document.body
        )
    })
})
