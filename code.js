export function stringLength(str) {
    return str.length;
}
;
export function isPalindrome(inputString) {
    const cleanedString = inputString.replace(/\s+/g, "").toLowerCase();
    const reversedString = cleanedString.split("").reverse().join("");
    return cleanedString === reversedString;
}
;
export function sortAscending(numbers) {
    return numbers.sort((a, b) => a - b);
}
export function sqrt(number) {
    if (number < 0) {
        throw new Error("It is not possible to calculate the square root of a negative number");
    }
    return Math.sqrt(number);
}
export function sumArray(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}
;
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
export async function fetchUserData(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(`Failed to fetch user data for user ID ${userId}`);
    const userData = await response.json();
    return userData;
}
;
function isFibonacci(arr) {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 1] + arr[i - 2] !== arr[i]) {
            return false;
        }
    }
    return true;
}
;
export function getNextFibonacciNumber(arr) {
    if (arr.length < 2) {
        throw new Error("The input array should contain at least two numbers.");
    }
    if (!isFibonacci(arr)) {
        throw new Error("The input array does not represent a Fibonacci sequence.");
    }
    const n = arr.length;
    const nextNumber = arr[n - 1] + arr[n - 2];
    return nextNumber;
}
;
