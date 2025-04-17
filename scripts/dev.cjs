const config = require('../app/config.json');

// Pop a lil' monogram in the terminal
console.info(config.ascii);
console.log('MINIFLARE_DISABLED:', process.env.MINIFLARE_DISABLED);
