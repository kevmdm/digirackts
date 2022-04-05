import { IconButton, styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material'
import Image from 'next/image'

import React, { FC } from 'react'
import { LightTooltip } from '../ToolTips'


type state = {
    isDarkMode?: boolean
}

export const ButtonDarkMode: FC<state> = ({ isDarkMode = false }) => {
    return (
        <LightTooltip title={isDarkMode ? `LightMode` : 'DarkMode'}>


            <IconButton
                sx={{
                    margin: "auto",//margin: "auto",
                    //background:'gray'
                }}

                onClick={() => { handleClick() }}

                accessKey="isDarkMode"
            >     {
                    isDarkMode ? (

                        <Image src={"/img/navbar/walletIconGreen.png"} width="38px" height={"38px"} >

                        </Image>


                    ) : (

                        <Image src={"/img/navbar/moon.png"} width="38px" height={"38px"}>

                        </Image>



                    )
                }</IconButton>
        </LightTooltip>
    )
}
function handleClick() {
    console.log('switch to dark mode')
    // throw new Error('Function not implemented.')
}

