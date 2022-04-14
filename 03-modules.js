// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const name = require('./04-names')
const sayHi = require('./05-utils')
const anythingUCanLike = require('./06-alternative-flavor')
    // console.log(anythingUCanLike);

require('./07-mind-grenade')
    // sayHi('susan')
    // sayHi(name.peter)
    // sayHi(name.john)