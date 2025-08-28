import { z } from "zod";

export const loginSchema = z.object({
    email: z
      .string().nonempty("يرجى إدخال البريد الإلكتروني")
      .email("البريد الإلكتروني غير صحيح"),
    password: z.string().nonempty("يرجى إدخال كلمة المرور")
    .min(6, "كلمة المرور يجب أن تكون على الأقل 6 أحرف")
    .max(20,"يجب ان لا تتجاوز كلمة المرور 20 حرف")
    .refine((password) => /[A-Z]/.test(password), "يجب ان تحتوي الكلمة على الأقل على حرف واحد كبير ")
    .refine((password) => /[a-z]/.test(password), "يجب أن تحتوي الكلمة على الأقل على حرف واحد صغير")
    .refine((password) => /[0-9]/.test(password), "يجب أن تحتوي الكلمة على الأقل على رقم واحد")
    .refine((password) => /[!@#$%^&*]/.test(password),"يجب أن تحتوي الكلمة على الأقل على رمز واحد")
  });
