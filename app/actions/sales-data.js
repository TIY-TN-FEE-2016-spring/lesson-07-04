import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`sale`)
export default class SaleData extends Action {
  data() {
    // Find the data-store from the application
    const ds = this.app.make(`store`);

    // Get the sale model
    const Sale = ds.model(`sale`);

    // Return the results of looking up all sales
    return Sale.fetchAll({withRelated: `branch`});
  }
}
