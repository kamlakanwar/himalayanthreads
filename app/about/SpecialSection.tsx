import Image from "next/image";
import { GoShieldCheck } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { SiCssdesignawards } from "react-icons/si";

const features = [
  {
    id: 1,
    icon: FaRegHeart,
    title: "TRADITIONAL CRAFTSMANSHIP:",
    desc: "Handcrafted by Local Artisans",
  },
  {
    id: 2,
    icon: GoShieldCheck,
    title: "AUTHENTIC MATERIALS:",
    desc: "Aerospace-grade materials come with a a Lifetime Warranty",
  },
  {
    id: 3,
    icon: SiCssdesignawards,
    title: "CULTURALLY RICH DESIGNS:",
    desc: "Built to last piece-by-piece for any future changes",
  },
  {
    id: 4,
    icon: FaRegHeart,
    title: "ETHICS IN EVERY THREAD:",
    desc: "Where Every Purchase Empowers a Community",
  },
];

const stories = [
  {
    id: 1,
    image: "/images/storyImg1.png",
    title: "Precision & Passion in Every Piece",
    desc: "Born from a deep appreciation for mountain culture and the artistry of Himachal, every product at HimalayanThreads is crafted with care and precision. Using traditional techniques passed down through generations, we preserve the rich heritage of Himachali craftsmanship while empowering local artisans. Each piece reflects not only the skill of the craftsmen but also the love and respect for the traditions that have defined Himachal’s identity for centuries. Through our creations, we support artisans' livelihoods and ensure their timeless skills continue to thrive for generations to come.",
  },
  {
    id: 2,
    image: "/images/storyImg1.png",
    title: "Raw Materials, Pure Himalayan Craft",
    desc: "Born from a deep appreciation for mountain culture and the artistry of Himachal, every product at HimalayanThreads is crafted with care and precision. Using traditional techniques passed down through generations, we preserve the rich heritage of Himachali craftsmanship while empowering local artisans. Each piece reflects not only the skill of the craftsmen but also the love and respect for the traditions that have defined Himachal’s identity for centuries. Through our creations, we support artisans' livelihoods and ensure their timeless skills continue to thrive for generations to come.",
  },
  {
    id: 3,
    image: "/images/storyImg1.png",
    title: "Precision & Passion in Every Piece",
    desc: "At HimalayanThreads, we believe in using only the finest natural materials that embody the essence of the Himalayas. Our products are crafted from high-quality wool, soft angora, and other handpicked fibers, all sourced from the untouched landscapes of the Himalayan region. These pure materials carry the raw, authentic spirit of the mountains, ensuring that each piece is not only luxurious but also a true reflection of the region's rich natural heritage.",
  },
  {
    id: 4,
    image: "/images/storyImg1.png",
    title: "Raw Materials, Pure Himalayan Craft",
    desc: "Every piece is thoughtfully crafted with a deep commitment to sustainability and fairness. Our products are created using eco-friendly techniques and materials, ensuring minimal environmental impact while preserving the integrity of traditional craftsmanship. We also prioritize fair wages, supporting artisans and empowering them to continue their craft while keeping their rich heritage alive. With each item, you’re not just wearing something beautiful, but something that stands for ethical craftsmanship and thoughtful design.",
  },
];

export default function SpecialSection() {
  return (
    <section className="max-w-4xl mx-auto grid md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="bg-(--color-red) text-white flex flex-col justify-center items-center p-12 text-center h-200">

        <h2 className="text-4xl font-bold mb-10">
          WHAT MAKES <br /> HIMALAYANTHREADS <br /> SPECIAL?
        </h2>

        <div className="space-y-8 text-left">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id}>
                <div className="flex items-center gap-2">
                  <Icon size={24} />
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm opacity-90">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className=" p-10 space-y-4">

        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col gap-4 items-center"
          >

            <Image
              src={story.image}
              alt={story.title}
              width={500}
              height={100}
              className="rounded-lg"
            />

            <div>
              <h3 className="text-xl font-bold mb-1">
                {story.title}
              </h3>

              <p className="text-gray-700 text-xs leading-tight">
                {story.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}