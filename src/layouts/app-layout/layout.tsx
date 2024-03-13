import { Outlet } from 'react-router-dom';

import { AppHeader } from './header';
import { AppSidebar } from './sidebar';

export const AppLayout = () => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      <AppSidebar />
      <main className="relative flex h-full w-full flex-col overflow-hidden bg-[#F1F3F7]">
        <AppHeader />
        <div className="h-full w-full overflow-hidden">
          <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
