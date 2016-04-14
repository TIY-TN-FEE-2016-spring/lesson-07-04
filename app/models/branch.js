export default {
  tableName: `branches`,

  sales() {
    return this.hasMany(`sale`);
  }
}
