import { serve } from "inngest/next";
import { inngest } from "@/lib/ingest/client";
import { sendDailyNewsSummary, sendSignUpEmail } from "@/lib/ingest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendSignUpEmail, sendDailyNewsSummary],
});
