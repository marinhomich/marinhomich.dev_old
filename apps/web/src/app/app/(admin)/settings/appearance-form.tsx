"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@marinhomich/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@marinhomich/ui/form"
import { RadioGroup, RadioGroupItem } from "@marinhomich/ui/radio-group"
import { Loader2 } from "lucide-react"
import { useTheme } from "next-themes"
import { useForm } from "react-hook-form"
import * as z from "zod"

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
})

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

export function AppearanceForm({ data }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { setTheme } = useTheme()

  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: data,
  })

  function onSubmit(data: AppearanceFormValues) {
    setIsLoading(true)

    setTheme(data.theme)

    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Theme</FormLabel>
              <FormDescription>
                Select the theme for the dashboard.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid max-w-md grid-cols-2 gap-8 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="light" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Light
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="dark" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                      <div className="space-y-2 rounded-sm bg-zinc-950 p-2">
                        <div className="space-y-2 rounded-md bg-zinc-800 p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-zinc-400" />
                          <div className="h-2 w-[100px] rounded-lg bg-zinc-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-zinc-800 p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-zinc-400" />
                          <div className="h-2 w-[100px] rounded-lg bg-zinc-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-zinc-800 p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-zinc-400" />
                          <div className="h-2 w-[100px] rounded-lg bg-zinc-400" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Dark
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Update preferences
        </Button>
        <span className="sr-only">Submit</span>
      </form>
    </Form>
  )
}
