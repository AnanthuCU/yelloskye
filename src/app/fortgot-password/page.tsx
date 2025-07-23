// app/forgot-password/page.tsx
"use client";

import { useState } from "react";
import { resetPassword } from "@/lib/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setMessage("Password reset email sent.");
      setError("");
    } catch (err: any) {
      setError(err.message);
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Send Reset Email</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Go back to <a href="/login">Login</a>
      </p>
    </div>
  );
}
