import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginPage from './LoginScreen';

describe('LoginPage', () => {
  it('should allow a user to log in', () => {
    const mockOnLogin = jest.fn();
    const {getByTestId} = render(<LoginPage onLogin={mockOnLogin} />);

    fireEvent.changeText(getByTestId('usernameInput'), 'testuser');
    fireEvent.changeText(getByTestId('passwordInput'), 'password');
    fireEvent.press(getByTestId('loginButton'));

    expect(mockOnLogin).toHaveBeenCalledWith('testuser', 'password');
  });

  // Add more tests as needed, e.g., for input validation, displaying error messages, etc.

  it('displays an error message when trying to log in with empty fields', async () => {
    const {getByTestId, findByText} = render(<LoginPage onLogin={jest.fn()} />);
    fireEvent.press(getByTestId('loginButton'));

    const message = await findByText('Username and password are required');
    expect(message).toBeTruthy();
  });

  it('updates username and password fields on user input', () => {
    const {getByTestId} = render(<LoginPage onLogin={jest.fn()} />);

    const usernameInput = getByTestId('usernameInput');
    const passwordInput = getByTestId('passwordInput');

    fireEvent.changeText(usernameInput, 'user123');
    fireEvent.changeText(passwordInput, 'password');

    expect(usernameInput.props.value).toBe('user123');
    expect(passwordInput.props.value).toBe('password');
  });

  test('renders the login form correctly', () => {
    const {getByPlaceholderText, getByText} = render(
      <LoginPage onLogin={jest.fn()} />,
    );

    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy(); // Assuming your button text is "Login"
  });
});
