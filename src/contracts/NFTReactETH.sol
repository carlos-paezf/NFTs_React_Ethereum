// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721Connector.sol';


contract NFTReactETH is ERC721Connector {
    string[] public nfts;

    mapping (string => bool) _nftExists;

    constructor() ERC721Connector('NFTReactETH', 'NFTRETH') { }

    function mint(string memory _nft) public {
        require(!_nftExists[_nft], 'Error - Token already exists');

        nfts.push(_nft);
        uint _tokenId = nfts.length - 1;

        _mint(msg.sender, _tokenId);

        _nftExists[_nft] = true;
    }
}