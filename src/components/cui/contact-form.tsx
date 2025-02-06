'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from '@/app/i18n/client';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trans } from 'react-i18next';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CATEGORY_ITEMS, CONTACT_DEFAULT_VALUES } from '@/consts/form';
import { contactFormSchema } from '@/lib/form-validator';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

type ContactFormProps = {
  lng: string;
  className?: string;
};

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ContactForm = ({ lng, className }: ContactFormProps) => {
  const { t } = useTranslation(lng);
  const { toast } = useToast();

  const initialValues = CONTACT_DEFAULT_VALUES;
  const form = useForm<z.infer<ReturnType<typeof contactFormSchema>>>({
    resolver: zodResolver(contactFormSchema(t)),
    defaultValues: initialValues,
  });
  const { errors, isSubmitting } = form.formState;
  const [submitMsg, setSubmitMsg] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | any>(null);

  const onSubmit = async (formData: z.infer<ReturnType<typeof contactFormSchema>>) => {
    try {
      /**
       * ...simulate a delay to show the loading spinner...
       */
      // await new Promise(resolve => setTimeout(resolve, 6000));

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData }),
      });
      const responseData = await response.json(); //* Parse the JSON response body

      if (response.ok) {
        //* Handle success (e.g., showing a success message or redirecting the user)
        setSubmitMsg(null);
        // onOpen();
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          // action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        //* Handle server-side validation errors or other issues
        setSubmitMsg(responseData.message);
        // onOpen();
        console.error('Form submission error');
      }
    } catch (error) {
      //* Handle network errors or unexpected issues
      console.error('An unexpected error occurred:', error);
    }
  };

  useGSAP(
    () => {
      gsap.fromTo(
        triggerRef.current,
        { x: 0, y: 100, autoAlpha: 0 },
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          duration: 2,
          ease: 'expo',
          overwrite: 'auto',
          scrollTrigger: {
            markers: false,
            start: 'top bottom',
            end: 'bottom top',
            trigger: triggerRef.current,
          },
        },
      );
    },
    { scope: triggerRef },
  );

  return (
    <>
      <Form {...form}>
        <form
          className={cn('', className)}
          onSubmit={form.handleSubmit(onSubmit)}
          ref={triggerRef}
        >
          <div className='col-span-full flex flex-col text-sm leading-snug border-b border-gray-900 pb-6 mb-16'>
            <span>
              <Trans i18nKey='contact-form-perface'></Trans>
            </span>
          </div>

          {/* category */}
          <FormField
            control={form.control}
            name='category'
            render={() => (
              <FormItem className='space-y-0 col-start-2 col-span-10 grid grid-cols-10 items-center py-5'>
                <div className='col-span-full 2xl:col-span-4 flex mb-2 2xl:mb-0'>
                  <span className='font-solway text-[8px] text-[#E8AE8D] mr-1'>※</span>
                  <FormLabel className='font-solway text-sm leading-snug'>
                    {t('contact-form-category')}
                  </FormLabel>
                </div>
                <div className='md:col-start-3 col-span-full 2xl:col-span-6 flex flex-col md:flex-row md:justify-between md:items-center gap-y-2 pl-4 md:pl-0'>
                  {CATEGORY_ITEMS.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='category'
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className='flex flex-row items-center space-x-2 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked: any) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value: any) => value !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className={errors.category && 'text-primary'}>
                              {t(`contact-form-category-items.${item.id}`)}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage className='md:col-start-3 col-span-full pl-4 md:pl-0' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='companyname'
            render={({ field }) => (
              <FormItem className='space-y-0 col-start-2 col-span-10 grid grid-cols-10 items-center py-5 border-t-[0.5px] border-gray-400'>
                <div className='col-span-full md:col-span-4 flex mb-2 2xl:mb-0'>
                  <span className='font-solway text-[8px] text-[#E8AE8D] mr-1'>※</span>
                  <FormLabel className='font-solway text-sm leading-snug'>
                    {t('contact-form-companyname')}
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    className='col-span-full md:col-span-6 h-fit px-4 py-3 text-sm border-gray-500'
                    placeholder={t('contact-form-placehodler1')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='md:col-start-5 2xl:col-start-3 col-span-full' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='space-y-0 col-start-2 col-span-10 grid grid-cols-10 items-center py-5 border-t-[0.5px] border-gray-400'>
                <div className='col-span-full md:col-span-4 flex mb-2 2xl:mb-0'>
                  <span className='font-solway text-[8px] text-[#E8AE8D] mr-1'>※</span>
                  <FormLabel className='font-solway text-sm leading-snug'>
                    {t('contact-form-username')}
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    className='col-span-full md:col-span-6 h-fit px-4 py-3 text-sm border-gray-500'
                    placeholder={t('contact-form-placehodler3')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='md:col-start-5 2xl:col-start-3 col-span-full' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='space-y-0 col-start-2 col-span-10 grid grid-cols-10 items-center py-5 border-t-[0.5px] border-gray-400'>
                <div className='col-span-full md:col-span-4 flex mb-2 2xl:mb-0'>
                  <span className='font-solway text-[8px] text-[#E8AE8D] mr-1'>※</span>
                  <FormLabel className='font-solway text-sm leading-snug'>
                    {t('contact-form-email')}
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    className='col-span-full md:col-span-6 h-fit px-4 py-3 text-sm border-gray-500'
                    placeholder={t('contact-form-placehodler4')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='md:col-start-5 2xl:col-start-3 col-span-full' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='contact'
            render={({ field }) => (
              <FormItem className='space-y-0 col-start-2 col-span-10 grid grid-cols-10 items-center py-5 border-t-[0.5px] border-gray-400'>
                <div className='col-span-full md:col-span-4 flex mb-2 2xl:mb-0'>
                  <span className='font-solway text-[8px] text-[#E8AE8D] mr-1'>※</span>
                  <FormLabel className='font-solway text-sm leading-snug'>
                    {t('contact-form-contact-number')}
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    className='col-span-full md:col-span-6 h-fit px-4 py-3 text-sm border-gray-500'
                    placeholder={t('contact-form-placehodler5')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='md:col-start-5 2xl:col-start-3 col-span-full' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='fax'
            render={({ field }) => (
              <FormItem className='space-y-0 col-start-2 col-span-10 grid grid-cols-10 items-center py-5 border-t-[0.5px] border-gray-400'>
                <div className='col-span-full md:col-span-4 flex mb-2 2xl:mb-0'>
                  <span
                    className='hidden md:block font-solway text-[8px] text-[#E8AE8D] mr-1 opacity-0'
                    aria-label='hidden'
                  >
                    ※
                  </span>
                  <FormLabel className='font-solway text-sm leading-snug'>
                    {t('contact-form-fax-number')}
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    className='col-span-full md:col-span-6 h-fit px-4 py-3 text-sm border-gray-500'
                    placeholder={t('contact-form-placehodler6')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='md:col-start-5 2xl:col-start-3 col-span-full' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem className='space-y-0 col-start-2 col-span-10 grid grid-cols-10 items-center py-5 border-t-[0.5px] border-gray-400'>
                <div className='col-span-full md:col-span-4 flex mb-2 2xl:mb-0'>
                  <span
                    className='hidden md:block font-solway text-[8px] text-[#E8AE8D] mr-1 opacity-0'
                    aria-label='hidden'
                  >
                    ※
                  </span>
                  <FormLabel className='font-solway text-sm leading-snug'>
                    {t('contact-form-address')}
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    className='col-span-full md:col-span-6 h-fit px-4 py-3 text-sm border-gray-500'
                    placeholder={t('contact-form-placehodler7')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='md:col-start-5 2xl:col-start-3 col-span-full' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='inquiry'
            render={({ field }) => (
              <FormItem className='space-y-0 col-start-2 col-span-10 grid grid-cols-10 items-start py-5 border-t-[0.5px] border-gray-400'>
                <div className='col-span-full md:col-span-4 flex mb-2 2xl:mb-0'>
                  <span className='font-solway text-[8px] text-[#E8AE8D] mr-1'>※</span>
                  <FormLabel className='font-solway text-sm leading-snug'>
                    {t('contact-form-inquiry')}
                  </FormLabel>
                </div>
                <FormControl>
                  <Textarea
                    className='resize-none min-h-[120px] col-span-full md:col-span-6 h-fit px-4 py-3 text-sm border-gray-500'
                    placeholder={t('contact-form-placehodler8')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='md:col-start-5 2xl:col-start-3 col-span-full' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='consent'
            render={({ field }) => (
              <FormItem className='space-y-0 col-start-2 col-span-10'>
                <div className='flex flex-row gap-x-4 items-start py-5'>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormLabel className={errors.consent && 'text-primary'}>
                      {t('contact-form-consent')}
                    </FormLabel>
                    <FormMessage className='hidden md:block' />
                  </div>
                </div>
                <FormMessage className='block md:hidden' />
              </FormItem>
            )}
          />
          <Button
            disabled={isSubmitting}
            variant={'outline'}
            type='submit'
            className='w-fit h-12 mx-auto col-start-2 col-span-10 font-solway text-base px-8 py-4 mt-12 rounded-lg border-gray-900'
          >
            {isSubmitting && ( // Show a spinner if the form is submitting
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            )}
            {t('contact-form-submit')}
          </Button>

          {/* <Button
            variant='outline'
            onClick={() => {
              toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
                action: <ToastAction altText='Try again'>Try again</ToastAction>,
              });
            }}
          >
            Show Toast
          </Button>
          <Button
            variant='outline'
            onClick={() => {
              toast({
                variant: 'default',
                title: 'Thank you for your submission!',
                description: 'We will get back to you as soon as possible.',
              });
            }}
          >
            Show Toast
          </Button> */}
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
