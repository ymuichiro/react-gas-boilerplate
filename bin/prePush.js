const fs = require('fs/promises');
const path = require('path');

fs.rm(path.resolve('server/hosting/main.js')).then(() => {
  console.log('removed', path.resolve('server/hosting/main.js'));
});
