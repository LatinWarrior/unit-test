(function() {

    'use strict';

    describe('People', function() {

        var PeopleFactory;

        beforeEach(module('myApp'));

        beforeEach(inject(function(_PeopleFactory_) {
            PeopleFactory = _PeopleFactory_;
        }));

        describe('Constructor', function() {

            it('assigns a name', function() {
                expect(new PeopleFactory('Homer')).to.have.property('name', 'Homer');
            });
        });
    });



}());