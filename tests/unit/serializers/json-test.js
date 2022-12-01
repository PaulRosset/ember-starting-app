import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | json', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('json');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('json', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
