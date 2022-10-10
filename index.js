function standardize(collection){
    if(Array.isArray(collection)) {
        return [...collection];
    }
    else {
        return Object.values(collection);
    }
}

function myEach(collection, callBack){
   const newCollection = standardize(collection);
   for (let element of newCollection) {
    callBack(element);
   }
   return collection
}

function myMap(collection, callBack) {
    const newCollection = standardize(collection);
    let newArray = [];
    for (let element of newCollection) {
        newArray.push(callBack(element));
    }
    return newArray;
}

function myReduce(collection, callBack, init){
    let newCollection = standardize(collection);
    if (!init) {
        init = newCollection[0];
        newCollection = newCollection.slice(1)
    }
    
    for (let element of newCollection) {
        init = callBack(init, element, newCollection)
    }
    return init;
}

function myFind(collection, callBack){
    let newCollection = standardize(collection);
    for (let element of newCollection) {
        if(callBack(element)) {
            return element
        }
    }
}

function myFilter(collection, callBack) {
    let newCollection = standardize(collection);
    let newArray = []
    for (let element of newCollection) {
        if (callBack(element)) {
            newArray.push(element)
        }
    }
    return newArray
}

function mySize(collection){
    let newCollection = standardize(collection);
    return newCollection.length
}

function myFirst(array, n) {
    if (!n) {
        return array[0]
    }
    else {
        return array.slice(0, n)
    }
}

function myLast(array, n) {
    if (!n) {
        let x = array.slice(-1)
        return x[0]
    }
    else {
        return array.slice(-n)
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}