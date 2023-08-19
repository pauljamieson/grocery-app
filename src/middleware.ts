export { default } from "next-auth/middleware";

export const config = { matcher: ["/lists", "/profile", "/list/create"] };
