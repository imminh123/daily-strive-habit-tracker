import { api } from "@/utils/axios";
import { useQuery } from "react-query";
import { z } from "zod";

export const useGetTaskLogs = (taskId: string) => {
  return useQuery({
    queryKey: "useGetTaskLogs",
    queryFn: async () => {
      const { data } = await api.get(`/logs/${taskId}`);
      return data;
    },
    enabled: !!taskId
  });
};
