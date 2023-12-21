import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Restoran2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Restoran2',
          title: 'Restoran2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
