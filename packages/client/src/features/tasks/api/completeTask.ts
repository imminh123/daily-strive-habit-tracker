import { api } from "@/utils/axios";
import { useMutation } from "react-query";

export const useCompleteTask = () =>
  useMutation({
    mutationKey: "completeTask",
    mutationFn: async (taskId: string) => {
      const { data } = await api.put(`/completeUserTask/${taskId}`);
      return data;
    },
  });
