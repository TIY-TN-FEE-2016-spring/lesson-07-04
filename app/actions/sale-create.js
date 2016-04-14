import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`sale`)
export default class SaleCreate extends Action {
  data() {
    // Get JSON INPUT
    const input = this.request.body;

    // Pull attributes from the request object
    const gross_profit = input.data.attributes[`gross-profit`];
    const date = input.data.attributes.date;
    const branch_id = input.data.relationships.branch.data.id;

    const attrs = { gross_profit, date, branch_id };

    // Find the data-store from the application
    const ds = this.app.make(`store`);

    // Get the sale model
    const Sale = ds.model(`sale`);

    // Create a new sale record and save it
    return new Sale(attrs).save();
  }
}
