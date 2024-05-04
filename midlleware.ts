import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isTenantStudentRoute = createRouteMatcher(["/study", "/course-progress"]);

const isTenantAdminRoute = createRouteMatcher([
  "/trainer-dashboard",
  "/trainer-courses",
  "/trainer-content",
]);

export default clerkMiddleware((auth, req) => {
  // Restrict admin routes to users with specific permissions
  if (isTenantAdminRoute(req)) {
    auth().protect((has) => {
      return (
        has({ permission: "org:sys_memberships:manage" }) ||
        has({ permission: "org:sys_domains_manage" }) ||
        has({ permission: "org:sys_profile:manage" })
      );
    });
  }
  // Restrict organization routes to signed in users
  if (isTenantStudentRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    "/((?!.+.[w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/((?!api|static|.*\\..*|_next).*)",
  ],
};
