// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721Metadata.sol';
import './ERC721Enumerable.sol';


contract ERC721Connector is ERC721Metadata, ERC721Enumerable {
    /* Despliegue del conector, y alimentación de los metadatos */
    constructor(string memory name, string memory symbol) ERC721Metadata(name, symbol) {

    }
}