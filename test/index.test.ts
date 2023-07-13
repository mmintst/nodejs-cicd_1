import { describe } from "node:test";
import { max, min, avg } from "../src";

describe ("test max", () => {
    test("empty arr should throw err", () => {
        expect(() => {
            max([])
        }).toThrow();

        expect(() => {
            max([]);
        }).toThrowError("numbers was empty")
    })

    test("arr w/ single element should return that element", () => {
        expect(max[1]).toEqual(1)
    })

    test("should return max in arr", () => {
        const tests: [number[], number][] = [
            [[1, 2, 3], 3]
        ]

    tests.forEach((test) => {
        const [input, expected] = test;
        expect(max(input)).toEqual(expected);
    })
    })
})

describe ("test min", () => {
    test("empty arr should throw err", () => {
        expect(() => {
            min([])
        }).toThrow();

        expect(() => {
            min([]);
        }).toThrowError("numbers was empty")
    })

    test("arr w/ single element should return that element", () => {
        expect(min[1]).toEqual(1)
    })

    test("should return min in arr", () => {
        const tests: [number[], number][] = [
            [[1, 2, 3], 1]
        ]

    tests.forEach((test) => {
        const [input, expected] = test;
        expect(max(input)).toEqual(expected);
    })
    })
})

describe ("test avg", () => {
    test("empty arr should throw err", () => {
        expect(() => {
            avg([])
        }).toThrow();

        expect(() => {
            avg([]);
        }).toThrowError("numbers was empty")
    })

    test("arr w/ single element should return that element", () => {
        expect(avg[1]).toEqual(1)
    })

    test("should return avg in arr", () => {
        const tests: [number[], number][] = [
            [[1, 2, 3], 2]
        ]

    tests.forEach((test) => {
        const [input, expected] = test;
        expect(avg(input)).toEqual(expected);
    })
    })
})