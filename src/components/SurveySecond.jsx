import React from "react";
import { useForm } from "react-hook-form";

const SurveySecond = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, title, email, status, region } = data;
    console.log(name);
  };

  return (
    <div className="max-w-2xl px-9 mx-auto">
      <form
        className="mb-3 m-auto py-10 mt-1 px-9 rounded border-b shadow border-gray-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-gray-600 font-medium ">Name</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("name", {
            required: "Please enter your name",
          })}
          placeholder="What's your full name?"
          autoFocus
        />
        {errors.name && (
          <div className="mb-3 text-normal text-red-500">
            {errors.name.message}
          </div>
        )}

        <label className="text-gray-600 font-medium block mt-4">
          Job Title
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("title", {
            required: "Please enter a job title",
          })}
          placeholder="Full Stack Developer, Backend Engineer, etc."
          autoFocus
        />
        {errors.title && (
          <div className="mb-3 text-normal text-red-500">
            {errors.title.message}
          </div>
        )}

        <label className="text-gray-600 font-medium block mt-4">Email</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("email", {
            required: "Please enter your email",
          })}
          placeholder="What's your email?"
          autoFocus
        />
        {errors.email && (
          <div className="mb-3 text-normal text-red-500">
            {errors.email.message}
          </div>
        )}

        <label className="text-gray-600 font-medium block mt-4">
          Dropdown with Subject Status's
        </label>
        <select
          className="w-full h-10 pl-3 pr-6 text-base text-gray-600 border-solid border-gray-300 border rounded appearance-none focus:shadow-outline"
          {...register("status", {
            required: "Please choose a status",
          })}
        >
          <option value="Registered">Registered</option>
          <option value="Consented">Consented</option>
          <option value="Randomized">Randomized</option>
          <option value="Inactive">Inactive</option>
        </select>

        <label className="text-gray-600 font-medium block mt-4">Regions</label>
        <select
          className="w-full h-10 pl-3 pr-6 text-base text-gray-600 border-solid border-gray-300 border rounded appearance-none focus:shadow-outline"
          {...register("region", {
            required: "Please choose a region",
          })}
        >
          <option value="usa">USA</option>
          <option value="germany">Germany</option>
          <option value="france">France</option>
        </select>

        <button
          className="mt-4 w-full px-3 py-4 text-white text-center bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveySecond;
