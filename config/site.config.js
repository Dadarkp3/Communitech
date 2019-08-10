const path = require('path');
const fs = require('fs');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  // Your website's name, used for favicon meta tags
  site_name: 'Communitech',

  // Your website's description, used for favicon meta tags
  site_description: 'A CommuniTech vem com uma proposta inovadora, visando dar capacitação de nível básico em informática para que os nossos jovens da comunidade tenham a oportunidade de ingressar no mercado de trabalho em um nível técnico, no intuito de diminuir a desigualdade social.',

  // Your website's URL, used for sitemap
  site_url: 'http://communitech.tk',

  // Google Analytics tracking ID (leave blank to disable)
  googleAnalyticsUA: 'UA-145410577-1',

  // The viewport meta tag added to your HTML page's <head> tag
  viewport: 'width=device-width,initial-scale=1',

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, '/src/images/favicon.png'),

  // Local development URL
  dev_host: 'localhost',

  // Local development port
  port: process.env.PORT || 8000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
  package: JSON.parse(
    fs.readFileSync(path.join(ROOT, '/package.json'), { encoding: 'utf-8' }),
  ),
};

module.exports = config;
