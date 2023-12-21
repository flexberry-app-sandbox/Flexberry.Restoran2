'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s restoran2 бронь l');

  (0, _qunit.test)('testing i-i-s-restoran2-бронь-l', function (assert) {
    var _this = this;

    visit('/i-i-s-restoran2-бронь-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s restoran2 гости l');

  (0, _qunit.test)('testing i-i-s-restoran2-гости-l', function (assert) {
    var _this = this;

    visit('/i-i-s-restoran2-гости-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s restoran2 должность l');

  (0, _qunit.test)('testing i-i-s-restoran2-должность-l', function (assert) {
    var _this = this;

    visit('/i-i-s-restoran2-должность-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s restoran2 ресторан l');

  (0, _qunit.test)('testing i-i-s-restoran2-ресторан-l', function (assert) {
    var _this = this;

    visit('/i-i-s-restoran2-ресторан-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s restoran2 скидка l');

  (0, _qunit.test)('testing i-i-s-restoran2-скидка-l', function (assert) {
    var _this = this;

    visit('/i-i-s-restoran2-скидка-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s restoran2 сотрудники l');

  (0, _qunit.test)('testing i-i-s-restoran2-сотрудники-l', function (assert) {
    var _this = this;

    visit('/i-i-s-restoran2-сотрудники-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s restoran2 стол l');

  (0, _qunit.test)('testing i-i-s-restoran2-стол-l', function (assert) {
    var _this = this;

    visit('/i-i-s-restoran2-стол-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-restoran2-\u0441\u0442\u0430\u0442\u0443\u0441\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-restoran2-\u0441\u0442\u0430\u0442\u0443\u0441\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-restoran2-\u0441\u0442\u0430\u0442\u0443\u0441\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-restoran2-\u0441\u0442\u0430\u0442\u0443\u0441\u044B.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-restoran2-\u0441\u0442\u043E\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-restoran2-\u0441\u0442\u043E\u043B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-бронь-e', 'Unit | Controller | i-i-s-restoran2-бронь-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-бронь-l', 'Unit | Controller | i-i-s-restoran2-бронь-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-гости-e', 'Unit | Controller | i-i-s-restoran2-гости-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-гости-l', 'Unit | Controller | i-i-s-restoran2-гости-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-должность-e', 'Unit | Controller | i-i-s-restoran2-должность-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-должность-l', 'Unit | Controller | i-i-s-restoran2-должность-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-ресторан-e', 'Unit | Controller | i-i-s-restoran2-ресторан-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-ресторан-l', 'Unit | Controller | i-i-s-restoran2-ресторан-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-скидка-e', 'Unit | Controller | i-i-s-restoran2-скидка-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-скидка-l', 'Unit | Controller | i-i-s-restoran2-скидка-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-сотрудники-e', 'Unit | Controller | i-i-s-restoran2-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-сотрудники-l', 'Unit | Controller | i-i-s-restoran2-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-стол-e', 'Unit | Controller | i-i-s-restoran2-стол-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-restoran2-стол-l', 'Unit | Controller | i-i-s-restoran2-стол-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-бронь', 'Unit | Model | i-i-s-restoran2-бронь', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-гости', 'Unit | Model | i-i-s-restoran2-гости', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-должность', 'Unit | Model | i-i-s-restoran2-должность', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-запись', 'Unit | Model | i-i-s-restoran2-запись', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-ресторан', 'Unit | Model | i-i-s-restoran2-ресторан', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-скидка', 'Unit | Model | i-i-s-restoran2-скидка', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-сотрудники', 'Unit | Model | i-i-s-restoran2-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-restoran2-\u0441\u0442\u043E\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-стол', 'Unit | Model | i-i-s-restoran2-стол', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-бронь-e', 'Unit | Route | i-i-s-restoran2-бронь-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-бронь-l', 'Unit | Route | i-i-s-restoran2-бронь-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-гости-e', 'Unit | Route | i-i-s-restoran2-гости-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-гости-l', 'Unit | Route | i-i-s-restoran2-гости-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-должность-e', 'Unit | Route | i-i-s-restoran2-должность-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-должность-l', 'Unit | Route | i-i-s-restoran2-должность-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-ресторан-e', 'Unit | Route | i-i-s-restoran2-ресторан-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-ресторан-l', 'Unit | Route | i-i-s-restoran2-ресторан-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-скидка-e', 'Unit | Route | i-i-s-restoran2-скидка-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-скидка-l', 'Unit | Route | i-i-s-restoran2-скидка-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-сотрудники-e', 'Unit | Route | i-i-s-restoran2-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-сотрудники-l', 'Unit | Route | i-i-s-restoran2-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-стол-e', 'Unit | Route | i-i-s-restoran2-стол-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-restoran2-\u0441\u0442\u043E\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-restoran2-стол-l', 'Unit | Route | i-i-s-restoran2-стол-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-restoran2-\u0431\u0440\u043E\u043D\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-бронь', 'Unit | Serializer | i-i-s-restoran2-бронь', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-restoran2-бронь', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-restoran2-статусы', 'model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-restoran2-\u0433\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-гости', 'Unit | Serializer | i-i-s-restoran2-гости', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-restoran2-гости', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-restoran2-статусы', 'model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-restoran2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-должность', 'Unit | Serializer | i-i-s-restoran2-должность', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-restoran2-должность', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-restoran2-статусы', 'model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-restoran2-\u0437\u0430\u043F\u0438\u0441\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-запись', 'Unit | Serializer | i-i-s-restoran2-запись', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-restoran2-запись', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-restoran2-статусы', 'model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-restoran2-\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-ресторан', 'Unit | Serializer | i-i-s-restoran2-ресторан', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-restoran2-ресторан', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-restoran2-статусы', 'model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-restoran2-\u0441\u043A\u0438\u0434\u043A\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-скидка', 'Unit | Serializer | i-i-s-restoran2-скидка', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-restoran2-скидка', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-restoran2-статусы', 'model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-restoran2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-сотрудники', 'Unit | Serializer | i-i-s-restoran2-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-restoran2-сотрудники', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-restoran2-статусы', 'model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-restoran2-\u0441\u0442\u043E\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-restoran2-стол', 'Unit | Serializer | i-i-s-restoran2-стол', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-restoran2-стол', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-restoran2-статусы', 'model:i-i-s-restoran2-бронь', 'model:i-i-s-restoran2-гости', 'model:i-i-s-restoran2-должность', 'model:i-i-s-restoran2-запись', 'model:i-i-s-restoran2-ресторан', 'model:i-i-s-restoran2-скидка', 'model:i-i-s-restoran2-сотрудники', 'model:i-i-s-restoran2-стол', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
