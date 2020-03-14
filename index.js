/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react'
import App from './App';
import { Provider } from "react-redux";
import { store } from "../Isracart_assignment/src/components/redux/store";



AppRegistry.registerComponent('Isracart_assignment', () => (props) => {
    return (
        <Provider store={store}>
            <App {...props} />
        </Provider>
    )

});
