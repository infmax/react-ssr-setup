const fs = require('fs-extra');

fs.copy('init/assets', 'src/shared/assets', (err) => {
    if (err) throw err;
    console.log('assests copied');
});
