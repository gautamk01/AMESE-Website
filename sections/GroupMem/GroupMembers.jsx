import React from "react";
import { useState } from "react";
import Main_membs from "./Main_memb";

const GroupMembers = () => {
  return (
    <div className="container my-24 px-6 mx-auto h-[100vh] w-[100%]">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-32">
          Meet Our Amazing Team Members
        </h2>

        <div className="grid gap-x-1 lg:gap-x-10 md:grid-cols-5">
          <Main_membs />
          <Main_membs />
          <Main_membs />
          <Main_membs />
          <Main_membs />
        </div>
      </section>
    </div>
  );
};

export default GroupMembers;
