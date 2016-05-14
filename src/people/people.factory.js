(function() {

    'use strict';

    angular
        .module('myApp')
        .factory('PeopleFactory', function(visitor) {
            return function PeopleFactory(name) {
                this.name = name;
                this.greet = function() {
                    if (visitor.country === 'UK') {
                        console.log('Good day to you, ', this.name + '.');
                    } else {
                        console.log('Hey, ', this.name + '!');
                    }
                };
            };
        });

    // function PeopleFactory() {

    // }

}());