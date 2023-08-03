import { appRouter, createContextInner } from "@acme/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

// export API handler
// export default createNextApiHandler({
//   router: appRouter,
//   createContext,
// });

// If you need to enable cors, you can do so like this:
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   // Enable cors
//   await cors(req, res);

//   // Let the tRPC handler do its magic
//   return createNextApiHandler({
//     router: appRouter,
//     createContext,
//   })(req, res);
// };

// export default handler;

export const config = {
  runtime: "edge",
};

// export API handler
export default async function handler(req: NextRequest) {
  const auth = getAuth(req);
  return fetchRequestHandler({
    req,
    endpoint: "/api/trpc",
    router: appRouter,
    createContext() {
      const auth = getAuth(req);
      return createContextInner({
        req,
        auth,
      });
    },
  });
}
