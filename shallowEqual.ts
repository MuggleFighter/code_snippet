const shallowEqual: (obj1: any, obj2: any) => boolean  = (obj1: any, obj2: any) => {
    if(Object.is(obj1, obj2)) {
        return true
    }

    if(
        typeof obj1 !== 'object' || 
        obj1 === null ||
        typeof obj2 !== 'object' ||
        obj2 === null
    ) {
        return false
    }

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if(keys1.length !== keys2.length) {
        return false
    }

    for (let i = 0; i < keys1.length; i++) {
        if(
            !Object.prototype.hasOwnProperty.call(obj2, keys1[i]) ||
            !Object.is(obj1[keys1[i]], obj2[keys1[i]])
        ) {
            return false
        }
    }

    return true
}