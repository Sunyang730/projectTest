var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
    });
  });
});

describe('the todo.util methods', function() {
  describe('The getUniqueId method', function(){
    it('Should return the lastId + 1', function(){
      var lastId = todo.util.getUniqueId();
      var next = todo.util.getUniqueId();
      expect(next).to.equal(2);
    });  
  });
  describe('The trimToDoName method', function(){
  
  });
  describe('The isValidTodoName method', function(){

  });
});