import { api } from "@/utils/axios";
import { useMutation } from "react-query";
import { z } from "zod";

export const CreateTaskSchema = z.object({
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
      const { data } = await api.post(`/userTasks`, body);
      return data;
    },
  });
