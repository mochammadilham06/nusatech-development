import React from "react";
import { Devider, heroImage } from "../../assets";
import Navbar from "../../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="h-screen bg-background">
        <div className=" px-6 py-12 h-full">
          <div className="flex justify-center flex-wrap h-full g-6 text-gray-800">
            <div className="flex w-1/2 ">
              <img src={heroImage} alt="test" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20 space-y-6">
              <h3 className="text-white text-end">
                Already have an account?{" "}
                <span>
                  <a href="#" className="text-secondary">
                    Login
                  </a>
                </span>
              </h3>
              <h1 className="font-bold text-2xl text-white mb-5 ">Sign Up</h1>

              <p className="text-base text-gray-600">
                Use Your open id to sign up
              </p>

              <div className="flex gap-3 text-base text-white">
                <p className="text-secondary">Email</p>
                <img src={Devider} alt="test" />
                <p>Phone Number</p>
              </div>
              <form>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="bg-input border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-[319px] p-2.5 "
                      placeholder="nusatech123@gmail.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="bg-input border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[319px] p-2.5 "
                      placeholder="************"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm"
                      className="bg-input border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[319px] p-2.5 "
                      placeholder="************"
                      required
                    />
                  </div>
                  <div>
                    <p className="text-white">referal ID (Optional)</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      defaultChecked
                      id="checked-checkbox"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-2 text-sm font-medium text-white"
                    >
                      Text
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
