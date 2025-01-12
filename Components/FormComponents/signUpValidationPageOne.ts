import { z } from "zod";
import { userData } from "@/userData";

export const signUpSchemaPageOne = z
  .object({
    email: z.string(),
    password: z
      .string()
      .min(8, { message: "يجب أن تتضمن كلمة المرور ثمان خانات" })
      .regex(/[A-Z]/, { message: "يجب أن تحتوي كلمة المرور على حرف كبير" })
      .regex(/[0-9]/, { message: "يجب أن تحتوي كلمة المرور على رقم" })
      .regex(/[!@#$%^&*()_+=[\]{}|;:,.<>?]/, {
        message: "يجب أن تحتوي كلمة المرور على حرف خاص",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمات المرور غير متطابقة. يرجى المحاولة مرة أخرى",
    path: ["confirmPassword"],
  })
  .refine(
    (data) =>
      userData.find((user) => user.email === data.email)?.email !== data.email,
    {
      message:
        "عنوان البريد الإلكترونى هذا مسجل بالفعل. حاول تسجيل الدخول باستخدام بريدًا إلكترونيًا مختلفًا",
      path: ["email"],
    }
  );

export type SignUpTypePageOne = z.infer<typeof signUpSchemaPageOne>;

export const signUpSchemaPageTwo = z.object({
  userName: z
    .string()
    .min(1, { message: "اسم المستخدم هذا مأخوذ بالفعل. الرجاء اختيار آخر" }),
  firstName: z.string().min(1, { message: "الرجاء إدخال اسمك الأول" }),
  lastName: z
    .string()
    .min(1, { message: "لا يمكن أن يحتوي اسم العائلة على أرقام أو أحرف خاصة" }),
});

export type SignUpTypePageTwo = z.infer<typeof signUpSchemaPageTwo>;
