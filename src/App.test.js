import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("should render App properly", () => {
	render(<App />);
	screen.debug();
});

it("should render default elements", () => {
	render(<App />);
	expect(
		screen.getByText(/Learn to code by watching others/i)
	).toBeInTheDocument();
	expect(
		screen.getByText(
			/See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable./i
		)
	).toBeInTheDocument();
	expect(screen.getByText(/Try it free 7 days/i)).toBeInTheDocument();
	expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
	expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
	expect(screen.getByPlaceholderText(/Email Address/i)).toBeInTheDocument();
	expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
	expect(
		screen.getByRole("button", { name: /CLAIM YOUR FREE TRIAL/i })
	).toBeInTheDocument();
});

it("should allow change input element", () => {
	render(<App />);

	userEvent.type(screen.getByPlaceholderText(/First Name/i), "Acelya");
	userEvent.type(screen.getByPlaceholderText(/Last Name/i), "Vul");
	userEvent.type(
		screen.getByPlaceholderText(/Email Address/i),
		"acelyavuluvan@gmail.com"
	);
	userEvent.type(screen.getByPlaceholderText(/Password/i), "123456");
});

it("should show errors when input elements are empty after pressing button", () => {
	render(<App />);
	screen.getByRole("button", { name: /CLAIM YOUR FREE TRIAL/i }).click();
	expect(screen.getAllByText(/First Name cannot be empty/i)).toBeDefined();
	expect(screen.getAllByText(/Last Name cannot be empty/i)).toBeDefined();
	expect(screen.getAllByText(/Looks like this is not an email/i)).toBeDefined();
	expect(screen.getAllByText(/Password cannot be empty/i)).toBeDefined();
	screen.findByRole("img", { xmlns: "http://www.w3.org/2000/svg" });
});
