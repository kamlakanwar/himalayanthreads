import Image from "next/image";
import { FaHeart, FaRegComment, FaPaperPlane } from "react-icons/fa";

const posts = [
{
id: 1,
image: "/images/cap.png",
date: "Jan 6th, 2025",
},
{
id: 2,
image: "/images/cap.png",
date: "Dec 29th, 2023",
},
{
id: 3,
image: "/images/cap.png",
date: "Apr 16th, 2025",
},
];

export default function SocialMedia() {
return ( <section className=" bg-gray-300 p-15">
  <div className=" mx-auto grid md:grid-cols-4 gap-10 items-center px-6">

    {/* LEFT TEXT */}
    <div className="md:col-span-1  text-center">
      <h2 className="text-4xl font-bold leading-tight">
        We're on social <br /> @himalyanthreads
      </h2>
    </div>

    {/* SOCIAL POSTS */}
    <div className="md:col-span-3 grid md:grid-cols-3 gap-6">

      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white border p-4 overflow-hidden shadow-sm"
        >

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-2 text-sm font-semibold">
            <span>@himalyanthreads</span>
            <span>•••</span>
          </div>

          {/* IMAGE */}
          <Image
            src={post.image}
            alt="social post"
            width={400}
            height={400}
            className="w-full object-cover"
          />

          {/* ICONS */}
          <div className="flex items-center gap-4 px-3 py-2 text-xl">
            <FaHeart />
            <FaRegComment />
            <FaPaperPlane />
          </div>

          {/* CAPTION */}
          <div className="px-3 pb-3 text-sm">
            <p className="font-semibold">@himalyanthreads</p>
            <p className="text-gray-500">{post.date}</p>
          </div>

        </div>
      ))}

    </div>

  </div>

</section>

);
}
