(function() {

    'use strict';

    angular.module('myApp').controller('PeopleController', PeopleController);

    PeopleController.$inject = ['PeopleFactory'];

    function PeopleController(PeopleFactory) {
        var vm = this;

        vm.list = [];
        vm.name = '';
    }

}());