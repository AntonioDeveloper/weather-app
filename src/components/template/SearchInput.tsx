import { useContext, useState } from "react";
import { IconThermometer } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { GeneralContext } from "@/context/context";

export default function SearchInput() {

  const { setInputValUpdate, handleClick } = useContext(GeneralContext);

  return (
    <div className="flex h-6 w-full justify-evenly mt-5">
      <IconThermometer stroke={2} color={"white"} />
      <input
        className="border-b border-b-white outline-none text-white bg-transparent"
        id="search-bar"
        placeholder="Enter the desired location"
        onChange={(e) => setInputValUpdate(e.target.value)}
      />
      <button
        onClick={handleClick}
      >
        <IconSearch stroke={2} color={"white"} />
      </button>
    </div>
  )
}