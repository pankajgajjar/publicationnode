/**
 * Created with IntelliJ IDEA.
 * User: CS11
 * Date: 13/5/13
 * Time: 6:03 PM
 * To change this template use File | Settings | File Templates.
 */

var PORT = process.argv[2] && parseInt(process.argv[2], 10) || 5000;
var STATIC_DIR = __dirname + '/app';
var TEST_DIR = __dirname + './test';
require('./app.js').start(PORT,STATIC_DIR,TEST_DIR);
