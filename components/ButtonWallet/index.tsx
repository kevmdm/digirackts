import { IconButton, styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material'
import Image from 'next/image'

import React, { FC } from 'react'
import { LightTooltip } from '../ToolTips'


type state = {
    state_wallet?: { connected: boolean }
}

export const ButtonWallet: FC<state> = ({ state_wallet = { connected: false } }) => {
    return (
        <LightTooltip title={state_wallet.connected ? `My NFT's` : 'Connect to wallet'}>


            <IconButton
                sx={{
                    margin: "17px 35px 17px 0px",//margin: "auto",
                    //background:'gray'
                }}
                // size="large"
                // edge="end"
                // aria-label="account of current user"
                // //aria-controls={menuId}
                // aria-haspopup="true"
                onClick={() => { handleClick() }}
                //onMouseEnter={onMouseEnter}


                // color="inherit"
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
function handleClick() {
    console.log('connecting')
    // throw new Error('Function not implemented.')
}

