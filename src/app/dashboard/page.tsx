'use client';

import { useAuth } from '@/context/AuthContext';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

export default function DashboardPage() {
  useAuthRedirect(); // 🚨 Protect the route
  const { user, logout } = useAuth();

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard 🎉</h2>
      <p className="mb-4">You are logged in as: <strong>{user?.email}</strong></p>
      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Log out
      </button>
    </div>
  );
}
