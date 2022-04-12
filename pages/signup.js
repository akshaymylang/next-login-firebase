import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {useRouter} from 'next/router'

export default function Signup() {
  const router = useRouter()
  const { signup } = useAuth();
  const [data, setData] = useState({ username: '', email: " ", password: " " });

  async function handleSubmitData(e) {
    e.preventDefault();

    try {
      await signup(data.username, data.email, data.password);
      router.push("/login")


    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <Head>
        <title>Sign up with your Email</title>
      </Head>
      <Link href="/">
        <a className="underline text-xl text-blue-700"> Go back to homepage</a>
      </Link>
      <form
        onSubmit={handleSubmitData}
        className="max-w-2xl mx-auto grid place-content-center h-screen"
      >
        <span className="mb-10 text-xl font-medium tracking-wide">
          Create your account using Email
        </span>
        <div className="bg-gray-100 py-16 px-6 rounded-xl">

          <div className="form-group mb-6">
            <label
              htmlFor="email"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              className="form-field"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
            <small id="emailHelp" className="block mt-1 text-xs text-gray-600">
             { `We'll never share your email with anyone else.`}
            </small>
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="password"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              className="form-field"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg duration-150 ease-in-out"
          >
            Create your account
          </button>
        </div>
      </form>
    </>
  );
}
