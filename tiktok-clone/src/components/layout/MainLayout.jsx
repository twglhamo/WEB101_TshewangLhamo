"use client";

import Link from "next/link";
import { FaHome, FaUserFriends, FaCompass, FaVideo, FaRegUser, FaPlus } from "react-icons/fa";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <aside className="w-60 bg-white border-r fixed h-full overflow-y-auto">
        <div className="p-4">
          <Link href="/" className="text-xl font-bold flex items-center">
            <span className="text-red-500 mr-1">TikTok</span>
          </Link>
        </div>

        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                <FaHome className="text-xl mr-3" />
                <span>For You</span>
              </Link>
            </li>
            <li>
              <Link href="/following" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                <FaUserFriends className="text-xl mr-3" />
                <span>Following</span>
              </Link>
            </li>
            <li>
              <Link href="/explore" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                <FaCompass className="text-xl mr-3" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link href="/live" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                <FaVideo className="text-xl mr-3" />
                <span>Live</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sidebar login/signup */}
        <div className="px-3 py-4 mt-4">
          <p className="text-sm text-gray-500 mb-2">Log in to follow creators, like videos, and view comments.</p>
          <Link href="/login">
            <button className="w-full py-2 px-4 border rounded-md font-medium mb-2 hover:bg-gray-50">Log in</button>
          </Link>
          <Link href="/signup">
            <button className="w-full py-2 px-4 bg-red-500 text-white rounded-md font-medium hover:bg-red-600">Sign up</button>
          </Link>
        </div>

        <div className="border-t px-3 py-4 text-xs text-gray-500">
          <p>© 2025 TikTok</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-60">
        {/* Header */}
        <header className="h-16 border-b flex items-center justify-between px-4 bg-white sticky top-0 z-10">
          {/* Empty left placeholder */}
          <div className="w-1/3"></div>

          {/* Search bar */}
          <div className="w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search accounts and videos"
                className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-full"
              />
              <FaCompass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Header buttons */}
          <div className="w-1/3 flex justify-end space-x-3">
            <Link href="/upload">
              <button className="border px-3 py-1 rounded-md hover:bg-gray-50 flex items-center">
                <FaPlus className="mr-2"/> Upload
              </button>
            </Link>

            <Link href="/login">
              <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600">Log in</button>
            </Link>

            <Link href="/signup">
              <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600">Sign up</button>
            </Link>

            <Link href="/profile">
              <FaRegUser className="text-xl cursor-pointer"/>
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}