// import reduxThunk from 'redux-thunk';
// import { applyMiddleware, createStore } from 'redux';
// import reducers from "../../store/reducers";
// import { composeWithDevTools } from 'redux-devtools-extension';
// const middleware = [reduxThunk];
// const storeObject = createStore(
//     reducers,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

import StateWallet from "../stateWallet";

//type store = //typeof storeObject
interface store {
    wallet: StateWallet | {
        loading: boolean;
        data: any;
        loaded_assets: boolean;
        connected: boolean;
        nami: {
            collateral: any[];
        };
    };
    collection: any;
    error: any;
}


export default store;

