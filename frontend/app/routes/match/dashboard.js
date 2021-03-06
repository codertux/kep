import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import DS from 'ember-data';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  //model: function() {
  //  return Request.find();
  //}
  //renderTemplate: function(controller, model){
  //  //console.log(model.jobs.content);
  //  this.controller.get('jobs').reload();
  //},
  //setupController: function(controller, model){
  //  controller.set('jobs', this.store.find('jobs'));
  //  controller.set('requests', this.store.find('requests'));
  //}
  //,
  //model: function() {
  //  return Ember.RSVP.hash({
  //    jobs: this.store.fetchAll('job'),
  //    requests: this.store.fetchAll('request')
  //  });
  //}
  //,
  //afterModel: function(){
  //  this.model.fetch();
  //}
  renderTemplate: function() {
    this.render();
    this.render('jobs/sideroll', {
      outlet: 'rightside',
      into: 'match.dashboard',
      controller: 'jobs'
    });
    this.render('requests/sideroll', {
      outlet: 'leftside',
      into: 'match.dashboard',
      controller: 'requests'
    });
  },
});

