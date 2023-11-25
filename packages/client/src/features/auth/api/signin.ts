import { api } from "@/utils/axios";
import { useMutation } from "react-query";

interface ISignIn {
  email: string;
  password: string;
}

export const useSignIn = () =>
  useMutation({
    mutationKey: 'signin',
    mutationFn: (data: ISignIn) => api.post("/signin", data),
  });
