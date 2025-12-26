import { test, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  test("list is present", () => {
    render(<Home />);

    const list = screen.findByRole("list");

    expect(list).toBeDefined();
  });
});
