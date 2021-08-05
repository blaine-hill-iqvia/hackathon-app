import React from "react";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';

const SurveySecond = ( { score, setScore }) => {

  setScore(72)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, title, email, status, region } = data;
    console.log(name);

    // on submit calculate score and setScore
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
          Occupation
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("occupation", {
            required: "Please enter an occupation",
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
          Previous History Status with Clinical Trials
        </label>
        <select
          className="w-full h-10 pl-3 pr-6 text-base text-gray-600 border-solid border-gray-300 border rounded appearance-none focus:shadow-outline"
          {...register("status", {
            required: "Please choose a status",
          })}
        >
          <option value="New">I am new at being a part of clinical trials</option>
          <option value="Veteran">I am a veteran at being a part of clinical trials</option>
        </select>

        <label className="text-gray-600 font-medium block mt-4">
          Age
        </label>
        <select
          className="w-full h-10 pl-3 pr-6 text-base text-gray-600 border-solid border-gray-300 border rounded appearance-none focus:shadow-outline"
          {...register("age", {
            required: "Please choose a range that contains your age",
          })}
        >
          <option value="0-20">0-20 years</option>
          <option value="20-40">20-40 years</option>
          <option value="40-60">40-60 years</option>
          <option value="60-80">60-80 years</option>
          <option value="80+">80+ years</option>
        </select>

        <label className="text-gray-600 font-medium block mt-4">
          Ethnicity
        </label>
        <select
          className="w-full h-10 pl-3 pr-6 text-base text-gray-600 border-solid border-gray-300 border rounded appearance-none focus:shadow-outline"
          {...register("ethnicity", {
            required: "Please choose a range that contains your age",
          })}
        >
          <option value="american indian">American Indian or Alaskan Native</option>
          <option value="asian">Asian</option>
          <option value="african american">African American</option>
          <option value="latino">Latino</option>
          <option value="hawaiian">Native Hawaiian or Other Pacific Islander</option>
          <option value="white">White</option>
        </select>


        <label className="text-gray-600 font-medium ">
          Medical History Pertinent to Clinical Trial
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          {...register("medical history", {
            required: "Please disclose any important medical history",
          })}
          placeholder="Please disclose any important medical history"
          autoFocus
        />
        {errors.name && (
          <div className="mb-3 text-normal text-red-500">
            {errors.name.message}
          </div>
        )}


        <label className="text-gray-600 font-medium block mt-4">
          Age
        </label>
        <select
          className="w-full h-10 pl-3 pr-6 text-base text-gray-600 border-solid border-gray-300 border rounded appearance-none focus:shadow-outline"
          {...register("age", {
            required: "Please choose a range that contains your age",
          })}
        >
          <option value="0-20">0-20 miles</option>
          <option value="20-40">20-40 miles</option>
          <option value="40-60">40-60 miles</option>
          <option value="60-80">60-80 miles</option>
          <option value="80+">80+ miles</option>
        </select>

        <Link to="/tier">
          <button
            className="mt-4 w-full px-3 py-4 text-white text-center bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SurveySecond;
