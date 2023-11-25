import { SignUpInput } from "@/pages/signup";
import { api } from "@/utils/axios";
import { useMutation } from "react-query";

export const useRegister = () =>
  useMutation({
    mutationFn: (data: SignUpInput) => api.post("/register", data),
  });
