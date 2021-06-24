from https://www.valentinog.com/blog/jest/

npm test --coverage

OR

in package.json:
    "jest": {
        "collectCoverage": true,
        "coverageReporters": ["html"]       --> /coverage/index.html
    },

    OR
    "scripts": {
        ..."test": "jest -- coverage"
    },



