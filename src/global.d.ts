declare global {
  export type GlobalState = {
    theme: "dark" | "light";
    isLoggedIn: boolean;
    authToken: string | null;
  };
}

export {};
