import {
  defineNamespace,
  defineProjections,
  Model as СкидкаMixin
} from '../mixins/regenerated/models/i-i-s-restoran2-скидка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СкидкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
