import type { ReactNode } from 'react';

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      {children}
    </div>
  );
};
