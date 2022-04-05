import { IconButton, styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material'
import Image from 'next/image'

import React, { FC } from 'react'
import { LightTooltip } from '../ToolTips'
import store from '../../interfaces/store';
import StateWallet from '../../interfaces/stateWallet';
import { connect, useDispatch } from 'react-redux';
import { setWalletLoading } from "../../store/wallet/walletActions";
import { WALLET_STATE } from "../../store/wallet/walletTypes";
import {
    availableWallets,
    connectWallet,
} from "../../store/wallet/api";
import { compose } from 'redux';



type Button_Wallet = {
    state_wallet: StateWallet,
    availableWallets: any,
    connectWallet: any
}

const ButtonWallet: FC<Button_Wallet> = ({ state_wallet, availableWallets, connectWallet }) => {
    const dispatch = useDispatch();
    function onclick_connect_wallet() {
        availableWallets((res) => {
            //console.log(res);
            if (res.wallets.length === 0) {
                //setShowNotification("no-wallet");
                dispatch(setWalletLoading(WALLET_STATE.NO_WALLETS));
            } else if (res.wallets.length === 1) {
                connect_wallet(res.wallets[0]);
            } else if (res.wallets.length > 1) {
                //setShowWallets(res.wallets);
            }
        });
    }

    function connect_wallet(wallet_name) {
        //setShowWallets(false);
        connectWallet(wallet_name, (res) => {
            if (!res.success) {
                // NotificationManager.error(`${res.msg}`);
                // setShowNotificationMessage(res.msg);
            } //  else {
            //   NotificationManager.success(`connected ${wallet_name}`);
            // }
            // console.log('connected')
        });
    }
    function handleClick() {

        if (!state_wallet.connected) {
            console.log("connecting...");

            onclick_connect_wallet();
        }
        // throw new Error('Function not implemented.')
    }
    return (
        <LightTooltip title={state_wallet.connected ? `My NFT's` : 'Connect to wallet'}>


            <IconButton
                sx={{
                    margin: "17px 35px 17px 15px",//margin: "auto",
                    //background:'gray'
                }}

                onClick={() => { handleClick() }}

                accessKey="buttonWallet"
            >     {
                    state_wallet.connected ? (

                        <Image src={"/img/navbar/walletIconGreen.png"} width="38px" height={"38px"} >

                        </Image>


                    ) : (

                        <Image src={"/img/navbar/walletIcon.png"} width="38px" height={"38px"}>

                        </Image>



                    )
                }</IconButton>
        </LightTooltip>
    )
}



function mapStateToProps(state: store) {
    return {
        state_wallet: state.wallet,
    };
}
function mapDispatchToProps(dispatch: any) {
    return {
        availableWallets: (callback) => dispatch(availableWallets(callback)),
        connectWallet: (is_silent, callback) =>
            dispatch(connectWallet(is_silent, callback)),
    };
}
export default compose(connect(mapStateToProps, mapDispatchToProps))(
    ButtonWallet
);