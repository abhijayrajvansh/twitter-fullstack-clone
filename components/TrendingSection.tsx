'use client'

import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import HappeningTab from "./HappeningTab";

const TrendingSection = () => {

  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <section className="flex flex-col fixed ml-[900px] w-full max-w-[375px] px-4 py-1">
      
      <div className="flex w-full items-center relative focus-within:text-primary">
        <IoSearch className={`text-xl ${isInputFocused ? 'text-primary' : 'text-faded'} absolute left-5`} />
        <input className={`text-md py-2.5 px-14 w-full rounded-full ${isInputFocused ? 'bg-black border border-primary outline-none':'bg-[#222529]'}`}
          placeholder="Search" 
          // onFocus: This event handler is triggered when an element gains focus, meaning when a user clicks or tabs into the element.
          // onBlur: This event handler is triggered when an element loses focus, meaning when a user clicks or tabs out of the element.
          onFocus={() => setIsInputFocused(true)} 
          onBlur={() => setIsInputFocused(false)}/>
      </div>

      <div className="mt-4 bg-[#16181C] px-4 py-3 rounded-2xl">
        <h2>Subscribe to Premium</h2>
        <p className="text-sm py-2">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className="font-bold bg-primary hover:bg-opacity-80 px-4 py-1.5 mt-1.5 rounded-full">Subscribe</button>
      </div>

      

      <HappeningTab genre="Technology" headline="rajvanshtechnologies" posts="21M"/>

      <div>who to follow</div>
    </section>
  )
}

export default TrendingSection;