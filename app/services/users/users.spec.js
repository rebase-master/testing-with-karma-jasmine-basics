// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('Users factory', function() {

    var Users;
    // The array of users our factory will provide us
    var userList = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
        },
        {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob'
        },
        {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo'
        },
        {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill'
        }
    ];

    //The single user we expect to receive when calling findById('2')
    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    };

    //before each test load our api.users module
    beforeEach(angular.mock.module('api.users'));

    //before each test set our injected Users factory(_Users_)
    beforeEach(inject(function (_Users_) {
        Users = _Users_;
    }));

    //A simple test to verify the Users factory exists
    it('should exist', function () {
        expect(Users).toBeDefined();
    });


    //A set of test for our Users.all() method
    describe('.all()', function () {
        //A simpel test to verify the method all exists
        it('should exist', function () {
            expect(Users.all).toBeDefined();
        });

        //A test to verify that calling all() returns the array of users
        it('should return a hard-coded list of users', function () {
            expect(Users.all()).toEqual(userList);
        });
    });


    //A set of test for our Users.findById() method
    describe('.findById()', function () {

        //A simple test to verify the method findById exists
        it('should exist', function () {
            expect(Users.findById).toBeDefined();
        });

        //A test to verify that calling findById() with an id, in this case '2' returns a single User
        it('should return one user object if it exists', function () {
            expect(Users.findById('2')).toEqual(singleUser);
        });

        //A test to verify that calling findById() with an id that does not exist
        it('should return undefined if the user cannot be found', function () {
            expect(Users.findById('ABC')).not.toBeDefined();
        });
    });

    // it('has a dummy spec to test 2 + 2', function() {
    //     // An intentionally failing test. No code within expect() will never equal 4.
    //     expect(2+2).toEqual(4);
    // });
});