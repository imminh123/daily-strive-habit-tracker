import { api } from "@/utils/axios";
import { useMutation } from "react-query";
import { z } from "zod";

export const CreateTaskSchema = z.object({
  email: z.string({ required_error: "Username is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),

  name: z.string({ required_error: "Username is required" }),
  description: z.string({ required_error: "Username is required" }),
  notificationToggle: z.boolean().default(true),
  notificationTime: z.date(),
  hour: z.number(),
  minute: z.number(),
});

export type CreateTask = z.infer<typeof CreateTaskSchema>;

export const useCreateTask = () =>
  useMutation({
    mutationKey: "useCreateTask",
    mutationFn: async (body: CreateTask) => {
      const { data } = await api.post(`/task`, body);
      return data;
    },
  });
