import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });

  it('should be false', () => {
    expect(false).toBe(false);
  });
});
