import * as z from 'zod';

import type { TFunction } from 'i18next';

export const contactFormSchema = (t: TFunction) =>
  z.object({
    category: z
      .array(z.string())
      .refine((value) => value.some((item) => item), t('contact-form-category-validate')),
    companyname: z
      .string({
        required_error: t('contact-form-companyname-form-error-required'),
      })
      .min(2, t('contact-form-companyname-min-validate'))
      .max(50, t('contact-form-companyname-max-validate')),
    username: z
      .string()
      .min(2, t('contact-form-username-min-validate'))
      .max(50, t('contact-form-username-max-validate')),
    email: z.string().email(t('contact-form-email-validate')),
    contact: z.string().regex(/^\+\d{1,14}$/, t('contact-form-contact-number-validate')), // temporary using regex, only numbers
    fax: z
      .string()
      .regex(/^\+\d{1,14}$/, t('contact-form-fax-number-validate'))
      .or(z.literal(''))
      .optional(), // temporary using regex, only numbers
    address: z
      .string()
      .min(2, t('contact-form-address-validate'))
      .or(z.literal(''))
      .optional(),
    inquiry: z
      .string()
      .min(20, t('contact-form-inquiry-min-validate'))
      .max(400, t('contact-form-inquiry-max-validate')),
    consent: z
      .boolean()
      .refine((val) => val === true, t('contact-form-consent-validate')),
  });
