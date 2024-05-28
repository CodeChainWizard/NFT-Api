const fs = require("fs");
// ---- GET REQUEST
const nfts = JSON.parse(
  fs.readFileSync(`${__dirname}/../nft-data/data/nft-simple.json`)
);

// --- NFT FUNCTION
const getAllNFT = (req, res) => {
  res.status(200).json({
    status: "success",
    results: nfts.length,
    data: {
      nfts,
    },
  });
};

const createNFT = (req, res) => {
  const newId = nfts[nfts.length - 1].id + 1;
  const newNFT = Object.assign({ id: newId }, req.body);

  nfts.push(newNFT);
  fs.writeFile(
    `${__dirname}/nft-data/data/nft-simple.json`,
    JSON.stringify(nfts),
    (err) =>
      res.status(200).json({
        status: "success",
        data: { newNFT },
      })
  );
};

const getSingleNFT = (req, res) => {
  const id = req.params.id * 1;
  const nft = nfts.find((el) => el.id === id);
  if (!nft) {
    return res.status(404).json({
      status: "Failed",
      data: {
        nft: "This Id Not Get any NFT",
      },
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      nft,
    },
  });
};

const updateNFT = (req, res) => {
  const id = req.params.id * 1;
  const nft = nfts.find((el) => el.id === id);

  if (!nft) {
    return res.status(404).json({
      status: "Failed",
      data: {
        nft: "Thid Id NFT not Update",
      },
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      nft: "This ID NFT details Update",
    },
  });
};

const deletedNFT = (req, res) => {
  const id = req.params.id * 1;
  const nft = nfts.find((el) => el.id === id);

  if (!nft) {
    return res.status(404).json({
      status: "Failed",
      data: {
        nft: "This Id NFT not Deleted",
      },
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      nft: "This ID NFT Deleted",
    },
  });
};

module.exports = { getAllNFT, createNFT, getSingleNFT, updateNFT, deletedNFT };
