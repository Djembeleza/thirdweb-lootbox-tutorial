import { sdk } from "./helpers.js";

async function main() {
    const packModuleAddress = '0x9e377e98FeD39C3d2A8590C8b8C524206B292696';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Opening the pack...');
    const opened = await packModule.open('0');
    console.log('Opened the pack!');
    console.log(opened);
}

try {
    await main();
} catch (error) {
    console.error("Error opening the pack", error);
    process.exit(1);
}