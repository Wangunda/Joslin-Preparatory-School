import AboutPage, { pageMeta as aboutMeta } from "./routes/about";
import AccessibilityPage, { pageMeta as accessibilityMeta } from "./routes/accessibility";
import AdmissionsPage, { pageMeta as admissionsMeta } from "./routes/admissions";
import ContactPage, { pageMeta as contactMeta } from "./routes/contact";
import DonationsPage, { pageMeta as donationsMeta } from "./routes/donations";
import GalleryPage, { pageMeta as galleryMeta } from "./routes/gallery";
import HomePage, { pageMeta as homeMeta } from "./routes/index";
import PrivacyPage, { pageMeta as privacyMeta } from "./routes/privacy";
import ProgramsPage, { pageMeta as programsMeta } from "./routes/programs";
import TermsPage, { pageMeta as termsMeta } from "./routes/terms";
import { Link, RouterProvider, useCurrentPath } from "./lib/router";
import { type PageMeta, RouteMeta } from "./lib/seo";

type RouteDefinition = {
  path: string;
  component: () => JSX.Element;
  meta: PageMeta;
};

const routes: RouteDefinition[] = [
  { path: "/", component: HomePage, meta: homeMeta },
  { path: "/about", component: AboutPage, meta: aboutMeta },
  { path: "/programs", component: ProgramsPage, meta: programsMeta },
  { path: "/admissions", component: AdmissionsPage, meta: admissionsMeta },
  { path: "/donations", component: DonationsPage, meta: donationsMeta },
  { path: "/gallery", component: GalleryPage, meta: galleryMeta },
  { path: "/contact", component: ContactPage, meta: contactMeta },
  { path: "/privacy", component: PrivacyPage, meta: privacyMeta },
  { path: "/terms", component: TermsPage, meta: termsMeta },
  { path: "/accessibility", component: AccessibilityPage, meta: accessibilityMeta },
];

const notFoundMeta: PageMeta = {
  title: "Page Not Found - Joslin Preparatory School",
  description: "The page you're looking for doesn't exist or has been moved.",
  ogTitle: "Page Not Found - Joslin Preparatory School",
  ogDescription: "The page you're looking for doesn't exist or has been moved.",
};

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function AppRoutes() {
  const currentPath = useCurrentPath();
  const route = routes.find((item) => item.path === currentPath);

  if (!route) {
    return (
      <>
        <RouteMeta meta={notFoundMeta} />
        <NotFoundPage />
      </>
    );
  }

  const Page = route.component;

  return (
    <>
      <RouteMeta meta={route.meta} />
      <Page />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}
