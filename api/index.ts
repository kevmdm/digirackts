import axios from 'axios';


export const Api = axios.create({
    baseURL: '/api'
})

export async function walletsApi(walletAddress: string) {
    const walletData = await Api.get('/wallet', {
        params: {

            address: walletAddress

        }
    })
    return walletData.data
}
export async function addWalletEvent(wallet, newEvent) {
    const walletEvent = await Api.post('/wallet', {
        params: {

            wallet,
            newEvent

        }
    })
    return walletEvent.data
}

export async function getAssets(assetIds: []) {
    const walletData = await Api.get('/assets', {
        params: {

            assetIds

        }
    })
    return walletData.data

}