import app from '../app.js';
import connectDB from '../services/db.js';
import config from '../utils/configs.js';

connectDB((err) => {
  if (!err) {
    console.log('db connected!');
    return app.listen(config.port, () => {
      console.log(`Server running on port`, config.port);
    });
  }

  throw err;
});
