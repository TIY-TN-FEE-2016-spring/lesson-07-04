import Action from 'candycane/dist/http/action';
import map from 'candycane-jsonapi-mapper';

@map(`branch`)
export default class BranchData extends Action {
  data() {
    // Get the id from the URL parameters
    const id = this.request.params.id;

    // Find the data-store from the application
    const ds = this.app.make(`store`);

    // Get the branch model
    const Branch = ds.model(`branch`);

    // Return the branch WHERE the `id` column is the same as `id`
    return Branch.where({id: id}).fetch({withRelated: `sales`});
  }
}
