import { LooplyLogo } from "./components/BrandIcons/Logo";
import { LoginForm } from "./components/LoginForm";
import { SocialLogin } from "./components/SocialLogin";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-full p-4 lg:p-8 lg:w-1/2">
        <div className="flex items-center gap-2 mb-8">
          <LooplyLogo className="text-blue-600 size-8" />
          <span className="text-2xl font-semibold">Looply</span>
        </div>
        <div className="flex flex-col w-full mx-auto mt-24 sm:w-96">
          <h2 className="mb-6 text-3xl font-bold">Sign In</h2>
          <LoginForm />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-gray-100">
                  or sign up with
                </span>
              </div>
            </div>
            <SocialLogin />
          </div>
        </div>
      </div>
      <div className="items-center justify-center hidden w-1/2 lg:flex">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/bg-image.jpg')" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
