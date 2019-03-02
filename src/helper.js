export default {
  toTitleCase(str) {
    /**
     * https://stackoverflow.com/a/196991
     * Converte string pra formato 'Title Case'
     *
     * @returns String
     */
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
};