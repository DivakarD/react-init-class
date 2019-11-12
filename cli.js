#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = require('minimist')(process.argv.slice(2));
const cwd = process.cwd();

let wd = cwd;
let _fileName = 'ReactSampleClass';

if('f' in args) {
    _fileName = args['f'];
}

if('p' in args) {
    wd = args['p'];
}

const fileWritePath = path.join(wd, _fileName + '.js');
const templatePath = path.join(__dirname, 'reactClassTemplate.js');


let content = '';
fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) throw err;
    content = data;
    content = content.replace(/{ReactClassName}/g, _fileName);

    fs.writeFile(fileWritePath, content, 'utf8', function (err) {
        if (err) throw err;
    });
});