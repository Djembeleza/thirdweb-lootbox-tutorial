import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
    // Paste in the address from when you created the bundle collection module
    const bundleModuleAddress = '0xb436b3504E5dBAF7DA2809a1D8719F2c3cc87D70';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);
    console.log('Creating NFT batch...');

    const created = await bundleModule.createAndMintBatch([
        {
            metadata: {
                name: 'Tesla Model 3',
                description: 'Modern day electric car',
                image: readFileSync('./assets/tesla.jpg'),
                properties: {
                    rarity: 'common',
                    fanciness: 6,
                }
            },
            supply: 75,
        },
        {
            metadata: {
                name: 'Porsche 911',
                description: 'The ultimate sports car',
                image: readFileSync('./assets/porche.jpg'),
                properties: {
                    rarity: 'rare',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: 'Bugatti Chiron',
                description: 'The fastest car in the world',
                image: readFileSync('./assets/bugatti.jpg'),
                properties: {
                    rarity: 'super rare!',
                    fanciness: 10,
                }
            },
            supply: 10,
        },
        {
            metadata: {
                name: 'BMW',
                description: 'German sports car',
                image: readFileSync('./assets/bmw.jpg'),
                properties: {
                    rarity: 'very common',
                    fanciness: 5,
                }
            },
            supply: 150,
        },
        {
            metadata: {
                name: 'Lamborghini',
                description: 'Created by the Italians',
                image: readFileSync('./assets/lamborghini.jpg'),
                properties: {
                    rarity: 'rare',
                    fanciness: 8,
                }
            },
            supply: 30,
        },
        {
            metadata: {
                name: 'Mercedes Benz',
                description: 'The best or nothing',
                image: readFileSync('./assets/mercedes.jpg'),
                properties: {
                    rarity: 'rare',
                    fanciness: 7,
                }
            },
            supply: 45,
        }
    ]);

    console.log('NFTs created!')
    console.log(JSON.stringify(created, null, 2));
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}