var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value}) 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKeys(object, key) {
  var newObj = Object.assign({}, object)
  newObj
  delete newObj.key
  return object 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}