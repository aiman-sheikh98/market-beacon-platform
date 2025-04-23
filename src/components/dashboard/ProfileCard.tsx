
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export default function ProfileCard() {
  const { user, profile, refreshProfile } = useAuth();
  const [form, setForm] = useState({
    username: profile?.username ?? "",
    full_name: profile?.full_name ?? ""
  });
  const [saving, setSaving] = useState(false);

  if (!user || !profile) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await (await import("@/integrations/supabase/client")).supabase
      .from("profiles")
      .update({ username: form.username, full_name: form.full_name, updated_at: new Date().toISOString() })
      .eq("id", user.id);
    setSaving(false);
    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Profile updated!" });
      await refreshProfile();
    }
  };

  return (
    <div className="bg-white bg-opacity-80 rounded-lg shadow p-6 mb-8 max-w-md">
      <form onSubmit={handleSave} className="space-y-4">
        <h2 className="text-xl font-bold mb-2 text-financial-navy">Profile</h2>
        <div>
          <label className="block text-sm font-medium text-financial-navy">Username</label>
          <Input name="username" value={form.username} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-medium text-financial-navy">Full Name</label>
          <Input name="full_name" value={form.full_name} onChange={handleChange} />
        </div>
        <Button className="bg-financial-highlight hover:bg-blue-700" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </form>
    </div>
  );
}
