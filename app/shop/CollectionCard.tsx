import Image from "next/image";

export default function CollectionCard({ item}) {
  return (
    <div className="text-center w-full">
      
      <div className="relative w-full h-90 overflow-hidden ">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      <h2 className="mt-4 text-xl font-semibold">
        {item.title}
      </h2>

      <p className="text-gray-500">
        {item.items} Items
      </p>

    </div>
  );
}