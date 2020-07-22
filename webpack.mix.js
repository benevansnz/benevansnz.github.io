const mix = require('laravel-mix');
mix.sass('scss/style.scss', 'compiled')
   .setPublicPath('compiled');
