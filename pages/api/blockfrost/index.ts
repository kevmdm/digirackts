import type { NextApiRequest, NextApiResponse } from 'next'
import { getLockedUtxosByAsset } from '../../../cardano/blockfrost-api';



export default function (req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case 'GET':
            const { address, asset, type } = req.query
            switch (type) {
                case 'getLockedUtxosByAsset':
                    getLockedUtxosByAsset(address.toString(), asset.toString())

                    break;

                default:
                    break;
            }
            res.status(200).json({ name: 'Example' })
            break;

        default:
            res.status(400).json({ message: 'not defined' })
            break;
    }

}