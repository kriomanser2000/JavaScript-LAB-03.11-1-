/*
Створіть масив із 10 випадкових чисел і напишіть кілька
функцій для роботи з ним.
1. Функція приймає масив і виводить його на екран.
2. Функція приймає масив і виводить лише парні елементи.
3. Функція приймає масив і повертає суму всіх елементів
масиву.
4. Функція приймає масив і повертає його максимальний
елемент.
5. Функція додавання нового елемента в масив за вказаним
індексом.
6. Функція видалення елемента з масиву за вказаним індек-
сом.
*/
//--
//massive
function generateRandomArray() 
{
    let array = [];
    for (let i = 0; i < 10; i++) 
    {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

//1.
function printArray(arr) 
{
    console.log(arr);
}

//2.
function printEvenElements(arr) 
{
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] % 2 === 0) 
        {
            console.log(arr[i]);
        }
    }
}

//3.
function sumArray(arr) 
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        sum += arr[i];
    }
    return sum;
}

//4.
function maxElement(arr) 
{
    return Math.max(...arr);
}

//5.
function addElementAtIndex(arr, index, element) 
{
    arr.splice(index, 0, element);
    return arr;
}

//6.
function removeElementAtIndex(arr, index) 
{
    arr.splice(index, 1);
    return arr;
}
let randomArray = generateRandomArray();
console.log("Generated massive: ");
printArray(randomArray);
console.log("Paired elements of the massive: ");
printEvenElements(randomArray);
console.log("Sum all massive elemets: ", sumArray(randomArray));
console.log("Max element of the massive: ", maxElement(randomArray));
console.log("Massive after adding a new item at index 2: ");
console.log(addElementAtIndex(randomArray, 2, 99));
console.log("Massive after deleting an element at index 5: ");
console.log(removeElementAtIndex(randomArray, 5));


/*
Створіть ще один масив із 5 випадкових чисел і написати на-
ступні функції.
1. Функція приймає 2 масиви і повертає новий масив, в яко-
му зібрані всі елементи двох масивів без повторень.
2. Функція приймає 2 масиви і повертає новий масив, у яко-
му зібрані загальні елементи (тобто елементи, які трапля-
ються у першому та другому масивах) без повторень. 3. Функція приймає 2 масиви і повертає новий масив, в яко-
му зібрані всі елементи з першого масиву, яких немає у
другому масиві.
*/
//--
//massive
function generateRandomArray(length) 
{
    let array = [];
    for (let i = 0; i < length; i++) 
    {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

//1.
function mergeArraysUnique(arr1, arr2) 
{
    let mergedArray = [...new Set([...arr1, ...arr2])];
    return mergedArray;
}

//2.
function commonElements(arr1, arr2) 
{
    let commonArray = arr1.filter(element => arr2.includes(element));
    return [...new Set(commonArray)];
}

//3.
function elementsOnlyInFirstArray(arr1, arr2) 
{
    let uniqueElements = arr1.filter(element => !arr2.includes(element));
    return uniqueElements;
}
let randomArray1 = generateRandomArray(5);
let randomArray2 = generateRandomArray(5);
console.log("First massive: ", randomArray1);
console.log("Second massive: ", randomArray2);
console.log("Combining two massives without repetition: ", mergeArraysUnique(randomArray1, randomArray2));
console.log("Common elements of two massives without repetition: ", commonElements(randomArray1, randomArray2));
console.log("Elements of the first massive that are not in the second massive: ", elementsOnlyInFirstArray(randomArray1, randomArray2));
