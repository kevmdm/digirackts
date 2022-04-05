import { DocumentData } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getWallet } from '../../../database/wallets'






type Data = {
    name: string
}

export default function (req: NextApiRequest, res: NextApiResponse<DocumentData>) {
    if (req.body) {
        console.log(req.body)
        const { address } = req.body
        console.log('body:', req.body)
        console.log('address:', address)
        getWalletData(address, res);
    }

}
async function getWalletData(address: string, res: NextApiResponse<DocumentData>) {

    const walletData = await getWallet(address)
    console.log(walletData)
    res.status(200).json(walletData)
    //res.status(200).json(JSON.parse(JSON.stringify(walletData)))
}