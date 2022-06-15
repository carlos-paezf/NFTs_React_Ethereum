const { assert } = require('chai')

const NFTReactETH = artifacts.require('./NFTReactETH')

require('chai')
    .use(require('chai-as-promised'))
    .should()


contract('NFTReactETH', (accounts) => {
    let contract

    before(async () => {
        contract = await NFTReactETH.deployed()
    })

    describe('Deployment', () => {
        it('deployment successfull', async () => {
            const address = contract.address
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
            assert.notEqual(address, 0x0)
        })

        it('has a name', async () => {
            const name = await contract.name()
            assert.equal(name, 'NFTReactETH')
        })

        it('has a symbol', async () => {
            const symbol = await contract.symbol()
            assert.equal(symbol, 'NFTRETH')
        })
    })

    describe('Minting', () => {
        it('creates a new token', async () => {
            const result = await contract.mint('https...1')

            const totalSupply = await contract.totalSupply()
            assert.equal(totalSupply, 1)

            const event = result.logs[0].args
            assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from the contract')

            assert.equal(event.to, accounts[0], 'to is msg.sender')

            await contract.mint('https...1').should.be.rejected
        })
    })

    describe('Indexing', () => {
        it('list NFTReactETH', async () => {
            await contract.mint('https...2')
            await contract.mint('https...3')
            await contract.mint('https...4')
            const totalSupply = await contract.totalSupply()

            let result = []
            let NFTReactETH
            for (let i = 1; i <= totalSupply; i++) {
                NFTReactETH = await contract.nfts(i - 1)
                result.push(NFTReactETH)
            }
        })
    })

})