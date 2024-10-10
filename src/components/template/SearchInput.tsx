import { useState } from "react";
import { IconThermometer } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';

interface InputProps {
  inputValStored?: string
  setInputValStored: (e: any) => void;
}


export default function SearchInput(props: InputProps) {

  const [inputValUpdate, setInputValUpdate] = useState("");

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    props.setInputValStored(inputValUpdate);
    console.log(props.inputValStored)
  }

  console.log(inputValUpdate)

  return (
    <div className="flex h-6 w-full justify-evenly mt-5">
      <IconThermometer stroke={2} color={"white"} />
      <input
        className="border-b border-b-white outline-none text-white"
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