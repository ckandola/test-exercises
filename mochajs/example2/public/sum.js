function sum() {
    var args = Array.prototype.slice.call(arguments);

    if (!args.every(Number.isFinite)) {
        throw new TypeError('sum() expects only numbers.');
    }

    return args.reduce((a,b) => {
        return a + b;
    }, 0);

};
