import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    const { container } = render(<Home />);
    
    const heading = container.querySelector('#index-title');
    expect(heading).toBeInTheDocument();
    expect(heading?.textContent).toBe('DEMOCRACY');
  });

  it('renders the tagline', () => {
    render(<Home />);
    
    const tagline = screen.getByRole('heading', { name: /Weil deine Stimme zählt!/i });
    expect(tagline).toBeInTheDocument();
  });

  it('renders app store links', () => {
    render(<Home />);
    
    const appStoreLink = screen.getByLabelText(/App Store/i);
    const playStoreLink = screen.getByLabelText(/Google Play/i);
    
    expect(appStoreLink).toBeInTheDocument();
    expect(playStoreLink).toBeInTheDocument();
  });

  it('renders the features section', () => {
    render(<Home />);
    
    const featuresHeading = screen.getByRole('heading', { name: /Alle Funktionen von DEMOCRACY/i });
    expect(featuresHeading).toBeInTheDocument();
  });

  it('renders target audience section', () => {
    render(<Home />);
    
    const audienceHeading = screen.getByRole('heading', { name: /Für wen ist DEMOCRACY\?/i });
    expect(audienceHeading).toBeInTheDocument();
  });

  it('renders press section', () => {
    render(<Home />);
    
    const pressHeading = screen.getByRole('heading', { name: /bekannt aus/i });
    expect(pressHeading).toBeInTheDocument();
  });
});
