// app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div>
      <h1>Welcome to the Firebase Auth App</h1>
      <p>Please login or sign up to continue.</p>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => router.push('/login')}>Login</button>
        <button onClick={() => router.push('/signup')} style={{ marginLeft: '1rem' }}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
