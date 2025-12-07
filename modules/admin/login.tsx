"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { userLogin } from "@/services/user"
import { LocalStorageClass } from "@/utils/localstorage"
import { useState } from "react"
import { CreatePost } from "./create-post"
import Posts from "./posts"
import { CreateCategory } from "./create-category"
import Categories from "./categories"

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function Login() {
  const [currentToken, setCurrentToken] = useState("")

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const res = await userLogin(data)
    setCurrentToken(res.tokens.access.token)
    LocalStorageClass.setItem("token", res.tokens.access.token)
  }

  if (currentToken) {
    return (
      <Tabs defaultValue="create-post" className="w-full">
        <TabsList>
          <TabsTrigger value="create-post">Create Post</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="create-category">Create Category</TabsTrigger>
          <TabsTrigger value="list-category">List Category</TabsTrigger>
        </TabsList>
        <TabsContent value="create-post">
          <CreatePost />
        </TabsContent>
        <TabsContent value="list">
          <Posts />
        </TabsContent>
        <TabsContent value="create-category">
          <CreateCategory />
        </TabsContent>
        <TabsContent value="list-category">
          <Categories />
        </TabsContent>
      </Tabs>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  )
}
