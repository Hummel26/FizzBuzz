const FizzBuzz = require("./fizzBuzz.js");

test("Mod หาร 3 แล้ว ลงตัว คือ Fizz", () => {
    expect(FizzBuzz(3)).toBe("Fizz")
})

test("Mod หาร 5 แล้ว ลงตัว คือ Buzz", () => {
    expect(FizzBuzz(5)).toBe("Buzz")
})

test("Mod หาร 3 และ 5 แล้ว ลงตัว", () => {
    expect(FizzBuzz(15)).toBe("FizzBuzz")
})

test("Mod หาร 3 และ 5 แล้ว ไม่ลงตัว", () => {
    expect(FizzBuzz(14)).toBe(14)
})

test("Mod หาร 3 และ 5 แล้ว ไม่ลงตัว", () => {
    expect(FizzBuzz(16)).toBe(16)
})

