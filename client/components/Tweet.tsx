import Image from "next/image";
import { FaRegBookmark, FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa6";
import { LuShare } from "react-icons/lu";
import { MdMoreHoriz } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Tweet = () => {
  return (
    <div className="flex flex-col items-start h-full w-[621px] px-4 pt-3 border-gray-700 border-b gap-2 border-r">

      <div className="flex w-full gap-2">
        <Image height={40} width={40} 
          className="h-10 w-10 rounded-full" 
          src="/images/sample-pfp.jpeg" 
          alt="profilePfp" 
        />

        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex space-x-1 items-center relative">
              
              <p className="font-bold ml-2 text-sm">abhijay</p>
                
              <RiVerifiedBadgeFill className="text-primary text-lg"/>
              
              <p className="text-faded text-sm">@rajvanshx · Sep 15</p>

            </div>
            <MdMoreHoriz className="text-2xl text-faded" />
          </div>

          <p className='ml-2 text-sm'>
            let him cook, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur minus qui officia blanditiis ipsam illo nisi esse.
          </p>
          
          <div className="flex item justify-between text-md py-1 text-faded">
            <div className="interactiveButton hover:text-primary hover:bg-primary/20">
              <FaRegComment />
            </div>
            <div className="interactiveButton hover:text-green-500 hover:bg-green-500/20">
              <FaRetweet />
            </div>
            <div className="interactiveButton hover:text-red-500 hover:bg-red-500/20">
              <FaRegHeart />
            </div>
            <div className="interactiveButton hover:text-primary hover:bg-primary/20">
              <FaRegBookmark />
            </div>
            <div className="interactiveButton hover:text-primary hover:bg-primary/20">
              <LuShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet;