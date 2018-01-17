/**
 * @description
 * This only works if I have
 * ```
 * "@std/esm": {
 *       "esm": "js",
 *       "cjs": true
 *   }
 * ```
 * in `package.json`, which makes some sense.
 */
const
    expect = require( 'chai' ).expect,
    target = require( '../src/thing' ).default;

describe( 'JD will fix all the things', function() {

    it( 'should work a lot', () => {
        expect( target( false ) ).to.equal( "You had me at hello" );
    } );

} );
