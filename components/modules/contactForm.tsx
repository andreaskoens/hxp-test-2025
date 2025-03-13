"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import emailjs from "@emailjs/browser";

// Schemas -------------------------------------------
const formSchema = z.object({
  contactType: z.enum(["sayHi", "getQuote"], {
    required_error: "Please select a contact type.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  // Variables -------------------------------------------

  const [mounted, setMounted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactType: "sayHi",
      name: "",
      email: "",
      message: "",
    },
  });

  // Functions -------------------------------------------

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_7s9pjkr",
        "template_h8b5ufn",
        {
          contact_type:
            values.contactType === "sayHi" ? "Say Hi" : "Get a Quote",
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "87EF_fFCzKYwUbIiV",
      );

      // For demo, simulate API call
      // await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success response
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      });

      // Reset form on success
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
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
    <div className="bg-light py-14 px-14 md:px-20 lg:px-[6.5rem] rounded-[2.75rem] relative overflow-hidden">
      <div className="relative w-full lg:w-1/2 z-1">
        <div className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="contactType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem
                            value="sayHi"
                            id="sayHi"
                            className="
                              h-7 w-7 border border-dark bg-white rounded-full
                              relative flex items-center justify-center
                              after:content-[''] after:absolute after:h-4 after:w-4 after:rounded-full
                              after:bg-brand after:scale-0 data-[state=checked]:after:scale-100
                            "
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="sayHi"
                          className="text-base font-normal cursor-pointer"
                        >
                          Say Hi
                        </FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem
                            value="getQuote"
                            id="getQuote"
                            className="
                              h-7 w-7 border border-dark bg-white rounded-full
                              relative flex items-center justify-center
                              after:content-[''] after:absolute after:h-4 after:w-4 after:rounded-full
                              after:bg-brand after:scale-0 data-[state=checked]:after:scale-100
                            "
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="getQuote"
                          className="text-base font-normal cursor-pointer"
                        >
                          Get a Quote
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-normal">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="bg-white rounded-[0.825rem] border border-dark py-[1.125rem] px-[1.825rem] !text-lg placeholder:text-light-2 placeholder:text-lg h-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-normal">
                      Email*
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="bg-white rounded-[0.825rem] border border-dark py-[1.125rem] px-[1.825rem] !text-lg placeholder:text-light-2 placeholder:text-lg h-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-normal">
                      Message*
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        {...field}
                        className="min-h-[150px] bg-white rounded-[0.825rem] border border-dark py-[1.125rem] px-[1.825rem] !text-lg placeholder:text-light-2 placeholder:text-lg h-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {submitStatus && (
                <div
                  className={`py-4 px-8 rounded-lg ${submitStatus.success ? "bg-brand text-dark" : "bg-dark text-light"}`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Image
        src="/fig-contact.png"
        alt="Image"
        width={366}
        height={649}
        className="absolute top-1/2 right-0 -translate-y-1/2 max-h-[85%] w-auto hidden sm:block z-0"
      />
    </div>
  );
};

export default ContactForm;
