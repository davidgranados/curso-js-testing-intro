const { config } = require('./config');
const createApp = require('./app');

const app = createApp();

app.listen(config.port, (err) => {
  if (err) {
    /* eslint-disable */
    console.error('Error: ', err);
  }
});
