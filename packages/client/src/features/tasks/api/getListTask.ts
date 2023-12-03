import { api } from "@/utils/axios";
import { useQuery } from "react-query";

export const useGetListTask = () =>
  useQuery({
    queryKey: "useGetListTask",
    queryFn: async () => {
      const { data } = await api.get("/userTasks");
      return data;
    },
  });

export const useGetListStaticTask = (topicId: string) =>
  useQuery({
    queryKey: "useGetListStaticTask",
    queryFn: async () => {
      const { data } = await api.get(`/tasks`, { params: { topicId } });
      return data;
    },
    enabled: !!topicId,
  });

export const useGetOneTask = (topicId: string) =>
  useQuery({
    queryKey: "useGetOneTask",
    queryFn: async () => {
      const { data } = await api.get(`/tasks/${topicId}`);
      return data;
    },
    enabled: !!topicId,
  });
