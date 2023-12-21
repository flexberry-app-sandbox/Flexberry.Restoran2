import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодГостя: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  скидка: DS.belongsTo('i-i-s-restoran2-скидка', { inverse: null, async: false })
});

export let ValidationRules = {
  кодГостя: {
    descriptionKey: 'models.i-i-s-restoran2-гости.validations.кодГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-restoran2-гости.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-restoran2-гости.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  скидка: {
    descriptionKey: 'models.i-i-s-restoran2-гости.validations.скидка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостиE', 'i-i-s-restoran2-гости', {
    кодГостя: attr('Код гостя', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    скидка: belongsTo('i-i-s-restoran2-скидка', 'Скидка', {
      код: attr('Уникальный код скидки', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'код' })
  });

  modelClass.defineProjection('ГостиL', 'i-i-s-restoran2-гости', {
    кодГостя: attr('Код гостя', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    скидка: belongsTo('i-i-s-restoran2-скидка', 'Уникальный код скидки', {
      код: attr('Уникальный код скидки', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
