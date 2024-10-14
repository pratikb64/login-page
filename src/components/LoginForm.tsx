import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { loginUser } from "../services/auth.service";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const LoginForm = () => {
  const loginForm = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const loadingToastId = toast.loading("Logging in...");
    await loginUser(data);
    toast.success("Logged in successfully", { id: loadingToastId });
    loginForm.reset();
  };

  return (
    <form onSubmit={loginForm.handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="relative mt-1">
          <input
            type="email"
            id="email"
            className="block w-full py-3 pl-3 pr-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="example@email.com"
            {...loginForm.register("email")}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Mail className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="h-5 mt-1 text-sm font-semibold text-red-500">
          {loginForm.formState.errors.email?.message}
        </div>
      </div>
      <div className="mt-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            className="block w-full py-3 pl-3 pr-10 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            {...loginForm.register("password")}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 focus:outline-none focus:text-gray-500"
            >
              {showPassword ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </div>
        </div>
        <div className="h-5 mt-1 text-sm font-semibold text-red-500">
          {loginForm.formState.errors.password?.message}
        </div>
      </div>
      <button
        type="submit"
        className="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        disabled={loginForm.formState.isSubmitting}
      >
        Sign In
      </button>
    </form>
  );
};
