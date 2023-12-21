import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьMixin
} from '../mixins/regenerated/models/i-i-s-restoran2-запись';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
