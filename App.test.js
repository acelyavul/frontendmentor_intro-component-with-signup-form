import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

it("should render App properly", () => {
	render(<App />);
	const linkElement = screen.getByText(/Learn to code by watching others/i);
	expect(linkElement).toBeInTheDocument();
});

it("should render default elements", () => {
	const { getByText, getByPlaceholderText } = render(<App />);
	expect(getByText("Learn to code by watching others")).toBeDefined();
	getByText(
		"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."
	);
	getByText("Try it free 7 days");
	getByPlaceholderText("First Name");
	getByPlaceholderText("Last Name");
	getByPlaceholderText("Email Address");
	getByPlaceholderText("Password");
	getByText("CLAIM YOUR FREE TRIAL");
});

it("should allow change input element", () => {
	const { getByPlaceholderText } = render(<App />);

	const firstNameEl = getByPlaceholderText("First Name");
	fireEvent.change(firstNameEl, "Acelya");
	expect(firstNameEl).toBeDefined();

	const lastNameEl = getByPlaceholderText("Last Name");
	fireEvent.change(lastNameEl, "Vul");
	expect(lastNameEl).toBeDefined();

	const email = getByPlaceholderText("Email Address");
	fireEvent.change(email, "acelyavuluvan@gmail.com");
	expect(email).toBeDefined();

	const password = getByPlaceholderText("Password");
	fireEvent.change(password, "123456");
	expect(password).toBeDefined();
});
