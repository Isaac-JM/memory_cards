import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import './views/home/home.js'
import './app.js'

describe('Lit component testing', () => {
    it('Cambio de componente y de ruta', async () => {

        //Renderizar el componente  home y App
        const homeContainer = document.createElement('div');
        const appContainer = document.createElement('div');

        render(
            html`<home-view></home-view>`,
            homeContainer
        )

        render(
            html`<app-view></app-view>`,
            appContainer
        )

        document.body.appendChild(homeContainer);
        document.body.appendChild(appContainer);

        await browser.pause(4000);

        //Obtiene el componente Inicial con la ruta inicial
        const principalDivBefore = await $('app-view').$('>>>#outlet')

        //Cambiar el valor del input
        const input = (await $('home-view')).$('>>>input');
        await input.setValue("Isaac")

        //Comprobar que el valor es igual a Isaac
        const inputValue = await input.getValue()
        await expect(inputValue).toEqual('Isaac');
        
        //Pulsar Enter, que  envia el evento de cambio de ruta la vista App 
        await browser.keys(['Enter']);

        await browser.pause(4000);

        //Obtiene el componente después de realizar el evento del componente Home
        const principalDivAfter = await $('app-view').$('>>>#outlet')

        //Si son diferentes componentes los que se renderiza, quiere decir que el cambio de ruta se ha ejecutado correctamente
        //el evento y se ha cambiado de ruta /home a /game
        await expect(principalDivBefore).not.toEqual(principalDivAfter);


    })
})
