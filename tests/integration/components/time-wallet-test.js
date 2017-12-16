import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('time-wallet', 'Integration | Component | time wallet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{time-wallet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#time-wallet}}
      template block text
    {{/time-wallet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
