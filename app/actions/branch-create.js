import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`branch`)
export default class BranchData extends Action {
  data() {
    // Get JSON INPUT
    const input = this.request.body;

    // Pull attributes from the request object
    const branch_number = input.data.attributes[`branch-number`];
    const location = input.data.attributes.location;
    const attrs = {
      branch_number, location
    };

    // Find the data-store from the application
    const ds = this.app.make(`store`);

    // Get the branch model
    const Branch = ds.model(`branch`);

    // Create a new branch record and save it
    return new Branch(attrs).save();
  }
}
