"use client";
import React, { useState } from "react";
import { ageAtom, clearUserAtom, firstNameAtom, lastNameAtom, updateUserAtom } from "@/atom";
import { useAtomValue, useSetAtom } from "jotai";

const Sample2 = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", age: "" });
  const setUser = useSetAtom(updateUserAtom);
  const clearForm = useSetAtom(clearUserAtom);

  const firstName = useAtomValue(firstNameAtom);
  const lastName = useAtomValue(lastNameAtom);
  const age = useAtomValue(ageAtom);

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = setUser({ ...form });
    console.log(res.message);
  };

  const handleClear = () => {
    const res = clearForm();
    console.log(res.message);
  };

  return (
    <div>
      <h1 className="underline font-semibold text-lg">WriteOnly Sample</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          placeholder="FirstName"
          className="border outline-none text-white p-2 rounded-md mr-2"
        />
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          placeholder="FirstName"
          className="border outline-none text-white p-2 rounded-md mr-2"
        />
        <input
          type="text"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          placeholder="Age"
          className="border outline-none text-white p-2 rounded-md mr-2"
        />
        <button className="bg-blue-500 p-2 rounded-md mr-2" type="submit">
          Güncelle
        </button>
        <button className="bg-red-500 p-2 rounded-md " onClick={handleClear} type="button">
          Clear
        </button>
      </form>
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};

export default Sample2;
