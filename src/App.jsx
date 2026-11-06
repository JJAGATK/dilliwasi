import React, { useState } from 'react';
import { Router, Routes, Route, useLocation } from './router/Router';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ReservationModal } from './components/public/ReservationModal';
import { LanguageProvider } from './context/LanguageContext';

// Public Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { StoryPage } from './pages/StoryPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ReservePage } from './pages/ReservePage';

// Admin Pages
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminOverview } from './pages/admin/AdminOverview';
import { AdminFloorPlan } from './pages/admin/AdminFloorPlan';
import { AdminReservations } from './pages/admin/AdminReservations';
import { AdminMenuManager } from './pages/admin/AdminMenuManager';
import { AdminOrders } from './pages/admin/AdminOrders';
import { AdminReviews } from './pages/admin/AdminReviews';
import { AdminSettings } from './pages/admin/AdminSettings';

// Shared Mock Data
import { initialReservations } from './data/mockData';

function AppContent() {
  const { pathname } = useLocation();
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [allReservations, setAllReservations] = useState(initialReservations);

  const isAdminRoute = pathname.startsWith('/admin');

  const handleAddNewReservation = (newRes) => {
    setAllReservations((prev) => [newRes, ...prev]);
  };

  if (isAdminRoute) {
    return (
      <AdminLayout>
        <Routes>
          <Route path="/admin" element={<AdminOverview />} />
          <Route path="/admin/floorplan" element={<AdminFloorPlan />} />
          <Route path="/admin/reservations" element={<AdminReservations reservations={allReservations} />} />
          <Route path="/admin/menu" element={<AdminMenuManager />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="*" element={<AdminOverview />} />
        </Routes>
      </AdminLayout>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenReserve={() => setIsReserveModalOpen(true)} />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenReserve={() => setIsReserveModalOpen(true)} />}
          />
          <Route
            path="/menu"
            element={<MenuPage onOpenReserve={() => setIsReserveModalOpen(true)} />}
          />
          <Route
            path="/story"
            element={<StoryPage onOpenReserve={() => setIsReserveModalOpen(true)} />}
          />
          <Route
            path="/gallery"
            element={<GalleryPage onOpenReserve={() => setIsReserveModalOpen(true)} />}
          />
          <Route
            path="/contact"
            element={<ContactPage onOpenReserve={() => setIsReserveModalOpen(true)} />}
          />
          <Route
            path="/reserve"
            element={<ReservePage onAddReservation={handleAddNewReservation} />}
          />
          <Route
            path="*"
            element={<HomePage onOpenReserve={() => setIsReserveModalOpen(true)} />}
          />
        </Routes>
      </main>

      <Footer onOpenReserve={() => setIsReserveModalOpen(true)} />

      {/* Global Table Reservation Dialog with Tasting Course Builder */}
      <ReservationModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
        onAddReservation={handleAddNewReservation}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
