require = require( "@std/esm" )( module, { esm: 'js', cjs: true } );
module.exports = require( './src/thing' ).default;
