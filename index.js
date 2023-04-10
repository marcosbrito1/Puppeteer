const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/opt/microsoft/msedge-beta/microsoft-edge-beta' //Entre as aspas simples coloque o caminho do executável do navegador que deseja utilizar, no meu caso estou utilizando o Microsoft Edge
  });
  const page = await browser.newPage();
  await page.goto('https://pt.wikipedia.org/'); //Url da página 
  await page.screenshot({path: 'capturaTelaSite.png'}); //Gera a captura de tela
  await page.pdf({path: 'pdfSite.pdf'}); //Gera o pdf da página
  await browser.close();
})();