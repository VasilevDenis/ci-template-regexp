export default class Validator {
  validateUsername(username) {
    const regex = /^[a-zA-Z](?:[a-zA-Z_-]*[a-zA-Z]|[a-zA-Z_-]*\d{0,3}[a-zA-Z_-]*)[a-zA-Z]$/;
      return regex.test(username);
  }
}
