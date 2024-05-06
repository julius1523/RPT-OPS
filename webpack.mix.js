const mix = require("laravel-mix");
const path = require("path");

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
   resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '~': path.join(__dirname, './resources/js')
        }
   },
});


// mix.js("resources/js/app.js", "public/js")
//     .vue()
//     .sass("resources/sass/app.scss", "public/css");

// mix.webpackConfig({
//     stats: {
//         children: false,
//     },
// });
