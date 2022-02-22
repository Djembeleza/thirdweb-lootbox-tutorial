import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
    const bundleModuleAddress = '0xb436b3504E5dBAF7DA2809a1D8719F2c3cc87D70'; // your bundle module address
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = '0x9e377e98FeD39C3d2A8590C8b8C524206B292696'; // your pack module address
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Getting all NFTs from bundle...');
    const nftsInBundle = await bundleModule.getAll();

    console.log('NFTs in bundle:');
    console.log(nftsInBundle);

    console.log('Creating a pack containing the NFTs from bundle...');
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata: {
            name: 'Fancy Cars Pack!',
            image: readFileSync('./assets/collection.jpg'),
            description: 'A pack of fancy cars I found on the internet',
        },
        assets: nftsInBundle.map(nft => ({
            tokenId: nft.metadata.id,
            amount: nft.supply,
        })),
    });

    console.log('Pack created!')
    console.log(created);
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}