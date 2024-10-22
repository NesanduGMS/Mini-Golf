import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useFormCompletion } from "@/context/FormCompletionContext";
import { useEffect } from "react";
import CustomSelect from "./CustomSelect";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const BookingForm3 = () => {
  const navigate = useNavigate();
  const { markFormAsCompleted, saveFormData, formData } = useFormCompletion();

  const form = useForm({
    defaultValues: {
      event_address: "",
      event_city: "",
      event_state: "",
      event_postal_code: "",
      date: "",
      start_time: "",
      end_time: "",
      crowd_type: "",
      event_type: "",
      golf_type: "",
      delivery: "",
      supervison: "",
    },
  });

  const { setValue } = form;

  useEffect(() => {
    if (formData.event_details) {
      const savedData = formData.event_details;
      for (let key in savedData) {
        if (savedData.hasOwnProperty(key)) {
          setValue(key, savedData[key]);
        }
      }
    }
  }, [formData.event_details, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    saveFormData("event_details", data);
    markFormAsCompleted("event_details");
    navigate("/booknow");
  };

  return (
    <div className="flex">
      <Form {...form}>
        <div className="mt-10 w-full">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-full mt-4"
          >
            <h5>Event Details</h5>
            <div className="flex justify-between gap-6">
              <FormField
                control={form.control}
                name="event_address"
                rules={{ required: "*Event Address is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input w-full"
                        {...field}
                        placeholder="Event Address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="event_city"
                rules={{ required: "*Event City is required" }}
                render={({ field }) => (
                  <FormItem className="w-full max-w-[20rem]">
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input w-full"
                        {...field}
                        placeholder="Event City"
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
                name="event_state"
                rules={{ required: "*Event State is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input w-full"
                        {...field}
                        placeholder="Event State"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="event_postal_code"
                rules={{ required: "*Event Postal Code is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input w-full"
                        {...field}
                        placeholder="Event Postal Code"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between gap-6 max-w-[50rem]">
              <FormField
                control={form.control}
                name="date"
                rules={{ required: "*Event Date is required" }}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[280px] pl-3 text-left font-normal shad-input",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Event Date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="start_time"
                rules={{ required: "*Start Time is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="time"
                        className="shad-input w-full"
                        {...field}
                        placeholder="Set Start Time"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="end_time"
                rules={{ required: "*End Time is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="time"
                        className="shad-input w-full"
                        {...field}
                        placeholder="Set End Time"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between gap-6 max-w-[45rem]">
              <FormField
                name="crowd_type"
                rules={{ required: "*Crowd Type is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <CustomSelect
                        field={field}
                        options={["Credit Card", "PayPal", "Bank Transfer"]}
                        placeholder="Crowd Type"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="event_type"
                rules={{ required: "*Event Type is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <CustomSelect
                        field={field}
                        options={["Credit Card", "PayPal", "Bank Transfer"]}
                        placeholder="Event Type"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="golf_type"
                rules={{ required: "*Golf Type is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <CustomSelect
                        field={field}
                        options={["Credit Card", "PayPal", "Bank Transfer"]}
                        placeholder="Golf Type"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between gap-6 max-w-[29.5rem]">
              <FormField
                name="delivery"
                rules={{ required: "*Delivery Type is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <CustomSelect
                        field={field}
                        options={["Credit Card", "PayPal", "Bank Transfer"]}
                        placeholder="Delivery"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="supervison"
                rules={{ required: "*Supervison is required" }}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <CustomSelect
                        field={field}
                        options={["Credit Card", "PayPal", "Bank Transfer"]}
                        placeholder="Supervison"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="shad-button_primary px-36 py-7 mx-auto mt-8"
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default BookingForm3;
