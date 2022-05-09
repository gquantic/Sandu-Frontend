const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .sass('assets/sass/app.scss', 'assets/css')
    .sass('assets/sass/two-column.scss', 'assets/css')
    .sass('assets/sass/job-search.scss', 'assets/css');
