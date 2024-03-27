import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  // Check if data is defined and has the label property
  if (!data || !data.label) {
    return null; // or render a placeholder, error message, or loading indicator
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs" style={{ WebkitTextStroke: '1px rgba(211, 211, 211, 0.25)' }}>
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
