import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
  renderTemplate: function() {
    this.render('fixer', {
      into: 'application'
    });
    this.render('fixer/navbar-fixer', {
      into: 'application',
      outlet: 'navbar'
    });
  }
});
