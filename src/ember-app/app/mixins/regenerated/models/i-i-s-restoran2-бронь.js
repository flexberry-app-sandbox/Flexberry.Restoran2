import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодБрони: DS.attr('number'),
  комментарий: DS.attr('string'),
  скидка: DS.attr('boolean'),
  ресторан: DS.belongsTo('i-i-s-restoran2-ресторан', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-restoran2-сотрудники', { inverse: null, async: false }),
  стол: DS.belongsTo('i-i-s-restoran2-стол', { inverse: null, async: false }),
  запись: DS.hasMany('i-i-s-restoran2-запись', { inverse: 'бронь', async: false })
});

export let ValidationRules = {
  кодБрони: {
    descriptionKey: 'models.i-i-s-restoran2-бронь.validations.кодБрони.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-restoran2-бронь.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  скидка: {
    descriptionKey: 'models.i-i-s-restoran2-бронь.validations.скидка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ресторан: {
    descriptionKey: 'models.i-i-s-restoran2-бронь.validations.ресторан.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-restoran2-бронь.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  стол: {
    descriptionKey: 'models.i-i-s-restoran2-бронь.validations.стол.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-restoran2-бронь.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БроньE', 'i-i-s-restoran2-бронь', {
    кодБрони: attr('Код брони', { index: 0 }),
    комментарий: attr('Комментарий', { index: 1 }),
    скидка: attr('Скидка', { index: 2 }),
    ресторан: belongsTo('i-i-s-restoran2-ресторан', 'Ресторан', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-restoran2-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    стол: belongsTo('i-i-s-restoran2-стол', 'Номер стол', {
      номерСтола: attr('Номер стола', { index: 8, hidden: true }),
      колвоМест: attr('Количество мест за столом', { index: 9 })
    }, { index: 7, displayMemberPath: 'номерСтола' }),
    запись: hasMany('i-i-s-restoran2-запись', 'Запись', {
      датаЗаписи: attr('Дата записи', { index: 0 }),
      время: attr('Время', { index: 1 }),
      гости: belongsTo('i-i-s-restoran2-гости', 'Гости', {
        фИО: attr('ФИО', { index: 3, hidden: true }),
        телефон: attr('Номер телефона гостя', { index: 4 }),
        скидка: belongsTo('i-i-s-restoran2-скидка', '', {
          код: attr('Уникальный код скидки клиента', { index: 5 }),
          процент: attr('Процент скидки', { index: 6 })
        }, { index: -1, hidden: true })
      }, { index: 2, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('БроньL', 'i-i-s-restoran2-бронь', {
    кодБрони: attr('Код брони', { index: 0 }),
    комментарий: attr('Комментарий', { index: 1 }),
    скидка: attr('Скидка', { index: 2 }),
    ресторан: belongsTo('i-i-s-restoran2-ресторан', 'Наименование ресторана', {
      наименование: attr('Наименование ресторана', { index: 3 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-restoran2-сотрудники', 'ФИО сотрудника', {
      фИО: attr('ФИО сотрудника', { index: 4 })
    }, { index: -1, hidden: true }),
    стол: belongsTo('i-i-s-restoran2-стол', 'Номер стола', {
      номерСтола: attr('Номер стола', { index: 5 }),
      колвоМест: attr('Количество мест за столом', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
