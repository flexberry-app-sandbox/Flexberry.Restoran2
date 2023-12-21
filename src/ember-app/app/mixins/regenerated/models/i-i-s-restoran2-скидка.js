import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  процент: DS.attr('number')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-restoran2-скидка.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  процент: {
    descriptionKey: 'models.i-i-s-restoran2-скидка.validations.процент.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкидкаE', 'i-i-s-restoran2-скидка', {
    код: attr('Код', { index: 0 }),
    процент: attr('Процент', { index: 1 })
  });

  modelClass.defineProjection('СкидкаL', 'i-i-s-restoran2-скидка', {
    код: attr('Код', { index: 0 }),
    процент: attr('Процент', { index: 1 })
  });
};
