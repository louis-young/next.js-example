import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextInput } from "..";

describe("<TextInput />", () => {
  it("renders the input with the specified attributes", () => {
    const ariaLabel = "__ARIA_LABEL__";
    const id = "__ID__";
    const onValueChange = jest.fn();
    const placeholder = "__PLACEHOLDER__";
    const type = "text";
    const value = "__VALUE__";

    render(
      <TextInput
        ariaLabel={ariaLabel}
        id={id}
        onValueChange={onValueChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    );

    const input = screen.getByLabelText(ariaLabel);

    expect(input).toHaveDisplayValue(value);
    expect(input).toHaveAttribute("aria-label", ariaLabel);
    expect(input).toHaveAttribute("id", id);
    expect(input).toHaveAttribute("placeholder", placeholder);
  });

  it.each(["A", "a", "1", "@"])(
    "calls `onValueChange` with the character that is typed into the input (`%s`)",
    async (character) => {
      const user = userEvent.setup();

      const ariaLabel = "__ARIA_LABEL__";
      const onValueChange = jest.fn();
      const type = "text";
      const value = "";

      render(
        <TextInput
          ariaLabel={ariaLabel}
          onValueChange={onValueChange}
          type={type}
          value={value}
        />
      );

      const input = screen.getByLabelText(ariaLabel);

      await user.type(input, character);

      expect(onValueChange).toHaveBeenCalledWith(character);
    }
  );

  it.each(["email", "password", "search", "tel", "text", "url"] as const)(
    "renders the input with the specified type (`%s`)",
    (type) => {
      const ariaLabel = "__ARIA_LABEL__";
      const onValueChange = jest.fn();
      const value = "__VALUE__";

      render(
        <TextInput
          ariaLabel={ariaLabel}
          onValueChange={onValueChange}
          type={type}
          value={value}
        />
      );

      const input = screen.getByLabelText(ariaLabel);

      expect(input).toHaveAttribute("type", type);
    }
  );

  it("renders the enabled input when `isDisabled` is `false`", () => {
    const ariaLabel = "__ARIA_LABEL__";
    const isDisabled = false;
    const onValueChange = jest.fn();
    const type = "text";
    const value = "__VALUE__";

    render(
      <TextInput
        ariaLabel={ariaLabel}
        isDisabled={isDisabled}
        onValueChange={onValueChange}
        type={type}
        value={value}
      />
    );

    const input = screen.getByLabelText(ariaLabel);

    expect(input).toBeEnabled();
  });

  it("renders the disabled input when `isDisabled` is `true`", () => {
    const ariaLabel = "__ARIA_LABEL__";
    const isDisabled = true;
    const onValueChange = jest.fn();
    const type = "text";
    const value = "__VALUE__";

    render(
      <TextInput
        ariaLabel={ariaLabel}
        isDisabled={isDisabled}
        onValueChange={onValueChange}
        type={type}
        value={value}
      />
    );

    const input = screen.getByLabelText(ariaLabel);

    expect(input).toBeDisabled();
  });

  it("renders the required input when `isRequired` is `true`", () => {
    const ariaLabel = "__ARIA_LABEL__";
    const isRequired = true;
    const onValueChange = jest.fn();
    const type = "text";
    const value = "__VALUE__";

    render(
      <TextInput
        ariaLabel={ariaLabel}
        isRequired={isRequired}
        onValueChange={onValueChange}
        type={type}
        value={value}
      />
    );

    const input = screen.getByLabelText(ariaLabel);

    expect(input).toBeRequired();
  });

  it("renders the optional input when `isRequired` is `false`", () => {
    const ariaLabel = "__ARIA_LABEL__";
    const isRequired = false;
    const onValueChange = jest.fn();
    const type = "text";
    const value = "__VALUE__";

    render(
      <TextInput
        ariaLabel={ariaLabel}
        isRequired={isRequired}
        onValueChange={onValueChange}
        type={type}
        value={value}
      />
    );

    const input = screen.getByLabelText(ariaLabel);

    expect(input).not.toBeRequired();
  });
});
