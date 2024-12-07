import * as z from "zod";

export const schemaUser = z.object({
	name: z.string().trim().min(6, { message: "Tên người cần tối thiểu 6 ký tự" }),
	old: z.number().min(1, { message: "Tuổi người cần tối thiểu từ 1" }),
	address: z.string().trim().optional(),
});
