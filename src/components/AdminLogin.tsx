import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (password: string) => void;
  onClose: () => void;
  error?: string;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onClose, error }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="fixed inset-0 bg-zhuan-dark-brown/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zhuan-dark-green/80 rounded-xl p-6 w-full max-w-md mx-4 animate-fade-in border border-zhuan-gold/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-zhuan-light">ورود به پنل مدیریت</h2>
          <button
            onClick={onClose}
            className="p-2 text-zhuan-light/70 hover:bg-zhuan-dark-brown/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zhuan-light/80 mb-2">
              رمز عبور
            </label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zhuan-light/60" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-10 pl-4 py-3 bg-zhuan-dark-brown/50 rounded-lg border border-zhuan-gold/30 focus:ring-2 focus:ring-zhuan-gold focus:outline-none persian-input text-zhuan-light placeholder-zhuan-light/60"
                placeholder="رمز عبور را وارد کنید"
                required
              />
            </div>
          </div>
          
          {error && (
            <div className="text-red-400 text-sm bg-red-900/50 p-3 rounded-lg">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-zhuan-gold text-zhuan-dark-brown py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
