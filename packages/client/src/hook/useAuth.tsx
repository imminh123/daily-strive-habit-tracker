export const useAuth = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem("auth");
    if (user) return JSON.parse(user);
    else return null
  }
  return null
};
