import {
  index,
  layout,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/layout-app.tsx", [
    layout("layouts/layout-padded.tsx", [
      index("routes/home.tsx"),
      route("/about", "routes/about.tsx"),
      route("/examples", "routes/examples.tsx"),
      route("/examples/:slug", "routes/examples/slug.tsx"),
    ]),

    layout("layouts/layout-auth.tsx", [
      route("/signup", "routes/signup.tsx"),
      route("/signin", "routes/signin.tsx"),
      route("/signout", "routes/signout.tsx"),
      route("/forgot-password", "routes/forgot-password.tsx"),
      route("/dashboard", "routes/dashboard.tsx"),
    ]),

    route("*", "routes/404.tsx"),
  ]),

  route("/action/set-theme", "routes/action/set-theme.ts"),
  route("/action/social", "routes/action/social.ts"),
  route("/api/auth/*", "routes/api/auth.ts"),
  route("/api/trpc/*", "routes/api/trpc.ts"),
] satisfies RouteConfig;
