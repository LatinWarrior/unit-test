var calculator = {
    multiply: function(x, y) {
        return x * y;
    }
};

var multipleTest1 = function() {
    // Test
    var result = calculator.multiply(3, 3);

    // Assert result as expected.
    if (result === 9) {
        console.log('Test Passed');
    } else {
        console.log('Test Failed');
    }
};

multipleTest1();