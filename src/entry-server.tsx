import { QueryClient } from "@tanstack/react-query";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";

export async function render(url: string) {
  const queryClient = new QueryClient();

  const app = (
    <AppProviders queryClient={queryClient}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>
  );

  return renderToString(app);
}
