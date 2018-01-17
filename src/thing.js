import hello from './other';

export default function say( loud )
{
    if ( loud ) console.log( `World says "${hello()}"` );
    return "You had me at " + hello();
}
