interface StateWallet {

    loading: any;
    connected: boolean;
    data: {
        assets: { };
    };
    nami: {
        collateral: any[];
    };
    loaded_assets: boolean;

}
export default StateWallet