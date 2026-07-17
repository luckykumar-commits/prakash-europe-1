const https = require('https');

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => resolve(false)).end();
  });
}

async function run() {
  const baseUrl = "https://storage.googleapis.com/aistudio-chatapp-data-public/user_2004278453489807567/applet_e99b6902-656b-4102-be65-2c3be5d5dfe3";
  for (let i = 1; i <= 30; i++) {
    for (const ext of ['jpg', 'png', 'jpeg', 'webp']) {
      const url = `${baseUrl}/image_${i}.${ext}`;
      if (await checkUrl(url)) {
        console.log(`Found: ${url}`);
      }
    }
  }
}

run();
