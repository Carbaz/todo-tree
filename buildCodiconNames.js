#! /usr/local/bin/node

var fs = require( 'fs' );
var cp = require( "child_process" );

var raw = cp.execSync( "type mapping.json" ).toString();
var mappings = JSON.parse( raw );

fs.writeFileSync( 'src/codiconNames.js', "module.exports = " + JSON.stringify( Object.keys( mappings ), null, 2 ) + ";\n" );
