import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext(null);

export function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const titles = {
      '/': 'Sanchi | Heritage Indian Fine Dining',
      '/menu': 'The Sanchi Tasting Menu | Classical Repertoire',
      '/story': 'Our Provenance & Story | 3rd Century BCE Roots',
      '/gallery': 'Sanctuary Gallery & Craft Archive | Sanchi Dining',
      '/reserve': 'Reserve a Table & Degustation Suite | Sanchi Dining',
      '/contact': 'Sanctuary Concierge & Location | Sanchi Dining',
      '/admin': 'Sanchi Admin | Operations Suite',
      '/admin/floorplan': 'Sanchi Admin | Interactive Floor Plan',
      '/admin/reservations': 'Sanchi Admin | Table Reservations',
      '/admin/menu': 'Sanchi Admin | Menu Management',
      '/admin/orders': 'Sanchi Admin | Kitchen Display System (KDS)',
      '/admin/reviews': 'Sanchi Admin | Guest Feedback',
      '/admin/settings': 'Sanchi Admin | Sanctuary Settings',
    };
    document.title = titles[currentPath] || 'Sanchi | Authentic Indian Dining';
  }, [currentPath]);

  const navigate = useCallback((to, { replace = false } = {}) => {
    if (to === currentPath) return;
    if (replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }
    setCurrentPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
}

export function useNavigate() {
  const { navigate } = useRouter();
  return navigate;
}

export function useLocation() {
  const { currentPath } = useRouter();
  return { pathname: currentPath };
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate, currentPath } = useRouter();
  const isActive = currentPath === to;

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return; // Allow opening in new tab
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? 'active' : ''}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function Routes({ children }) {
  const { currentPath } = useRouter();
  let matchedElement = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const { path, element } = child.props;
    
    // Exact or prefix match
    if (path === '*' && !matchedElement) {
      matchedElement = element;
    } else if (path === currentPath) {
      matchedElement = element;
    } else if (path && path.endsWith('/*') && currentPath.startsWith(path.slice(0, -2))) {
      matchedElement = element;
    }
  });

  if (!matchedElement) return null;

  return (
    <div key={currentPath} className="animate-page-enter">
      {matchedElement}
    </div>
  );
}

export function Route(_props) {
  return null; // Rendered by Routes
}
