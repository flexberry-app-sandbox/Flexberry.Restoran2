import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-restoran2-запись', 'Unit | Serializer | i-i-s-restoran2-запись', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-restoran2-запись',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-restoran2-статусы',

    'model:i-i-s-restoran2-бронь',
    'model:i-i-s-restoran2-гости',
    'model:i-i-s-restoran2-должность',
    'model:i-i-s-restoran2-запись',
    'model:i-i-s-restoran2-ресторан',
    'model:i-i-s-restoran2-скидка',
    'model:i-i-s-restoran2-сотрудники',
    'model:i-i-s-restoran2-стол',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
