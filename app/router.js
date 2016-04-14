import Router from 'candycane/dist/http/router';

export default class AppRouter extends Router {
  /**
   * Here is the function that will allow you to register the routes for your application.
   * Use the `resource`, `get`, `post`, `put`, and `delete` methods to describe your API
   *
   * @return undefined
   */
  registerRoutes() {
    this.get(`/`, `version`);

    // Register routes for branch resources
    this.get(`/branches`, `branch-data`);
    this.get(`/branches/:id`, `branch-find`);
    this.post(`/branches`, `branch-create`);

    // Register routes for sales resource
    this.get(`/sales`, `sales-data`);
    this.get(`/sales/:id`, `sale-find`);
  }
}
