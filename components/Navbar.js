import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// import { Link } from "react-router-dom";
export default function Navber() {
  const router = useRouter();
  const handleInput = () => {
    console.log("click me ");
    router.push("/add-person");
  };

  return (
    <>
      <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between">
        <h1 className="text-white text-3xl font-semibold">Curd App</h1>
        <Link href="/user">
          <button
            type="button"
            onClick={handleInput}
            className="w-48 bg-white text-blue-300 font-semibold rounded-lg text-3xl h-11 "
          >
            Add user
          </button>
        </Link>
      </div>
    </>
  );
}
