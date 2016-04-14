export default {
  tableName: `sales`,

  branch() {
    return this.belongsTo(`branch`);
  },
}
