const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternaet-export');
//This will exe the exported method and props.
sayHi('Susane')
sayHi(names.john)
sayHi(names.peter)

//Because we require (Any module in node is wraped by a function) the module will run and calc the addVals
require('./7-mind-granade');