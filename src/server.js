require('module-alias/register'); // for import module alias '@src'

const app = require('./app');

const { PORT } = require('./configs/dotenv.config');

// start express server
const server = app.listen(PORT || 3000, () => {
  console.log(`Server start at port:${PORT}`);
});

module.exports = app;
