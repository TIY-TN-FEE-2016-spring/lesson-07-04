import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`branch`)
export default class BranchData extends Action {
  data() {
    // Find the data-store from the application
    const ds = this.app.make(`store`);

    // Get the branch model
    const Branch = ds.model(`branch`);

    // Return the results of looking up all branches
    return Branch.fetchAll();
  }
}
