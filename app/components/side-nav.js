import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    return $(".button-collapse").sideNav();
  }
});
