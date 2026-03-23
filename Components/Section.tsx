export default function Section({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <div className="mb-8">

      {/* HEADING */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-gray-700 text-lg">{icon}</span>
        <h2 className="font-semibold text-base md:text-lg">
          {title}
        </h2>
      </div>

      {/* LIST */}
      <ul className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2 pl-5 list-disc">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}