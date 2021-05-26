test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
    /* toEqual recursively checks every field of an objec
        or array */
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

/*
    Truthiness
    
    toBeNull
    toBeUndefined === !toBeDefined 
    toBeTruthy !== toBeFalsy
*/

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

/*
    Numbers
    
    toBeGreaterThan < toBeGreaterThanOrEqual
    toBeLessThan < toBeLessThanOrEqual
    toBe === toEqual (for numbers)
    toBeCloseTo() is for floats, since toBe/toEqual 
        will fail.
*/
test('floats\' values are approximate', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
});

/*
    Strings - Test w/ regex w/ toMatch()
*/
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});
test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

/*
    Arrays and iterables - use toContain()
*/
const shoppingList = [
    'chocolate',
    'milk',
    'cereal',
    'cheese',
    'tomatoes'
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

/*
    Exceptions - use toThrow'
*/

const compileAndroidCode = () => {
    throw new Error('you are using the wrong JDK');
};

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});
