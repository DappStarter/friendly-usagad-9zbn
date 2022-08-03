require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind purpose gesture deposit flip gauge'; 
let testAccounts = [
"0xca385dac9b4f38a8de2f7a3f0f8ac9b6497c22bfd4bf87a4df3694066b81f34d",
"0x4783a03168d6391d38fec2f552fb6372582726166491f1673c9b85cffbc7da93",
"0xd9a602594d6218079fbd111846ea728b95329ca35ca40deb132245a029d35c09",
"0xf5c61c69f7a9cc050c8a0b77138c32620aa44bb4446282f5bd82ec1713948a1f",
"0xa0abb07331b9b7ca1b67c8a6fa7af61cb1815cddcc0d231d0fd6af635fdb5b44",
"0x7e4a74bec015913ae2ad56f6afe519304b5549829572d6f9af49bc387dea6ea0",
"0xc6e84133c4ceaba0205da69b8191bf7acb003bc5d1614a58cb9a82aa23855c1f",
"0x7dd1cdddc343f794365f6e901adf50a983ebc18f39cdc1ab5b2c3da8f70c25c9",
"0xb7a179bc038afcd143ef26001492cf954ca8ad931b9b2cd1ba292c672fa31f9b",
"0x61ae8dec335a828ce80bb94530278e38a2a2f66ad7bfd4e692e77b7811a18d6a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

