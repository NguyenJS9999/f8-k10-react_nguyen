import * as z from "zod";

export const userShemas = z.object({
  username: z.string().min(6, { message: "Username phải nhiều hơn 6 ký tự" }),
  email: z.string().email({ message: "email không hợp lệ" }),
  password: z.string().min(6, { message: "mật khẩu phải nhiều hơn 6 ký tự" }),
});