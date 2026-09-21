import { createBrowserRouter, RouterProvider, Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import FragranceDetails from './pages/FragranceDetails';
import CardPreview from './pages/CardPreview';
import DetailsPreview from './pages/DetailsPreview';
import GrainOverlay from './components/GrainOverlay';
import CropMarks from './components/CropMarks';
import RunningFolio from './components/RunningFolio';
import WaveBackground from './components/WaveBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reset scroll and fire ScrollTrigger refresh on route change
function ScrollReset() {
  const location = useLocation();
  useEffect(() => {
    // Force instant scroll to avoid 'smooth' scrolling bugs during routing
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Restore smooth scroll behavior for normal anchor links
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
      ScrollTrigger.refresh();
    }, 10);
  }, [location.pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollRestoration />
      <ScrollReset />
      <WaveBackground />
      <GrainOverlay />
      <CropMarks />
      <RunningFolio />
      <div className="flex flex-col min-h-screen relative z-10 selection:bg-[#C8102E] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/fragrance/:slug", element: <FragranceDetails /> },
      { path: "/cards", element: <CardPreview /> },
      { path: "/details-preview", element: <DetailsPreview /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
