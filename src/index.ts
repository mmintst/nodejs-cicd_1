// max(number[]): number
export function max(numberArr: number[]): number {
    if (!numberArr.length) throw Error("numberArr was empty")
    let max = numberArr[0];
    numberArr.forEach((n) => {
        if (n > max) {
            max = n
        }
    })
    return max
}

// min(number[]): number
export function min(numberArr: number[]): number {
    if (!numberArr.length) throw Error("numberArr was empty")
    let min = numberArr[0];
    numberArr.forEach((n) => {
        if (n < min) {
            min = n
        }
    })
    return min
}

// avg(number[]): number
export function avg(numberArr: number[]): number {
    if (!numberArr.length) throw Error("numberArr was empty")
    let sum = numberArr[0];
    for (let i = 0; i < numberArr.length; i++) {
        sum += i
    }
    let avg = sum/numberArr.length;
    return avg
}

// export function avg(numbers: number[]): number {
//     if (!numbers.length) throw Error("numbers was empty");
//     const sum = numbers.reduce((r, n) => {
//       return r + n;
//     });
  
//     return sum / numbers.length;