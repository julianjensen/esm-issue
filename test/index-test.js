/** ******************************************************************************************************************
 * @description
 * This doesn't work, at all.
 *********************************************************************************************************************/
const
    expect = require( 'chai' ).expect,
    target = require( '../index' );

describe( 'JD will fix all the things', function() {

    it( 'should work a lot', () => {
        expect( target( false ) ).to.equal( "You had me at hello" );
    } );

} );


