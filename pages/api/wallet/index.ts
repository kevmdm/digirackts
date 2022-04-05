import { registerVersion } from 'firebase/app'
import { DocumentData } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers';
import { listWalletAsset } from '../../../api';
import { addWalletEvent, getWallet } from '../../../database/wallets'
import StateWallet from '../../../interfaces/stateWallet/index';






type Data = {
    name: string
}

export default async function (req: NextApiRequest, res: NextApiResponse<DocumentData>) {
    switch (req.method) {
        case 'GET':
            try {
                if (req.query) {
                    //console.log(req.query)
                    const { address } = req.query
                    //console.log('body:', req.body)
                    // console.log('address:', address)
                    getWalletData(address, res);
                }
            } catch (error) {
                console.log(error)
                res.status(400).json({ message: 'bad query' })
            }

            break;
        case 'POST':
            try {
                if (req.body) {
                    const { type } = req.body
                    switch (type) {
                        case 'addWalletEvent':
                            console.log(req.body.wallet)
                            await addWalletEventData(req, res)
                            break;
                        case 'listWalletAsset':
                            listWalletAssetApi(req, res)
                            break;
                        default:
                            res.status(400).json({ message: 'not defined' })
                            break;
                    }

                }

            } catch (error) {
                console.log(error)
                res.status(400).json({ message: 'bad query' })
            }

            //add walletevent database
            //res.status(200).json({ message: 'event added' + ` ${req.body.wallet} ${req.body.event}` })

            break;

        default:
            res.status(400).json({ message: 'not defined' })
            break;
    }


}
async function getWalletData(address: string | string[], res: NextApiResponse<DocumentData>) {

    const walletData = await getWallet(address.toString())
    //console.log(walletData)
    res.status(200).json(walletData)
    //res.status(200).json(JSON.parse(JSON.stringify(walletData)))
}
async function addWalletEventData(req: NextApiRequest, res: NextApiResponse<any>) {
    const { wallet, event } = req.body
    const resp = await addWalletEvent(wallet, event)
    res.status(200).json(resp)

}
async function listWalletAssetApi(req: NextApiRequest, res: NextApiResponse<any>) {
    const { wallet, walletAsset, event } = req.body
    const resp = await listWalletAsset(wallet, walletAsset, event)
    res.status(200).json(resp)
}