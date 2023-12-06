import { api } from "@/utils/axios";
import { useMutation, useQueryClient } from "react-query";

export const useCompleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: "completeTask",
    mutationFn: async (taskId: string) => {
      const { data } = await api.put(`/completeUserTask/${taskId}`);
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries("useGetListTask"),
  });
};
