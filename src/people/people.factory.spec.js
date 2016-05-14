(function() {

    'use strict';

    describe('People', function() {

        var PeopleFactory, VisitorFactory;

        beforeEach(module('people'));
        beforeEach(module('visitor'));

        beforeEach(inject(function(_PeopleFactory_, _VisitorFactory_) {
            PeopleFactory = _PeopleFactory_;
            VisitorFactory = _VisitorFactory_;
        }));

        describe('Constructor', function() {

            it('assigns a name', function() {
                PeopleFactory.setPerson('Homer');
                expect(PeopleFactory.getPerson()).to.equal('Homer');
            });

            it('no assignment means name is undefined or null', function() {
                //PeopleFactory.setPerson('Homer');
                expect(PeopleFactory.getPerson()).to.be.null;
            });
        });

        describe('#greet', function() {

            it('greets UK visitors formally', function() {
                VisitorFactory.setCountry('UK');
                PeopleFactory.setPerson('Ian');
                expect(PeopleFactory.greet()).to.equal('Good day to you, Ian.');
            });

            it('greets other visitors informally', function() {
                VisitorFactory.setCountry('USA');
                PeopleFactory.setPerson('Homer');
                expect(PeopleFactory.greet()).to.equal('Hey, Homer!');
            });
        });
    });



}());