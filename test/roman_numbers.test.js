const convertToRoman  = require('../src/utils');

describe( "convert natural numbers to romans",() => {
    test("convert 1 to roman I ", () => {
        //given

        //when
        
        //then
        expect(convertToRoman(1)).toBe("I");
    });
    test("convert 4 to roman IV", () => {
        //given

        //when
        
        //then
        expect(convertToRoman(4)).toBe("IV");
    })
    test("convert 5 to roman V", () => {
        //given

        //when
        
        //then
        expect(convertToRoman(5)).toBe("V");
    })
    test("convert 7 to roman VII", () => {
        //given

        //when
        
        //then
        expect(convertToRoman(7)).toBe("VII");
    })
    test("convert 8 to roman VIII", () => {
        //given

        //when
        
        //then
        expect(convertToRoman(8)).toBe("VIII");
    })
    test("convert 9 to roman IX", () => {
        //given

        //when
        
        //then
        expect(convertToRoman(9)).toBe("IX");
    })
    test("convert 40 to roman XL", () => {
        //given

        //when
        
        //then
        expect(convertToRoman(40)).toBe("XL");
    })
    test("convert 90 to roman XC", () => {
        //given

        //when
        
        //then
        expect(convertToRoman(90)).toBe("XC");
    })
    test("convert 113 to roman CXIII", () => {
        //given

        //when
        
        //then
        expect(convertToRoman(113)).toBe("CXIII");
    })
})