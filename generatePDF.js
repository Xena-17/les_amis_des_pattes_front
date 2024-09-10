const puppeteer = require('puppeteer');

(async () => {
    // Lance une nouvelle instance de Chromium
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Accède à votre page localhost
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    // Génère le fichier PDF
    await page.pdf({
        path: 'page.pdf', // Nom du fichier PDF
        format: 'A4', // Format du PDF
        printBackground: true, // Inclure les couleurs de fond
        landscape: false, // Orientation portrait
        scale: 1, // Ajuste l'échelle si nécessaire pour capturer tout le contenu
    });

    console.log('PDF généré avec succès !');
    await browser.close();
})();
