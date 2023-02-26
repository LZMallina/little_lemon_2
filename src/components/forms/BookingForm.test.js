import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking Form", () => {
    test("User would not able to activate submit button if information not submitted", () => {
        const phone = '1234567890';
        const comment = 'drinks for everyone';
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const phoneInput = screen.getByLabelText(/phone/i);
    fireEvent.change(phoneInput, { target: { value: phone } });

    const textArea = screen.getByLabelText(/instructions/i);
    fireEvent.change(textArea, { target: { value: comment } });

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      phone,
      comment,
    });
  });

  test("User is able to submit the form if information provided if phone is at least 10 digits, without additional feedback", () => {
    const phone = "1234567890";
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const phoneInput = screen.getByLabelText(/phone/i);
    fireEvent.change(phoneInput, { target: { value: phone } });
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
  
    expect(handleSubmit).toHaveBeenCalledWith({
      phone,
      comment: ""
    });
  });
});