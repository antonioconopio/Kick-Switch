"use client";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FileUpload } from "./ui/file-upload";
import { Textarea } from "@/components/ui/textarea";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { refresh } from "@/state/mylisting/mylistingState";
import { RootState } from "@/state/store";
import axios from "axios";

const formSchema = z.object({
  title: z.string().max(100),
  photos: z.array(z.instanceof(File)).max(5),
  description: z.string().max(255),
  price: z.number().min(0),
  condition: z.string(),
  method: z.string(),
});

interface AddListingProps {
  setAddListing: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddListing: React.FC<AddListingProps> = ({ setAddListing }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const listingsModified = useSelector((state: RootState) => state.mylisting);
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  const conditions = [
    {
      label: "New",
      value: "new",
    },
    {
      label: "Like new",
      value: "like-new",
    },
    {
      label: "Used",
      value: "used",
    },
  ] as const;

  const methods = [
    {
      label: "Ship",
      value: "ship",
    },
    {
      label: "Meetup",
      value: "meetup",
    },
    {
      label: "Ship or Meetup",
      value: "ship-or-meetup",
    },
  ] as const;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await Promise.all(
      values.photos.map(async (photo) => {
        const formData = new FormData();
        formData.append("image", photo);

        try {
          const response = await axios.post(
            "http://localhost:8800/api/upload",
            formData,
            {
              headers: {
                Authorization: `Bearer ${user.token}`, // Replace with your token
                "Content-Type": "multipart/form-data",
              },
            }
          );

          
        } catch (error) {
          console.error("Form submission error", error);
        }
      })
    );

    const photosJsonArray = values.photos.map((file) =>
      JSON.stringify({
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
      })
    );

    const listing = {
      title: values.title,
      photos: photosJsonArray,
      description: values.description,
      price: values.price,
      condition: values.condition,
      method: values.method,
      location: "toronto",
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/api/listings",
        listing,
        {
          headers: {
            Authorization: `Bearer ${user.token}`, // Replace with your token
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(refresh());
      setAddListing(false);
      console.log();

      console.log(listing);
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  return (
    <div>
      <p className="text-gray-400">Kickswitch</p>
      <p className="font-semibold">Add A Listing</p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add Photos</FormLabel>
                <FormControl>
                  <FileUpload
                    value={field.value || []}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>Select a file to upload.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Price"
                    type="number"
                    {...field}
                    onChange={(e) => {
                      // Convert the string input to a number before saving it in the form state
                      field.onChange(
                        e.target.value ? parseFloat(e.target.value) : undefined
                      );
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Condition</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? conditions.find(
                              (condition) => condition.value === field.value
                            )?.label
                          : "Select condition"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandList>
                        <CommandEmpty>No condition found.</CommandEmpty>
                        <CommandGroup>
                          {conditions.map((condition) => (
                            <CommandItem
                              value={condition.label}
                              key={condition.value}
                              onSelect={() => {
                                form.setValue("condition", condition.value);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  condition.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {condition.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Sell Method</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? methods.find(
                              (method) => method.value === field.value
                            )?.label
                          : "Select method"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandList>
                        <CommandEmpty>No method found.</CommandEmpty>
                        <CommandGroup>
                          {methods.map((method) => (
                            <CommandItem
                              value={method.label}
                              key={method.value}
                              onSelect={() => {
                                form.setValue("method", method.value);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  method.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {method.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddListing;
