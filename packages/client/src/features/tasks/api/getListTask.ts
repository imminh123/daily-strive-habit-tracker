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

export const useSearchStaticTask = (q: string) =>
  useQuery({
    queryKey: ["useSearchStaticTask", q],
    queryFn: async () => {
      const { data } = await api.get(`/tasks`, { params: { q } });
      return data;
    },
    enabled: !!q
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

export const useGetOneUserTask = (taskId: string) =>
  useQuery({
    queryKey: "useGetOneUserTask",
    queryFn: async () => {
      const { data } = await api.get(`/userTasks/${taskId}`);
      return data;
    },
    enabled: !!taskId,
  });
