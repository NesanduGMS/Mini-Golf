import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useFormCompletion } from "@/context/FormCompletionContext";
import { useEffect } from "react";

const BookingForm1 = () => {
  const navigate = useNavigate();
  const { markFormAsCompleted, saveFormData, formData } = useFormCompletion();

  const form = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact_number: "",
    },
  });

  const { setValue } = form;

  useEffect(() => {
    if (formData.customer_details) {
      const savedData = formData.customer_details;
      for (let key in savedData) {
        if (savedData.hasOwnProperty(key)) {
          setValue(key, savedData[key]);
        }
      }
    }
  }, [formData.customer_details, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    saveFormData("customer_details", data);
    markFormAsCompleted("customer_details");
    navigate("/booknow/billing_details");
  };

  return (
    <Form {...form}>
      <div className="mt-10">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <h5>Customer Details</h5>
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="first_name"
              rules={{ required: "*First Name is required" }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input w-full"
                      {...field}
                      placeholder="First Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              rules={{ required: "*Last Name is required" }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input w-full"
                      {...field}
                      placeholder="Last Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            rules={{ required: "*Email is required" }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="shad-input"
                    {...field}
                    placeholder="Email Address"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact_number"
            rules={{ required: "*Contact Number is required" }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input max-w-[28rem]"
                    {...field}
                    placeholder="Contact Number (Mobile)"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="shad-button_primary px-36 py-7 mx-auto mt-8"
          >
            NEXT
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default BookingForm1;
