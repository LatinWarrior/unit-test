(function() {

    'use strict';

    describe('People', function() {

        var controller;

        beforeEach(module('myApp'));

        beforeEach(inject(function($controller) {
            controller = $controller('PeopleController', {

            });
        }));

        describe('Test runs', function(){
            it('test passes', function(){
                expect(true).to.equal(true);
            });
        });

        describe('Constructor', function() {
            it('assigns a name', function() {
                //expect(new PeopleController('Homer')).to.have.property('name', 'Homer');
            });
        });
    });

}());