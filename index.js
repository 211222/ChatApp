/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import store from './android/app/src/Arquitectura/application/Redux/Store';

const provider = () =>{
    return(
        <Provider store={store} >
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => provider);