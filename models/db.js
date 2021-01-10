const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true); // This pervent collection.ensureIndex depreciation warning
mongoose.set('useFindAndModify', false); // This prevent current mongoose depreciation warning
mongoose.connect('mongodb://89.187.170.169/32/personal-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
