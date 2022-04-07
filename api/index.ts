import axios from "axios";

export const Api = axios.create({
  baseURL: "/api",
});

export async function getAssets(assetIds) {
  console.log(assetIds);
  const walletData = await Api.get("/assets", {
    params: {
      assets: { ids: assetIds },
    },
  });
  return walletData.data;
}
export async function lockAsset(
  asset,
  { datum, datumHash, txHash, address, artistAddress, contractVersion }
) {
  const assetData = await Api.post("/assets", {
    body: {
      type: "lockAsset",
      asset,
      data: {
        datum,
        datumHash,
        txHash,
        address,
        artistAddress,
        contractVersion,
      },
    },
  });
  return assetData.data;
}
export async function unlockAsset(asset, { txHash, address }) {
  const assetData = await Api.post("/assets", {
    body: {
      type: "unlockAsset",
      asset,
      data: {
        txHash,
        address,
      },
    },
  });
  return assetData.data;
}
export const addAssetEvent = async (asset, newEvent) => {
  const assetData = await Api.post("/assets", {
    body: {
      type: "addAssetEvent",
      asset,
      newEvent,
    },
  });
  return assetData.data;
};

export async function walletExists(walletAddress: string) {
  const walletData = await Api.get("/wallet", {
    params: {
      type: "exist",
      address: walletAddress,
    },
  });
  return walletData.data;
}
export async function getWallet(walletAddress: string) {
  const walletData = await Api.get("/wallet", {
    params: {
      type: "getWallet",
      address: walletAddress,
    },
  });
  //console.log(walletData)
  return walletData.data;
}
export async function addWalletEvent(wallet, newEvent) {
  const walletEvent = await Api.post("/wallet", {
    params: {
      type: "addWalletEvent",
      wallet,
      newEvent,
    },
  });
  return walletEvent.data;
}

export async function listWalletAsset(wallet, walletAsset, newEvent) {
  const _listWalletAssset = await Api.post("/wallet", {
    params: {
      type: "listWalletAssset",
      wallet,
      walletAsset,
      newEvent,
    },
  });
  return _listWalletAssset.data;
}
export async function delistWalletAsset(wallet, listedAsset, newEvent) {
  const _delistWalletAssset = await Api.post("/wallet", {
    params: {
      type: "delistWalletAssset",
      wallet,
      listedAsset,
      newEvent,
    },
  });
  return _delistWalletAssset.data;
}

export async function relistWalletAsset(wallet, listedAsset, newEvent) {
  const _relistWalletAssset = await Api.post("/wallet", {
    params: {
      type: "relistWalletAssset",
      wallet,
      listedAsset,
      newEvent,
    },
  });
  return _relistWalletAssset.data;
}
export async function getLockedUtxosByAsset(address, asset) {
  const _lockedUtxosByAsset = await Api.get("/blockfrost", {
    params: {
      type: "getLockedUtxosByAsset",
      address,
      asset,
    },
  });
  return _lockedUtxosByAsset;
}
