"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      console.log(data);
      setLoading(false);
      setMessage("Login successful!");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-2 rounded"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email"
            }
          })}
        />

        {errors.email && (
          <p className="text-red-500 text-sm mb-2">
            {errors.email.message}
          </p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-2 rounded"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
        />

        {errors.password && (
          <p className="text-red-500 text-sm mb-2">
            {errors.password.message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white p-2 rounded mt-2"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && (
          <p className="text-green-500 mt-4 text-center">{message}</p>
        )}
      </form>
    </div>
  );
}