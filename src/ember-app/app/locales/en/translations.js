import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISRestoran2БроньLForm from './forms/i-i-s-restoran2-бронь-l';
import IISRestoran2ГостиLForm from './forms/i-i-s-restoran2-гости-l';
import IISRestoran2ДолжностьLForm from './forms/i-i-s-restoran2-должность-l';
import IISRestoran2РесторанLForm from './forms/i-i-s-restoran2-ресторан-l';
import IISRestoran2СкидкаLForm from './forms/i-i-s-restoran2-скидка-l';
import IISRestoran2СотрудникиLForm from './forms/i-i-s-restoran2-сотрудники-l';
import IISRestoran2СтолLForm from './forms/i-i-s-restoran2-стол-l';
import IISRestoran2БроньEForm from './forms/i-i-s-restoran2-бронь-e';
import IISRestoran2ГостиEForm from './forms/i-i-s-restoran2-гости-e';
import IISRestoran2ДолжностьEForm from './forms/i-i-s-restoran2-должность-e';
import IISRestoran2РесторанEForm from './forms/i-i-s-restoran2-ресторан-e';
import IISRestoran2СкидкаEForm from './forms/i-i-s-restoran2-скидка-e';
import IISRestoran2СотрудникиEForm from './forms/i-i-s-restoran2-сотрудники-e';
import IISRestoran2СтолEForm from './forms/i-i-s-restoran2-стол-e';
import IISRestoran2БроньModel from './models/i-i-s-restoran2-бронь';
import IISRestoran2ГостиModel from './models/i-i-s-restoran2-гости';
import IISRestoran2ДолжностьModel from './models/i-i-s-restoran2-должность';
import IISRestoran2ЗаписьModel from './models/i-i-s-restoran2-запись';
import IISRestoran2РесторанModel from './models/i-i-s-restoran2-ресторан';
import IISRestoran2СкидкаModel from './models/i-i-s-restoran2-скидка';
import IISRestoran2СотрудникиModel from './models/i-i-s-restoran2-сотрудники';
import IISRestoran2СтолModel from './models/i-i-s-restoran2-стол';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-restoran2-бронь': IISRestoran2БроньModel,
    'i-i-s-restoran2-гости': IISRestoran2ГостиModel,
    'i-i-s-restoran2-должность': IISRestoran2ДолжностьModel,
    'i-i-s-restoran2-запись': IISRestoran2ЗаписьModel,
    'i-i-s-restoran2-ресторан': IISRestoran2РесторанModel,
    'i-i-s-restoran2-скидка': IISRestoran2СкидкаModel,
    'i-i-s-restoran2-сотрудники': IISRestoran2СотрудникиModel,
    'i-i-s-restoran2-стол': IISRestoran2СтолModel
  },

  'application-name': 'Restoran2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Restoran2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Restoran2',
          title: 'Restoran2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        бронь: {
          caption: 'Бронь',
          title: 'Бронь',
          'i-i-s-restoran2-бронь-l': {
            caption: 'Бронь',
            title: ''
          }
        },
        'справочник-сотрудников': {
          caption: 'Справочник сотрудников',
          title: 'Справочник сотрудников',
          'i-i-s-restoran2-должность-l': {
            caption: 'Должность',
            title: 'Должность'
          },
          'i-i-s-restoran2-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          }
        },
        'справочник-гостей': {
          caption: 'Справочник гостей',
          title: 'Справочник гостей',
          'i-i-s-restoran2-скидка-l': {
            caption: 'Скидка',
            title: 'Скидка'
          },
          'i-i-s-restoran2-гости-l': {
            caption: 'Гости',
            title: 'Гости'
          }
        },
        'справочник-столов': {
          caption: 'Справочник столов',
          title: 'Справочник столов',
          'i-i-s-restoran2-стол-l': {
            caption: 'Стол',
            title: 'Стол'
          }
        },
        'справочник-ресторанов': {
          caption: 'Справочник ресторанов',
          title: 'Справочник ресторанов',
          'i-i-s-restoran2-ресторан-l': {
            caption: 'Ресторан',
            title: 'Ресторан'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-restoran2-бронь-l': IISRestoran2БроньLForm,
    'i-i-s-restoran2-гости-l': IISRestoran2ГостиLForm,
    'i-i-s-restoran2-должность-l': IISRestoran2ДолжностьLForm,
    'i-i-s-restoran2-ресторан-l': IISRestoran2РесторанLForm,
    'i-i-s-restoran2-скидка-l': IISRestoran2СкидкаLForm,
    'i-i-s-restoran2-сотрудники-l': IISRestoran2СотрудникиLForm,
    'i-i-s-restoran2-стол-l': IISRestoran2СтолLForm,
    'i-i-s-restoran2-бронь-e': IISRestoran2БроньEForm,
    'i-i-s-restoran2-гости-e': IISRestoran2ГостиEForm,
    'i-i-s-restoran2-должность-e': IISRestoran2ДолжностьEForm,
    'i-i-s-restoran2-ресторан-e': IISRestoran2РесторанEForm,
    'i-i-s-restoran2-скидка-e': IISRestoran2СкидкаEForm,
    'i-i-s-restoran2-сотрудники-e': IISRestoran2СотрудникиEForm,
    'i-i-s-restoran2-стол-e': IISRestoran2СтолEForm
  },

});

export default translations;
