import Validator from '../Validator';

describe('Validator Class', () => {
  const validator = new Validator();

  test('Valid usernames should pass validation', () => {
      expect(validator.validateUsername('john_doe123s')).toBe(true);
      expect(validator.validateUsername('alice-12h')).toBe(true);
  });

  test('Usernames with more than 3 consecutive digits should fail validation', () => {
      expect(validator.validateUsername('user1234user')).toBe(false);
  });

  test('Usernames starting or ending with restricted characters should fail validation', () => {
      expect(validator.validateUsername('-username-')).toBe(false);
      expect(validator.validateUsername('_username_')).toBe(false);
      expect(validator.validateUsername('1username')).toBe(false);
      expect(validator.validateUsername('username7')).toBe(false);
  });
});
