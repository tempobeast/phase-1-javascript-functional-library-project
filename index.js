const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

let copy = [...unmodifiedTestArr]
console.log(copy)




const myEach = function(collection, alert) { 
   for (let acc in collection) {
       alert(collection[acc])
   }
   return collection
}

const myMap = function (collection, callback) { 
    let newArray = [];
    for (let acc in collection) {
        newArray.push(callback(collection[acc]))
    }
    return newArray
 }

 const myReduce = function (collection, callback, acc) {
     let modifiedArray = [...collection];
     if (collection.isArray !== true) {
        let copy = Object.keys(collection).map(key => collection[key])
        acc = acc || copy.shift()
        for (let accessor in copy) { 
            acc = callback(acc, copy[accessor], copy)
        }
        return acc
    } else {
        acc = acc || modifiedArray.shift()
        for (let accessor in modifiedArray) {
            acc = callback(acc, modifiedArray[accessor], modifiedArray)
        }
    }
    return acc
}

const myFind = function (collection, predicate) {
    for (let accessor in collection) {
        let element = collection[accessor];
        if (predicate(element)) {
            return element;
        }
    }
}

const myFilter = function (collection, predicate) {
    let newArray = [];

    for (let accessor in collection) {
        let element = collection[accessor];
        if (predicate(element)) {
            newArray.push(element);
        }
        
    }
     return newArray;
}

const mySize = function (collection) {
    return Object.keys(collection).length
}

const myFirst = function (collection, n = 1) {
    let count = 1;
    let array = [];

    for (let element in collection) {
       if (count <= n) {
           array.push(collection[element]);
           count ++
       }
    }
    return array.length > 1 ? array : array[0]
}

const myLast = function (collection, n = 1) {
    let start = collection.length - n
    return n > 1 ? collection.slice(start, collection.length) : collection[start]
}

const myKeys = function (obj){
    let newArr = Object.keys(obj)
    return newArr
}

const myValues = function (obj) {
    let newArr = Object.values(obj)
    return newArr
}

const mySortBy = function(array, callback) {
   const newArray = [...array];
    return newArray.sort((a, b) => callback(a) - callback(b))

}