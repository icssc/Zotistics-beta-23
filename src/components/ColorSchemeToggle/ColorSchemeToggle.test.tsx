import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ColorSchemeContextProvider from "src/contexts/colorSchemeToggle/ColorSchemeContextProvider";

describe("color scheme toggle", () => {
  beforeEach(() => {
    const ColorSchemeToggle = require("./colorSchemeToggle").default;

    render(
      <ColorSchemeContextProvider initialValue="dark">
        <ColorSchemeToggle />
      </ColorSchemeContextProvider>
    );
  });

  it("defaults to dark mode", () => {
    const colorSchemeButton = screen.getByRole("button", {
      name: /disable dark mode/i,
    });

    expect(colorSchemeButton).toBeInTheDocument();
  });

  it("toggles color scheme when clicked", () => {
    const colorSchemeButton = screen.getByRole("button", {
      name: /dark mode$/i,
    });

    userEvent.click(colorSchemeButton);

    expect(
      screen.getByRole("button", {
        name: /^enable/i,
      })
    ).toBeInTheDocument();
  });
});
