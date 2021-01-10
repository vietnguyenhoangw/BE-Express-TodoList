const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true); // This pervent collection.ensureIndex depreciation warning
mongoose.set('useFindAndModify', false); // This prevent current mongoose depreciation warning
mongoose.connect('mongodb+srv://personal-blog:<personal-blog>@cluster0.saevs.mongodb.net/<personal-blog>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
