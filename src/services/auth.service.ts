interface LoginArgs {
  email: string;
  password: string;
}

export const loginUser = async (args: LoginArgs) => {
  console.log(`Logging in with email: ${args.email}`);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    success: true,
    status: 200,
    message: "Login successful",
  };
};
