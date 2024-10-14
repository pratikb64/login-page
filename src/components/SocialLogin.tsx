import { Facebook } from "./BrandIcons/Facebook";
import { Google } from "./BrandIcons/Google";

export const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-3 mt-6 lg:flex-row">
      <button
        title="Facebook"
        className="flex justify-center w-full px-4 py-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
      >
        <Facebook className="size-5 fill-blue-600" />
      </button>
      <button
        title="Google"
        className="flex justify-center w-full px-4 py-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
      >
        <Google className="size-5" />
      </button>
    </div>
  );
};
