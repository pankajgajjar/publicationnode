/**
 * Created with JetBrains WebStorm.
 * User: CS13
 * Date: 15/5/13
 * Time: 1:20 PM
 * To change this template use File | Settings | File Templates.
 */

var fs = require('fs'),
    path = require('path'),
    util = require('../utils/FileReader.js');

var FileReaderService = function (filepath) {
    this.filepath= filepath;
};

FileReaderService.prototype.readFile=function()
{
    var reader= new util.FileReader('D:\\test');
    var contents=reader.readFileContents();
    console.log('hello:'+ contents);
    return contents;

}

module.exports.FileReaderService=FileReaderService;