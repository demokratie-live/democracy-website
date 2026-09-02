import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@/components/ui/Input';

describe('Input Component', () => {
  describe('Rendering', () => {
    it('should render an input element', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render with placeholder', () => {
      render(<Input placeholder="Enter text..." />);
      expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
    });

    it('should render with label', () => {
      render(<Input label="Email" />);
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('should show required indicator when required', () => {
      render(<Input label="Email" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('should associate label with input via id', () => {
      render(<Input label="Username" id="username-input" />);
      const input = screen.getByRole('textbox');
      const label = screen.getByText('Username');
      expect(input).toHaveAttribute('id', 'username-input');
      expect(label).toHaveAttribute('for', 'username-input');
    });

    it('should generate unique id when not provided', () => {
      render(<Input label="Auto ID" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('id');
    });
  });

  describe('Types', () => {
    it('should render email type', () => {
      render(<Input type="email" data-testid="email-input" />);
      expect(screen.getByTestId('email-input')).toHaveAttribute('type', 'email');
    });

    it('should render password type', () => {
      render(<Input type="password" data-testid="password-input" />);
      expect(screen.getByTestId('password-input')).toHaveAttribute('type', 'password');
    });

    it('should render number type', () => {
      render(<Input type="number" data-testid="number-input" />);
      expect(screen.getByTestId('number-input')).toHaveAttribute('type', 'number');
    });
  });

  describe('Error State', () => {
    it('should display error message', () => {
      render(<Input error="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('should apply error styles when error is present', () => {
      render(<Input error="Error" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('border-red-500');
    });

    it('should not show error styling when no error', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).not.toHaveClass('border-red-500');
    });
  });

  describe('States', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<Input disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('should be read-only when readOnly prop is true', () => {
      render(<Input readOnly />);
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });
  });

  describe('Interactions', () => {
    it('should accept user input', async () => {
      const user = userEvent.setup();
      render(<Input />);
      
      const input = screen.getByRole('textbox');
      await user.type(input, 'Hello World');
      
      expect(input).toHaveValue('Hello World');
    });

    it('should call onChange when value changes', async () => {
      const user = userEvent.setup();
      let value = '';
      render(<Input onChange={(e) => (value = e.target.value)} />);
      
      await user.type(screen.getByRole('textbox'), 'Test');
      expect(value).toBe('Test');
    });

    it('should support controlled value', () => {
      const { rerender } = render(<Input value="initial" onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue('initial');
      
      rerender(<Input value="updated" onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue('updated');
    });
  });

  describe('Custom className', () => {
    it('should merge custom className with default styles', () => {
      render(<Input className="custom-input" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('custom-input');
      expect(input).toHaveClass('flex'); // default class should still be there
    });
  });

  describe('HTML Attributes', () => {
    it('should pass through data attributes', () => {
      render(<Input data-testid="my-input" />);
      expect(screen.getByTestId('my-input')).toBeInTheDocument();
    });

    it('should support min and max for number inputs', () => {
      render(<Input type="number" min={0} max={100} data-testid="num" />);
      const input = screen.getByTestId('num');
      expect(input).toHaveAttribute('min', '0');
      expect(input).toHaveAttribute('max', '100');
    });

    it('should support maxLength', () => {
      render(<Input maxLength={10} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '10');
    });
  });
});
