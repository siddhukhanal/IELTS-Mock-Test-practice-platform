import TopBar from "../components/Dashboard/TopBar";
import SideNav from "../components/Sidebar/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // 1. The main layout wrapper (horizontal split on desktop)
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      
      {/* 2. Sidebar - Stays on the left, full height on desktop */}
<div className="w-full flex-none md:w-24">
  <SideNav />
</div>

      {/* 3. Right-Side Container - Houses Header + Children stacked vertically */}
      <div className="flex flex-1 flex-col overflow-hidden">
        
        {/* Header - Now sits directly above the main content */}
        <header className="w-full flex-none">
          <TopBar />
        </header>

        {/* Main Content Area - Scrollable window for your children pages */}
        <main className="flex-1 p-6 md:overflow-y-auto md:p-6">
          {children}
        </main>

      </div>

    </div>
  );
}
