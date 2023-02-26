import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

test("User is able to submit the form if information provided if phone is at least 10 digits, without additional feedback", () => {
    const guest = "2 people";
    const handleSubmit = jest.fn();
    render(<BookingPage onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const guestInput = screen.getByLabelText(/guest/i);
    fireEvent.change(guestInput, { target: { value: guest } });
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
  
    expect(handleSubmit).toHaveBeenCalledWith({
      guest: ""
    });
  });

