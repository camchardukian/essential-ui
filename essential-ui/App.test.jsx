import { describe, it, expect } from 'vitest';
// @ TODO -- Add some real tests and get RTL and/or Cypress set up.
describe('something truthy and falsy', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });

  it('should be false', () => {
    expect(false).toBe(false);
  });
});
