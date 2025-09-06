
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes";
import { Toaster } from "@/components/ui/sonner";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";

function App() {
  const router = createBrowserRouter(Routes);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
      },
    },
  });

  const persister = createAsyncStoragePersister({
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  });

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}>
      <RouterProvider router={router} />
      <Toaster />
    </PersistQueryClientProvider>
  );
}

export default App;
