import { describe, it, expect } from 'vitest';
import {
  emailSchema,
  contactFormSchema,
  subscribeSchema,
  betaRegistrationSchema,
} from '@/lib/validation';

describe('emailSchema', () => {
  it('should validate correct email addresses', () => {
    expect(() => emailSchema.parse('test@example.com')).not.toThrow();
    expect(() => emailSchema.parse('user.name@domain.de')).not.toThrow();
    expect(() => emailSchema.parse('a@b.co')).not.toThrow();
  });

  it('should reject invalid email addresses', () => {
    expect(() => emailSchema.parse('invalid')).toThrow();
    expect(() => emailSchema.parse('no@domain')).toThrow();
    expect(() => emailSchema.parse('@nodomain.com')).toThrow();
    expect(() => emailSchema.parse('spaces in@email.com')).toThrow();
  });

  it('should reject empty strings', () => {
    expect(() => emailSchema.parse('')).toThrow();
  });
});

describe('contactFormSchema', () => {
  const validContact = {
    type: 'contact' as const,
    email: 'test@example.com',
    message: 'Test message',
  };

  it('should validate correct contact form data', () => {
    expect(() => contactFormSchema.parse(validContact)).not.toThrow();
  });

  it('should accept all contact types', () => {
    expect(() => contactFormSchema.parse({ ...validContact, type: 'contact' })).not.toThrow();
    expect(() => contactFormSchema.parse({ ...validContact, type: 'bugreport' })).not.toThrow();
    expect(() => contactFormSchema.parse({ ...validContact, type: 'volunteer' })).not.toThrow();
  });

  it('should reject invalid contact type', () => {
    expect(() => contactFormSchema.parse({ ...validContact, type: 'invalid' })).toThrow();
  });

  it('should accept optional name fields', () => {
    const withNames = {
      ...validContact,
      vorname: 'Max',
      nachname: 'Mustermann',
      name: 'Max Mustermann',
    };
    expect(() => contactFormSchema.parse(withNames)).not.toThrow();
  });

  it('should reject empty message', () => {
    expect(() => contactFormSchema.parse({ ...validContact, message: '' })).toThrow();
  });

  it('should reject invalid email', () => {
    expect(() => contactFormSchema.parse({ ...validContact, email: 'invalid' })).toThrow();
  });
});

describe('subscribeSchema', () => {
  it('should validate correct subscription data', () => {
    expect(() => subscribeSchema.parse({ email: 'subscriber@test.de' })).not.toThrow();
  });

  it('should reject missing email', () => {
    expect(() => subscribeSchema.parse({})).toThrow();
  });

  it('should reject invalid email', () => {
    expect(() => subscribeSchema.parse({ email: 'not-an-email' })).toThrow();
  });
});

describe('betaRegistrationSchema', () => {
  const validRegistration = {
    ios: true,
    android: false,
    email: 'beta@test.com',
    code: 'BETA2024',
    newsletter: true,
  };

  it('should validate correct beta registration', () => {
    expect(() => betaRegistrationSchema.parse(validRegistration)).not.toThrow();
  });

  it('should require all boolean fields', () => {
    expect(() =>
      betaRegistrationSchema.parse({
        email: 'beta@test.com',
        code: 'BETA',
      })
    ).toThrow();
  });

  it('should validate email format', () => {
    expect(() =>
      betaRegistrationSchema.parse({
        ...validRegistration,
        email: 'invalid',
      })
    ).toThrow();
  });

  it('should require code', () => {
    const withoutCode = { ...validRegistration };
    // @ts-expect-error - Testing missing required field
    delete withoutCode.code;
    expect(() => betaRegistrationSchema.parse(withoutCode)).toThrow();
  });

  it('should accept both platforms selected', () => {
    expect(() =>
      betaRegistrationSchema.parse({
        ...validRegistration,
        ios: true,
        android: true,
      })
    ).not.toThrow();
  });

  it('should accept no platforms selected', () => {
    expect(() =>
      betaRegistrationSchema.parse({
        ...validRegistration,
        ios: false,
        android: false,
      })
    ).not.toThrow();
  });
});
