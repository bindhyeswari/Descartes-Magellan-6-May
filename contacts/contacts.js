angular.module('myApp.contacts', []).controller('ContactsController', function ($scope, Contact) {
    $scope.message = 'Hello';

    $scope.contact = {};
    $scope.saveContact = function () {
        Contact.save($scope.contact);
        $scope.contact = {};
    };
    $scope.printList = function () {
        $scope.contacts = Contact.getAll();
    };
}).factory('Contact', function () {
    // This is a factory function that will return a service (singleton object)

    var contacts = []; // a private container to store the contacts array
    function uuid() {
        // a v4 compliant way of generating a uuid
        // refer: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
    return  {
        save: function (contact) {
            contact._id = uuid();
            contacts.push(contact);
        },
        getAll: function () {
            return contacts;
        }
    }
}).controller('MailController', function () {

});