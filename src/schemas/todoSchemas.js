import * as z from "zod";

export const schemaTodo = z.object({
	title: z.string().trim().min(6, { message: "Tên việc làm cần tối thiểu 6 ký tự" }),
	description: z.string().trim().optional(), // Có thể bỏ trống
    // status
    // priority
    // priority
});
