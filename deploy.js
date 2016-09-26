#!/usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')

rimraf.sync('./dist')
mkdirp.sync('./dist/web')
mkdirp.sync('./dist/native')

// patch in insert
Array.prototype.insert = function(i,...args){
  this.splice(i,0,...args)
  return this
}

// Copy over every file for web
fs.readdir('./dist/native', (err, files) => {
  files
    .filter(filename => !/native/.test(filename))
    .forEach(filename => {
      fs.createReadStream(path.join('./src', filename))
        .pipe(fs.createWriteStream(path.join('./dist/web', filename)))
    })
})
