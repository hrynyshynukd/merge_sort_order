function merge(arr1 = [], arr2 = [], order = "up") {
    let i = 0;
    let j = 0;
    const resArr = [];

    while (i < arr1.length && j < arr2.length) {
        if ((order === "up" && arr1[i] < arr2[j]) || (order === "down" && arr1[i] > arr2[j])) {
            resArr.push(arr1[i]);
            i++;
        } else {
            resArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        resArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        resArr.push(arr2[j]);
        j++;
    }

    return resArr;
}

function mergeSort(inputArray = [], order = "up") {
    if (inputArray.length <= 1) {
        return inputArray;
    }

    const middle = Math.floor(inputArray.length / 2);
    const leftPart = inputArray.slice(0, middle);
    const rightPart = inputArray.slice(middle);

    return merge(
        mergeSort(leftPart, order),
        mergeSort(rightPart, order),
        order
    );
}

const sortOrder = prompt("Введіть 'up' для сортування за зростанням або 'down' для сортування за спаданням: ").trim().toLowerCase();
const arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 1000 - 500));
}

console.log(mergeSort(arr, sortOrder));
