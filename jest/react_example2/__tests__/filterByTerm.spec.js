const filterByTerm = require('../src/filterByTerm');

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://google.com"},
            { id: 2, url: "https://maps.google.com"},
            { id: 3, url: "https://translate.google.com"}
        ];
        const output = [{ id: 3, url: "https://translate.google.com"}];
        
        expect(filterByTerm(input, "tRanSlAte")).toEqual(output);
    });
    
    test("throw error when search term is not provided", () => {
        const input = [
            { id: 1, url: "https://google.com"},
            { id: 2, url: "https://maps.google.com"},
            { id: 3, url: "https://translate.google.com"}
        ];
        expect(() => filterByTerm(input)).toThrow("searchTerm cannot be empty!");
    });

    test("throw error when input array is not provided", () => {
        expect(() => filterByTerm([], "TRansLAte")).toThrow(Error);
    });

});
