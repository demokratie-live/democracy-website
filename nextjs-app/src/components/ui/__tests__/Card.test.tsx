import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';

describe('Card Components', () => {
  describe('Card', () => {
    it('should render children', () => {
      render(<Card>Card Content</Card>);
      expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    it('should apply default styles', () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('rounded-lg');
      expect(card).toHaveClass('border');
      expect(card).toHaveClass('bg-white');
      expect(card).toHaveClass('shadow-sm');
    });

    it('should merge custom className', () => {
      render(<Card className="custom-card" data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('custom-card');
      expect(card).toHaveClass('rounded-lg'); // default still present
    });
  });

  describe('CardHeader', () => {
    it('should render children', () => {
      render(<CardHeader>Header Content</CardHeader>);
      expect(screen.getByText('Header Content')).toBeInTheDocument();
    });

    it('should apply default padding', () => {
      render(<CardHeader data-testid="header">Content</CardHeader>);
      expect(screen.getByTestId('header')).toHaveClass('p-6');
    });
  });

  describe('CardTitle', () => {
    it('should render as h3 element', () => {
      render(<CardTitle>Title</CardTitle>);
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });

    it('should apply title styles', () => {
      render(<CardTitle data-testid="title">Title</CardTitle>);
      const title = screen.getByTestId('title');
      expect(title).toHaveClass('text-2xl');
      expect(title).toHaveClass('font-semibold');
    });
  });

  describe('CardDescription', () => {
    it('should render paragraph', () => {
      render(<CardDescription>Description text</CardDescription>);
      expect(screen.getByText('Description text')).toBeInTheDocument();
    });

    it('should apply muted text color', () => {
      render(<CardDescription data-testid="desc">Desc</CardDescription>);
      expect(screen.getByTestId('desc')).toHaveClass('text-gray-500');
    });
  });

  describe('CardContent', () => {
    it('should render children', () => {
      render(<CardContent>Main content goes here</CardContent>);
      expect(screen.getByText('Main content goes here')).toBeInTheDocument();
    });

    it('should apply padding without top padding', () => {
      render(<CardContent data-testid="content">Content</CardContent>);
      const content = screen.getByTestId('content');
      expect(content).toHaveClass('p-6');
      expect(content).toHaveClass('pt-0');
    });
  });

  describe('CardFooter', () => {
    it('should render children', () => {
      render(<CardFooter>Footer content</CardFooter>);
      expect(screen.getByText('Footer content')).toBeInTheDocument();
    });

    it('should apply flex styles', () => {
      render(<CardFooter data-testid="footer">Footer</CardFooter>);
      const footer = screen.getByTestId('footer');
      expect(footer).toHaveClass('flex');
      expect(footer).toHaveClass('items-center');
    });
  });

  describe('Full Card Composition', () => {
    it('should render complete card structure', () => {
      render(
        <Card data-testid="full-card">
          <CardHeader>
            <CardTitle>Test Card</CardTitle>
            <CardDescription>A description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content paragraph</p>
          </CardContent>
          <CardFooter>
            <button>Action</button>
          </CardFooter>
        </Card>
      );

      expect(screen.getByTestId('full-card')).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Test Card' })).toBeInTheDocument();
      expect(screen.getByText('A description')).toBeInTheDocument();
      expect(screen.getByText('Content paragraph')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });
  });
});
