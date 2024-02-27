import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './level_selection.js'

describe('Lit component testing', () => {
    it('Errores', async () => {
        render(
            html`<level-selection></level-selection>`,
            document.body
        )
    })
})
