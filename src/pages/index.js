import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Page = () => {
  const router = useRouter();
  return <h1>Hello world</h1>;
};

export default Page;
