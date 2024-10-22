import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useFormCompletion } from "@/context/FormCompletionContext";
import { useEffect } from "react";
import { downArrow } from "@/assets";
import CustomSelect from "./CustomSelect";
import PaymentDetails from "./PaymentDetails";

const BookingForm2 = () => {
  const navigate = useNavigate();
  const { markFormAsCompleted, saveFormData, formData } = useFormCompletion();

  const form = useForm({
    defaultValues: {
      address: "",
      city: "",
      state: "",
      postal_code: "",
      payment_method: "",
      invoice: "",
      message: "",
    },
  });

  const { setValue } = form;

  useEffect(() => {
    if (formData.billing_details) {
      const savedData = formData.billing_details;
      for (let key in savedData) {
        if (savedData.hasOwnProperty(key)) {
          setValue(key, savedData[key]);
        }
      }
    }
  }, [formData.billing_details, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    saveFormData("billing_details", data);
    markFormAsCompleted("billing_details");
    navigate("/booknow/event_details");
  };

  return (
    <div className="flex">
      <Form {...form}>
        <div className="mt-10 w-full">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-full mt-4"
          >
            <h5>Billing Details</h5>
            <div className="flex justify-between gap-6">
              <FormField
                control={form.control}
                name="address"
                rules={{ required: "*Address is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input w-full"
                        {...field}
                        placeholder="Address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                rules={{ required: "*City is required" }}
                render={({ field }) => (
                  <FormItem className="w-full max-w-[20rem]">
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input w-full"
                        {...field}
                        placeholder="City"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between gap-6">
              <FormField
                control={form.control}
                name="state"
                rules={{ required: "*State is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input w-full"
                        {...field}
                        placeholder="State"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postal_code"
                rules={{ required: "*Postal Code is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input w-full"
                        {...field}
                        placeholder="Postal Code"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between gap-6">
              <FormField
                name="payment_method"
                rules={{ required: "*Payment Method is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <CustomSelect
                        field={field}
                        options={["Credit Card", "PayPal", "Bank Transfer"]}
                        placeholder="Select Payment Method"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="invoice"
                rules={{ required: "*Invoice is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input w-full"
                        {...field}
                        placeholder="Invoice To*"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              rules={{ required: "*Message is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="shad-textarea custom-scrollbar"
                      {...field}
                      placeholder="Message"
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
    </div>
  );
};

export default BookingForm2;
