

//CommonJS, every file is module (by default)
//modules - Encapsulated code (only share minimum)

//note always start calling modules using ./
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')
//console.log(data)
//console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)



