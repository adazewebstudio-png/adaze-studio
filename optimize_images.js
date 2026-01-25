const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imagesToOptimize = [
    { name: 'richard_adaze_logo.png', type: 'png', quality: 80 },
    { name: 'vrared_logo.png', type: 'png', quality: 80 },
    { name: 'og-image.jpg', type: 'jpeg', quality: 75 },
    { name: 'ayeccu_logo.jpg', type: 'jpeg', quality: 75 }
];

async function optimize() {
    for (const img of imagesToOptimize) {
        const inputPath = path.join(publicDir, img.name);
        const outputPath = path.join(publicDir, `opt_${img.name}`);

        if (fs.existsSync(inputPath)) {
            console.log(`Optimizing ${img.name}...`);
            const stats = fs.statSync(inputPath);
            console.log(`Original size: ${(stats.size / 1024).toFixed(2)} KB`);

            try {
                let pipeline = sharp(inputPath);

                if (img.type === 'png') {
                    pipeline = pipeline.png({ quality: img.quality, compressionLevel: 9, palette: true });
                } else {
                    pipeline = pipeline.jpeg({ quality: img.quality, progressive: true });
                }

                await pipeline.toFile(outputPath);

                const newStats = fs.statSync(outputPath);
                console.log(`New size: ${(newStats.size / 1024).toFixed(2)} KB`);

                // Replace original
                fs.unlinkSync(inputPath);
                fs.renameSync(outputPath, inputPath);
                console.log(`Successfully optimized and replaced ${img.name}\n`);
            } catch (err) {
                console.error(`Error optimizing ${img.name}:`, err);
            }
        } else {
            console.log(`File not found: ${img.name}`);
        }
    }
}

optimize();
