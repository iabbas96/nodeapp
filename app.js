//npm - global command, comes with node 
//npm --version 

//local dependency - use it only in this particular project
//npm  i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm   install -g <packageName> (mac)


//to install package use:  'npm init -y' (everything default )

//using lodash package
const _ =require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)