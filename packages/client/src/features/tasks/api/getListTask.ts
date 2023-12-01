import { api } from "@/utils/axios";
import { useQuery } from "react-query";

export const useGetListTask = () =>
  useQuery({
    queryKey: "getListTask",
    queryFn: async () => {
      const { data } = await api.get("/userTasks");
      return data;
    },
  });
