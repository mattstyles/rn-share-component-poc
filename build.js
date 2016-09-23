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
fs.readdir('./src', (err, files) => {
  files
    .filter(filename => !/native/.test(filename))
    .forEach(filename => {
      fs.createReadStream(path.join('./src', filename))
        .pipe(fs.createWriteStream(path.join('./dist/web', filename)))
    })
})

// Copy over native stuff
fs.readdir('./src', (err, files) => {
  files
    .filter(filename => !/native/.test(filename))
    .forEach(filename => {
      let nativeName = filename
        .split('.')
        .insert(1, 'native')
        .join('.')

      if (files.includes(nativeName)) {
        fs.createReadStream(path.join('./src', nativeName))
          .pipe(fs.createWriteStream(path.join('./dist/native', filename)))
      } else {
        fs.createReadStream(path.join('./src', filename))
          .pipe(fs.createWriteStream(path.join('./dist/native', filename)))
      }
    })
})
