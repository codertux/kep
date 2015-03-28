import Ember from 'ember';
import { raw } from 'ic-ajax';

export default Ember.Route.extend({
  actions: {
    deviseSendRecover: function(email) {
      var req = raw({
        type: 'POST',
        url: '/users/password',
        data: { "user": { "email": email } }
      });
      req.then(function(result){
        console.log('Response from Rails', result.response);
      },
      function(response) {
        console.error('There was a problem', response.jqXHR.responseText, response);
      }
      )
    }
  }
});
