"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // SSR 환경에서는, 기본 staleTime을 0 이상으로 설정하여
        // 클라이언트에서 바로 다시 데이터를 가져오는 것을 방지하는 것이 일반적
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    // 서버에서는 항상 새로운 QueryClient를 만듬
    return makeQueryClient();
  } else {
    // 브라우저에서는 QueryClient가 없을 때만 새로운 클라이언트를 만듬.
    // 이 작업은 React가 초기 렌더링 중 중단될 때 새로운 클라이언트를
    // 다시 생성하지 않도록 중요함
    // 만약 QueryClient 생성을 감싸는 suspanse 경계가 있다면
    // 이 단계가 필요하지 않을 수도 있습니다.
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
export default function Providers({ children }: { children: React.ReactNode }) {
  // NOTE: QueryClient를 초기화할 때 useState를 피하세요.
  // 만약 이코드와 suspend될 수 있는 코드 사이에 suspense 경계가 없으면
  // React는 초기 렌더링 중에 클라이언트를 버릴 수 있습니다.
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
