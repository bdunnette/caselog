Router.configure({
  layoutTemplate: 'layout'
});
    
  Router.map(function() {
  this.route('cases', {
    path: '/',
    data: function() { 
        return Cases.find();
    }
  });
  this.route('case', {
    path: '/case/:_id',
    waitOn: function () {
      var caseId = this.params._id;
      return Meteor.subscribe('cases', caseId);
    },
    data: function () {
      _id = this.params._id;
      var thisCase = Cases.findOne({_id: this.params._id});
      return thisCase;
    },
  });
});