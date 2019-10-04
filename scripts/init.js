const fs = require('fs-extra');

fs.copy('init/assets', 'src/shared/assets', (err) => {
    if (err) throw err;
    console.log('assets copied');
});

fs.copy('init/components', 'src/shared/components', (err) => {
    if (err) throw err;
    console.log('components copied');
});

fs.copy('init/pages', 'src/shared/pages', (err) => {
    if (err) throw err;
    console.log('pages copied');
});

fs.copy('init/store', 'src/shared/store', (err) => {
    if (err) throw err;
    console.log('store copied');
});

fs.copy('init/App.module.css', 'src/shared/App.module.css', (err) => {
    if (err) throw err;
    console.log('App.module.css copied');
});

fs.copy('init/App.tsx', 'src/shared/App.tsx', (err) => {
    if (err) throw err;
    console.log('App.tsx copied');
});

fs.copy('init/Routes.tsx', 'src/shared/Routes.tsx', (err) => {
    if (err) throw err;
    console.log('Routes.tsx copied');
});

fs.copy('init/test.css', 'src/shared/test.css', (err) => {
    if (err) throw err;
    console.log('test.css copied');
});

fs.copy('init/variables.css', 'src/shared/variables.css', (err) => {
    if (err) throw err;
    console.log('variables.css copied');
});
