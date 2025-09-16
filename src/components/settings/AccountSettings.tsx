import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User, Lock, Eye, EyeOff, ChevronRight } from "lucide-react";

export function AccountSettings() {
  const [showPassword, setShowPassword] = useState(false);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [username, setUsername] = useState("johndoe");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameUpdate = () => {
    setIsEditingUsername(false);
    // Save username logic here
  };

  const handlePasswordUpdate = () => {
    if (newPassword === confirmPassword) {
      setIsEditingPassword(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      // Save password logic here
    }
  };

  return (
    <div className="settings-card slide-up">
      <div className="settings-section">
        <h2 className="text-xl font-semibold text-foreground mb-4">Account Settings</h2>
        
        {/* Username Setting */}
        <div className="setting-item group">
          <div className="flex items-center gap-3">
            <User className="setting-item-icon" />
            <div>
              <h3 className="font-medium text-foreground">Username</h3>
              <p className="text-sm text-muted-foreground">@{username}</p>
            </div>
          </div>
          <Dialog open={isEditingUsername} onOpenChange={setIsEditingUsername}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Change Username</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="username">New Username</Label>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border-input-border focus:border-input-focus"
                    placeholder="Enter new username"
                  />
                  <p className="text-xs text-muted-foreground">Your username must be unique and can contain letters, numbers, and underscores.</p>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleUsernameUpdate} className="flex-1 bg-primary hover:bg-primary-hover">
                    Update Username
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditingUsername(false)} 
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Password Setting */}
        <div className="setting-item group">
          <div className="flex items-center gap-3">
            <Lock className="setting-item-icon" />
            <div>
              <h3 className="font-medium text-foreground">Password</h3>
              <p className="text-sm text-muted-foreground">••••••••</p>
            </div>
          </div>
          <Dialog open={isEditingPassword} onOpenChange={setIsEditingPassword}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Change Password</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <div className="relative">
                    <Input
                      id="current-password"
                      type={showPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="border-input-border focus:border-input-focus pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border-input-border focus:border-input-focus"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border-input-border focus:border-input-focus"
                    placeholder="Confirm new password"
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={handlePasswordUpdate} 
                    className="flex-1 bg-primary hover:bg-primary-hover"
                    disabled={!currentPassword || !newPassword || newPassword !== confirmPassword}
                  >
                    Update Password
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditingPassword(false)} 
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}