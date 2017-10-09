# Intro to Testing Lecture

Chai API/Docs: [http://chaijs.com/api/](http://chaijs.com/api/)

Mocha: [https://mochajs.org/#table-of-contents](https://mochajs.org/#table-of-contents)

Request: [https://github.com/request/request](https://github.com/request/request)

## Run Tests

```
$: mocha test/*.test.js
```
or in `package.json` include a npm test script:

```
  "scripts": {
    "test": "mocha test/*.test.js"
  },
```

and then run:

```
$: npm test
```

## Additional Resources
### Server
- [https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)

### Client Angular Testing (Not Covered in Lecture)
- [http://bendetat.com/karma-and-mocha-for-angular-testing.html](http://bendetat.com/karma-and-mocha-for-angular-testing.html)
- [https://docs.angularjs.org/guide/unit-testing](https://docs.angularjs.org/guide/unit-testing)
- [http://webdriver.io/](http://webdriver.io/)