"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

// Schema for newsletter subscription
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const NewsletterSubscription = () => {
  // Variables -------------------------------------------
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Functions -------------------------------------------
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_7s9pjkr",
        "template_h8b5ufn",
        {
          contact_type: "Newsletter Subscription",
          message: `Email ${values.email} has subscribed to your newsletter!`,
          from_email: values.email,
        },
        "87EF_fFCzKYwUbIiV",
      );

      // Success response
      setSubmitStatus({
        success: true,
        message:
          "Subscribed successfully! Thank you for joining our newsletter.",
      });

      // Reset form on success
      form.reset();
    } catch (error) {
      console.error("Error subscribing:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to subscribe. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Effects -------------------------------------------
  useEffect(() => {
    setMounted(true);
  }, []);

  // Renders -------------------------------------------
  if (!mounted) return null;

  return (
    <div className="bg-[#292A32] rounded-[14px] p-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col xl:flex-row items-center justify-center xl:justify-between w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full xl:grow !block">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className="xl:grow !text-xl font-normal py-5 px-9 h-[68px] rounded-[14px] placeholder:text-xl"
                  />
                </FormControl>
                <FormMessage className="mt-2 text-red-400" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="brand"
            disabled={isSubmitting}
            className="mt-10 xl:mt-0 xl:ml-10 xl:shrink w-full xl:w-fit"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe to news"}
          </Button>
        </form>
      </Form>

      {submitStatus && (
        <div
          className={`mt-4 py-3 px-6 rounded-lg text-center ${
            submitStatus.success ? "bg-brand text-dark" : "bg-dark text-light"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;
