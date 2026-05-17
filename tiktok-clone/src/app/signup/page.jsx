"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SignupPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const password = watch("password");

  const onSubmit = (data) => {
    setLoading(true);
    setMessage("");

    // Simulate API call
    setTimeout(() => {
      console.log("Signup data:", data);
      setLoading(false);
      setMessage("Signup successful!");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 mb-2 rounded"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-2 rounded"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" }
          })}
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-2 rounded"
          {...register("password", { 
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters" }
          })}
        />
        {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2 mb-2 rounded"
          {...register("confirmPassword", {
            validate: (value) => value === password || "Passwords do not match"
          })}
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mb-2">{errors.confirmPassword.message}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-2"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {/* Success Message */}
        {message && <p className="text-green-500 mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
}