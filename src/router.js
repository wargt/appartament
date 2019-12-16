import React, { Component } from 'react'
import { render } from 'react-dom'

import App from './pages/app/index.js'
import { AppContainer } from 'react-hot-loader'

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./pages/app/index.js', () => {
        const NewApp = require('./pages/app/index.js').default;
        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
