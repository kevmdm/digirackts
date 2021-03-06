import { DocumentData } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  addAssetEvent,
  getAssets,
  lockAsset,
  unlockAsset,
} from "../../../database/assets";

type Data = {
  name: string;
};

export default function (
  req: NextApiRequest,
  res: NextApiResponse<DocumentData>
) {
  switch (req.method) {
    case "GET":
      try {
        if (req.query) {
          const { assets } = req.query;
          console.log(assets)
          getAssetsData(assets, res);
        } else {
          res.status(400).json({ message: "query error" });
        }
      } catch (error) {
        res.status(500).json(error);
      }

      break;
    case "POST":
      if (req.body) {
        const { type, asset, data, newEvent } = req.body;
        switch (type) {
          case "lockAsset":
            lockAssetData(asset, data);
            break;
          case "unlockAsset":
            unlockAssetData(asset, data);
            break;
          case "addAssetEvent":
            addAssetEventData(asset, newEvent);
            break;

          default:
            res.status(400).json({ message: "query error" });
            break;
        }
      }
      break;

    default:
      res.status(400).json({ message: "not defined" });
      break;
  }
}
async function getAssetsData(
  assetsIds: string | string[],
  res: NextApiResponse<DocumentData>
) {
  const { ids } = JSON.parse(assetsIds.toString());
  const assets = await getAssets(ids);
  res.status(200).json(assets);
}
async function lockAssetData(asset, data) {
  const { datum, datumHash, txHash, address, artistAddress, contractVersion } =
    data;
  const res = await lockAsset(asset, {
    datum,
    datumHash,
    txHash,
    address,
    artistAddress,
    contractVersion,
  });
  return res;
}
async function unlockAssetData(asset, data) {
  const { txHash, address } = data;
  const res = await unlockAsset(asset, {
    txHash,
    address,
  });
  return res;
}
async function addAssetEventData(asset, newEvent) {
  const res = await addAssetEvent(asset, newEvent);
  return res;
}
const assetsIDS = [
  "24efb77aaf1c285acc46f46ee858d5b13ab1b1fdb470ed1b724f19e07375706572616c65",
  "27869783fae7a16dfe1a923e6799dca4ad8144b5d5b0d16828d5619c74657374546f6b656e4e4654303033",
  "33b6150f4f5df62bfc638f206f3a37254d4a82f15f0c6635a20eb83f414a4341",
  "a89c237e2ef5ca2a6dde7ba62f6f06c1b4afb24cd55a7a1a048da342416c653031",
  "a89c237e2ef5ca2a6dde7ba62f6f06c1b4afb24cd55a7a1a048da342616c65746f6b656e",
  "a89c237e2ef5ca2a6dde7ba62f6f06c1b4afb24cd55a7a1a048da3426b6576746f6b656e",
];

const jsonE = {
  ids: [
    "24efb77aaf1c285acc46f46ee858d5b13ab1b1fdb470ed1b724f19e07375706572616c65",
    "27869783fae7a16dfe1a923e6799dca4ad8144b5d5b0d16828d5619c74657374546f6b656e4e4654303033",
    "33b6150f4f5df62bfc638f206f3a37254d4a82f15f0c6635a20eb83f414a4341",
    "a89c237e2ef5ca2a6dde7ba62f6f06c1b4afb24cd55a7a1a048da342416c653031",
    "a89c237e2ef5ca2a6dde7ba62f6f06c1b4afb24cd55a7a1a048da342616c65746f6b656e",
    "a89c237e2ef5ca2a6dde7ba62f6f06c1b4afb24cd55a7a1a048da3426b6576746f6b656e",
  ],
};
