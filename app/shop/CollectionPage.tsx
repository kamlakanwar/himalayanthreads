import CollectionCard from "./CollectionCard";
import collections from "@/data/Collections";

export default function CollectionPage() {
  return (
    <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {collections.map((item) => (
      <CollectionCard key={item.id} item={item} />
    ))}
  </div>
</div>
  );
}
