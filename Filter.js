// Difference between two array 
// Methods 1 
const array1 = [1, 2, 5, 3, 8]
const array2 = [1, 2, 4, 5, 3, 7]

function diffArrayMethodsOne(arr1, arr2) {
    var newArr = []

    function onlyInFirst(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i])
            }
        }
    }

    onlyInFirst(arr1, arr2)
    onlyInFirst(arr2, arr1)

    return newArr
}

diffArray(array1, array2)

//Methods2
function diffArrayMethodsTwo(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArrayMethodsTwo(array1, array2)

//Destroy with arguments 
function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(item => item !== null);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

const numbers = [1, 2, 3, 2, 1, 3, 5, 2]
const nums = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
})

const array = [5, 62, 12, 15, 4, 2]
const result = array.filter(x => (x % 2) === 0)
console.log(result)

const ages = [12, 5, 18, 19, 35, 45]
const agePlus18 = ages.filter(x => x >= 18)
console.log("Age +18 = ", agePlus18)

const product = [
    {
        id: 1,
        name: "laptop",
        quantity: 12
    },
    {
        id: 15,
        name: "mouse",
        quantity: 2
    },
    {
        id: 150,
        name: "keyboard",
        quantity: 1
    }
]

const filterProductWithName = product.filter(product => (product.name != "laptop"))
const filterProductWithQuantity = product.filter(product => product.quantity > 10)

console.log("Filter Product with name = ", filterProductWithName)
console.log("Filter Product with quantity = ", filterProductWithQuantity)

// delete number in the array
const array = [1, 5, 45, 32, 12]
let element = 1
const deleteElement = array.filter(el => el !== element)
console.log(deleteElement)








