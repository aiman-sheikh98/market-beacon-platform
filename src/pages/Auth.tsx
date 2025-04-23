
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/components/ui/use-toast";
import { Mail, LogIn, UserPlus } from "lucide-react";

const providerIcons = {
  google: <svg className="w-5 h-5 text-red-500" viewBox="0 0 48 48"><g><path d="M44.5..." /></g></svg>,
  github: <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M12..." /></svg>,
  twitter: <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24"><path d="M22..." /></svg>,
};

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    // If already signed in, redirect to dashboard
    navigate("/dashboard", { replace: true });
    return null;
  }

  async function handleAuthWithProvider(provider: "google" | "github" | "twitter") {
    setPending(true);
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    setPending(false);
    if (error) toast({ title: "Provider Login Failed", description: error.message });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setPending(false);
      if (error) {
        toast({ title: "Login Failed", description: error.message });
      } else {
        toast({ title: "Welcome back!" });
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      setPending(false);
      if (error) {
        toast({ title: "Signup Failed", description: error.message });
      } else {
        toast({ title: "Signup successful!", description: "Check your inbox to confirm your email." });
      }
    }
  }

  return (
    <div className="min-h-screen bg-financial-navy flex items-center justify-center">
      <div className="bg-white bg-opacity-20 rounded-lg p-8 shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          {mode === "login" ? <LogIn /> : <UserPlus />}
          {mode === "login" ? "Log In" : "Sign Up"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-white font-medium">Email</span>
            <Input
              className="mt-1"
              type="email"
              autoComplete="email"
              required
              value={email}
              disabled={pending}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="text-white font-medium">Password</span>
            <Input
              className="mt-1"
              type="password"
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              required
              value={password}
              disabled={pending}
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
            />
          </label>
          <Button
            type="submit"
            disabled={pending}
            className="w-full bg-financial-highlight hover:bg-blue-700"
          >
            {mode === "login" ? "Log In" : "Sign Up"}
          </Button>
        </form>
        <div className="text-center my-3 text-white">or</div>
        <div className="flex flex-col gap-2 mb-3">
          <Button
            type="button"
            variant="secondary"
            onClick={() => handleAuthWithProvider("google")}
            disabled={pending}
            className="w-full flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Continue with Google
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => handleAuthWithProvider("github")}
            disabled={pending}
            className="w-full flex items-center gap-2"
          >
            <span className="w-4 h-4"><svg fill="currentColor" viewBox="0 0 16 16"><path d="M8..." /></svg></span>
            Continue with GitHub
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => handleAuthWithProvider("twitter")}
            disabled={pending}
            className="w-full flex items-center gap-2"
          >
            <span className="w-4 h-4"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M22..." /></svg></span>
            Continue with Twitter
          </Button>
        </div>
        <div className="text-center">
          <button
            className="text-financial-highlight hover:underline"
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            disabled={pending}
          >
            {mode === "login" ?
              "Don't have an account? Sign Up" :
              "Already have an account? Log In"}
          </button>
        </div>
      </div>
    </div>
  );
}
