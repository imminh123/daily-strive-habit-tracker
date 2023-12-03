export const useAuth = () => {
  const user = localStorage.getItem("auth");
  if (user) return JSON.parse(user);
  else return null
};
