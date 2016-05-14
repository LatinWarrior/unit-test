(function() {

    'use strict';

    describe('People', function() {

        var PeopleFactory, visitor;

        beforeEach(module('myApp'));

        beforeEach(module(function($provide) {
            visitor = {};
            $provide.value('visitor', visitor);
        }));

        beforeEach(inject(function(_PeopleFactory_) {
            PeopleFactory = _PeopleFactory_;
        }));

        describe('Constructor', function() {

            it('assigns a name', function() {
                expect(new PeopleFactory('Homer')).to.have.property('name', 'Homer');
            });
        });

        describe('#greet', function() {

            it('greets UK visitors formally', function() {
                visitor.country = 'UK';
                expect(new PeopleFactory('Ian').greet()).to.equal('Good day to you, Ian.');
            });

            it('greets other visitors informally', function() {
                visitor.country = 'USA';
                expect(new PeopleFactory('Homer').greet()).to.equal('Hey, Homer');
            });
        });
    });



}());