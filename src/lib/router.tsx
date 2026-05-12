import {
  createContext,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type RouterContextValue = {
  currentPath: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

function normalizePath(path: string): string {
  const [pathname] = path.split(/[?#]/, 1);
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function getCurrentPath() {
  return normalizePath(window.location.pathname);
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState(() => getCurrentPath());

  useEffect(() => {
    const handlePopState = () => setCurrentPath(getCurrentPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const value = useMemo<RouterContextValue>(
    () => ({
      currentPath,
      navigate: (to, options) => {
        const nextPath = normalizePath(to);
        if (nextPath === currentPath) return;

        window.history[options?.replace ? "replaceState" : "pushState"]({}, "", to);
        setCurrentPath(nextPath);
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      },
    }),
    [currentPath],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

function useRouterContext() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("Router components must be used inside RouterProvider.");
  }
  return context;
}

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
}

export function Link({
  to,
  onClick,
  target,
  ...props
}: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string }) {
  const { navigate } = useRouterContext();

  return (
    <a
      {...props}
      href={to}
      target={target}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          target === "_blank" ||
          isModifiedEvent(event) ||
          /^https?:\/\//.test(to)
        ) {
          return;
        }

        event.preventDefault();
        navigate(to);
      }}
    />
  );
}

export function useCurrentPath() {
  return useRouterContext().currentPath;
}
