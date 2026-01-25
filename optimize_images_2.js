const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imagesToOptimize = [
    { name: 'yourflow_logo.png', type: 'png', quality: 80 }
];

async function optimize() {
    for (const img of imagesToOptimize) {
        const inputPath = path.join(publicDir, img.name);
        const outputPath = path.join(publicDir, `opt_${img.name}`);

        if (fs.existsSync(inputPath)) {
            console.log(`Optimizing ${img.name}...`);
            try {
                await sharp(inputPath)
                    .png({ quality: img.quality, compressionLevel: 9, palette: true })
                    .toFile(outputPath);

                fs.unlinkSync(inputPath);
                fs.renameSync(outputPath, inputPath);
                console.log(`Successfully optimized ${img.name}\n`);
            } catch (err) {
                console.error(`Error optimizing ${img.name}:`, err);
            }
        }
    }
}

optimize();
