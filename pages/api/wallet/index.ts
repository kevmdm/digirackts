import { registerVersion } from 'firebase/app'
import { DocumentData } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers';
import { listWalletAsset, walletExists } from '../../../api';
import { addWalletEvent, delistWalletAsset, getWallet } from '../../../database/wallets'
import StateWallet from '../../../interfaces/stateWallet/index';

type Data = {
    name: string
}

export default async function (req: NextApiRequest, res: NextApiResponse<DocumentData>) {
    switch (req.method) {
        case 'GET':
            try {
                if (req.query) {
                    const { address, type } = req.query
                    switch (type) {
                        case 'exist':
                            walletExistData(address, res);
                            break;
                        case 'getWallet':
                            getWalletData(address, res);
                            break;

                        default:
                            break;
                    }

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
                        case 'delistWalletAsset':
                            delistWalletAssetApi(req, res)
                            break;
                        case 'relistWalletAsset':
                            relistWalletAssetApi(req, res)
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

            break;

        default:
            res.status(400).json({ message: 'not defined' })
            break;
    }
}
async function walletExistData(address: string | string[], res: NextApiResponse) {
    const walletData = await walletExists(address.toString())
    res.status(200).json(walletData)
}
async function getWalletData(address: string | string[], res: NextApiResponse<DocumentData>) {
    const walletData = await getWallet(address.toString())
    res.status(200).json(walletData)
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
async function delistWalletAssetApi(req: NextApiRequest, res: NextApiResponse<any>) {
    const { wallet, listedAsset, event } = req.body
    const resp = await delistWalletAsset(wallet, listedAsset, event)
    res.status(200).json(resp)
}
async function relistWalletAssetApi(req: NextApiRequest, res: NextApiResponse<any>) {
    const { wallet, listedAsset, event } = req.body
    const resp = await delistWalletAsset(wallet, listedAsset, event)
    res.status(200).json(resp)
}