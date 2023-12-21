import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.бронь.caption'),
          title: i18n.t('forms.application.sitemap.бронь.title'),
          children: [{
            link: 'i-i-s-restoran2-бронь-l',
            caption: i18n.t('forms.application.sitemap.бронь.i-i-s-restoran2-бронь-l.caption'),
            title: i18n.t('forms.application.sitemap.бронь.i-i-s-restoran2-бронь-l.title'),
            icon: 'book',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-сотрудников.caption'),
          title: i18n.t('forms.application.sitemap.справочник-сотрудников.title'),
          children: [{
            link: 'i-i-s-restoran2-должность-l',
            caption: i18n.t('forms.application.sitemap.справочник-сотрудников.i-i-s-restoran2-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-сотрудников.i-i-s-restoran2-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-restoran2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.справочник-сотрудников.i-i-s-restoran2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-сотрудников.i-i-s-restoran2-сотрудники-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-гостей.caption'),
          title: i18n.t('forms.application.sitemap.справочник-гостей.title'),
          children: [{
            link: 'i-i-s-restoran2-скидка-l',
            caption: i18n.t('forms.application.sitemap.справочник-гостей.i-i-s-restoran2-скидка-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-гостей.i-i-s-restoran2-скидка-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-restoran2-гости-l',
            caption: i18n.t('forms.application.sitemap.справочник-гостей.i-i-s-restoran2-гости-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-гостей.i-i-s-restoran2-гости-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-столов.caption'),
          title: i18n.t('forms.application.sitemap.справочник-столов.title'),
          children: [{
            link: 'i-i-s-restoran2-стол-l',
            caption: i18n.t('forms.application.sitemap.справочник-столов.i-i-s-restoran2-стол-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-столов.i-i-s-restoran2-стол-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-ресторанов.caption'),
          title: i18n.t('forms.application.sitemap.справочник-ресторанов.title'),
          children: [{
            link: 'i-i-s-restoran2-ресторан-l',
            caption: i18n.t('forms.application.sitemap.справочник-ресторанов.i-i-s-restoran2-ресторан-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-ресторанов.i-i-s-restoran2-ресторан-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})