import { expect, test } from "vitest";
import { stringLength, isPalindrome, sortAscending, sqrt, sumArray, fetchUserData, getNextFibonacciNumber } from "./code";
test("The string length check function works", () => {
    expect(stringLength("meir")).toBe(4);
});
test("The palindrome check function works", () => {
    expect(isPalindrome("mamm")).toBe(false);
});
test("The string sort function works", () => {
    expect(sortAscending([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
});
test("The square root function works", () => {
    expect(sqrt(4)).toBe(2);
    expect(() => sqrt(-2)).toThrowError("It is not possible to calculate the square root of a negative number");
});
test("Array sum function works", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArray([1, 2, 3, 4, 5])).toBeGreaterThan(9);
});
test("fetchUserData retrieves user data correctly", async () => {
    await expect(fetchUserData(11)).rejects.toThrowError('Failed to fetch user data for user ID 11');
    await expect(fetchUserData(1)).resolves.toEqual({
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    });
});
test("getNextFibonacciNumber returns the next Fibonacci number", () => {
    expect(getNextFibonacciNumber([0, 1, 1, 2, 3])).toBe(5);
    expect(getNextFibonacciNumber([0, 1])).toBe(1);
    expect(() => getNextFibonacciNumber([0])).toThrowError("The input array should contain at least two numbers.");
    expect(() => getNextFibonacciNumber([0, 4, 8])).toThrowError("The input array does not represent a Fibonacci sequence.");
});
