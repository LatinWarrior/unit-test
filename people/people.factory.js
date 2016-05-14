(function() {

    'use strict';

    angular
        .module('myApp')
        .factory('PeopleFactory', function() {
            return function PeopleFactory(name) {
                this.name = name;
            };
        });

    // function PeopleFactory() {

    // }

}());