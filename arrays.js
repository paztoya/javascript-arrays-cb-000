var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, el){
return [el, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, el){
  array.unshift(el)
  return array
}
