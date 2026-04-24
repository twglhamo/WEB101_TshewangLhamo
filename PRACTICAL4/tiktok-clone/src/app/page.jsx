"use client";

export default function HomePage() {
  // Sample video feed data
  const videos = [
    { title: "Funny Cat Compilation", creator: "Alice", views: "1.2M" },
    { title: "Travel Vlog: Japan", creator: "Bob", views: "540K" },
    { title: "React Tutorial 2026", creator: "Charlie", views: "120K" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">For You</h1>
      <p className="mb-6 text-gray-600">Here is your personalized video feed.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md"
          >
            <div className="h-40 bg-gray-200 rounded mb-2"></div>
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="text-sm text-gray-500">{video.creator}</p>
            <p className="text-sm text-gray-500">{video.views} views</p>
          </div>
        ))}
      </div>
    </div>
  );
}