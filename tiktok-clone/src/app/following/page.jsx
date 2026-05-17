"use client";

export default function FollowingPage() {
  const creators = [
    { name: "Alice", followers: 1200 },
    { name: "Bob", followers: 900 },
    { name: "Charlie", followers: 500 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Following</h1>
      <p className="mb-6 text-gray-600">
        Videos from creators you follow will appear here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md"
          >
            <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-2"></div>
            <h2 className="text-lg font-semibold text-center">{creator.name}</h2>
            <p className="text-sm text-gray-500 text-center">
              {creator.followers} followers
            </p>
            <button className="mt-2 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}