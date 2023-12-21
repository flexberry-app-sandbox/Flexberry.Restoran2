import { Serializer as СкидкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-restoran2-скидка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СкидкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
