import collections from "@/data/collections";

export default function ShopCollectionCard() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-white">
      {collections.map((item) => (
        <div key={item.id} className="text-center">
          <image
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover"
          />

          <h3 className="mt-2 font-semibold">
            {item.title}
          </h3>

          <p className="text-sm text-gray-500">
            {item.items} items
          </p>
        </div>
      ))}
    </div>
  );
}