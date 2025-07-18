import { act, renderHook } from "@testing-library/react";
import { useWindowSize } from "../useWindowSize";

describe("useWindowSize", () => {
  test("should change window size", () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);

    act(() => {
      window.innerWidth = 500;
      window.innerHeight = 400;
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(400);
  });
});
