"use client";

export default function LivePage() {
  const liveStreams = [
    { title: "Gaming Live Stream", viewers: "1.5K" },
    { title: "Cooking Live Show", viewers: "780" },
    { title: "Music Jam Session", viewers: "2.3K" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Live</h1>
      <p className="mb-6 text-gray-600">
        Watch live streams from different creators in real time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {liveStreams.map((stream, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md"
          >
            <div className="h-40 bg-gray-200 rounded mb-2"></div>
            <h2 className="text-lg font-semibold">{stream.title}</h2>
            <p className="text-sm text-gray-500">{stream.viewers} viewers</p>
            <button className="mt-2 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600">
              Watch Live
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}