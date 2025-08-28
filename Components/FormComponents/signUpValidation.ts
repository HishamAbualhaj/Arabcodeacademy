/**
 * signUpSchemaPageOne
 *
 * A Zod schema defining the validation rules for the first page of the sign-up form. This schema validates
 * the user's email and password, ensuring that the password meets specific security criteria and the
 * email is not already registered in the system. It also ensures that the password and confirmation
 * password fields match.
 *
 * Validation Rules:
 * - email: Must be a string. Additional checks should be implemented to ensure it is a valid email format.
 * - password: Must be at least 8 characters, include at least one uppercase letter, one number, and one special character.
 * - confirmPassword: Must match the password field.
 *
 * Refinements:
 * - Checks that the password and confirmPassword fields are identical.
 * - Ensures that the provided email is not already registered in the system based on a mock userData array.
 *
 * @returns {ZodSchema}
 * A Zod schema object that can be used with react-hook-form for robust form validation.
 */

/**
 * signUpSchemaPageTwo
 *
 * A Zod schema for the second page of the sign-up form, validating user details including the username, first name,
 * last name, country, and terms acceptance.
 *
 * Validation Rules:
 * - userName: Must be a non-empty string. Further validation can be added to check for uniqueness against a database.
 * - firstName: Must be a non-empty string.
 * - lastName: Must be a non-empty string. This field currently has an incorrect error message suggesting numeric restriction.
 * - country: Must not be the placeholder 'اختر بلدك'.
 * - termsAccepted: Must be 'on', indicating the user has agreed to the terms.
 *
 * Refinements:
 * - Ensures the country selected is not the placeholder value.
 * - Checks that the terms of service are accepted.
 *
 * @returns {ZodSchema}
 * A Zod schema object tailored for validating more personalized user data on the second page of a sign-up form.
 */
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

export const signUpSchemaPageTwo = z
  .object({
    userName: z
      .string()
      .min(1, { message: "اسم المستخدم هذا مأخوذ بالفعل. الرجاء اختيار آخر" }),
    firstName: z.string().min(1, { message: "الرجاء إدخال اسمك الأول" }),
    lastName: z.string().min(1, {
      message: "لا يمكن أن يحتوي اسم العائلة على أرقام أو أحرف خاصة",
    }),
    country: z.string(),
    termsAccepted: z.string(),
  })
  .refine((data) => data.country !== "اختر بلدك", {
    message: "الرجاء اختيار بلدك",
    path: ["country"],
  })
  .refine((data) => data.termsAccepted === "on", {
    message: "الرجاء قبول الشروط",
    path: ["termsAccepted"],
  });

export type SignUpTypePageTwo = z.infer<typeof signUpSchemaPageTwo>;
