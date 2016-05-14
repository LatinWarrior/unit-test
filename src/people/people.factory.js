(function() {

    'use strict';

    angular
        .module('people')
        .factory('PeopleFactory', ['VisitorFactory', PeopleFactory]);

    function PeopleFactory(visitor) {

        var vm = this;

        vm.name = null;

        function setPerson(name) {
            console.log('In setPerson(name). name: ', name);
            vm.name = name;
        }

        function getPerson() {
            console.log('In getPerson(). vm.name: ', vm.name);
            return vm.name;
        }

        function greet() {
            console.log('visitor.getCountry(): ', visitor.getCountry());
            var message = null;

            if (visitor.getCountry() === 'UK') {
                message = 'Good day to you, ' + vm.name + '.';
                console.log(message);
            } else {
                message = 'Hey, ' + vm.name + '!';
                console.log(message);
            }

            return message;
        }

        return {
            setPerson: setPerson,
            getPerson: getPerson,
            greet: greet
        };
    }

}());