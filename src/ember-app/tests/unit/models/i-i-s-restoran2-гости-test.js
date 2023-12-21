import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-restoran2-гости', 'Unit | Model | i-i-s-restoran2-гости', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
