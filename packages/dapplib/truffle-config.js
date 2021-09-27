require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food walnut radar mean proof coral light army gasp'; 
let testAccounts = [
"0xeb611130c85d89eb0e11cbede9ffec504d64359eecf2864c5215de75d4e31c9a",
"0xf9d40650c20dc7a1ae26447a0328532e5fdcc353da2228db66a238a736afc334",
"0x1c7359fcd1eb81d5b9740834dc790fc35a3a286adcee5ff560fe2afc31e56720",
"0x9d6e82e911c3cade91585e1f7467c38c23a352255629e331cc5ec9caf1438cfd",
"0xfc174386931419401d6bd6f5f4309ec6e81d6d6a06642edcb08762a00bb1df81",
"0x2f526e9353df3fac821660cb71f0cdcf3892510fccbd39f2f1d893cf572d218b",
"0x8c68c444973e90382a8bbd9b3baccf52e49e4bd2cc0b8a9b9b87ae06241d2d7a",
"0xc10d8e6d398ab29676c942fabec420b6b0ff34a4485fa72d8d0c3de6b8a627f2",
"0xd1df09821dff06212653ad3809471d7569e38b961570544f63969665974b4dbd",
"0x388ab4555ca993c9a71a510da267f85e776583edef36008122251ddf2e2181e0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


