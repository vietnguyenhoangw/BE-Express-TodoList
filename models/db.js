const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true); // This pervent collection.ensureIndex depreciation warning
mongoose.set('useFindAndModify', false); // This prevent current mongoose depreciation warning
mongoose.connect('mongodb://localhost/personal-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
