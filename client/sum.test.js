import { afterEach, describe, expect, it, vi } from "vitest";
import sum from "./sum";

const mockFn = vi.fn();

describe("#sum", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("2 + 3 = 10", () => {
    mockFn();
    expect(sum(2, 3)).toBe(5);
  });

  it("return same number with one number", () => {
    expect(sum(3)).toBe(3);
  });

  it("return sum with multiple numbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
