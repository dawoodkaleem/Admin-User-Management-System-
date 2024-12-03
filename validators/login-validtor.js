const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  password: z
    .string({ message: "Password is required" })
    .min(7, { message: "Password should be more than 7 characers" }),
});

module.exports = { loginSchema };
