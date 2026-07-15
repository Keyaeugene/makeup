// convex/actions.ts
"use node";
import { action } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const createInquiry = action({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args): Promise<string> => {
    // 1. Save to the database via the internal mutation
    const inquiryId: string = await ctx.runMutation(internal.submissions.insertInquiry, args);

    // 2. Send email notification via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Studio Inquiries <onboarding@resend.dev>",
        to: "atienoshalline29@gmail.com",
        subject: `New inquiry from ${args.name}`,
        text: `Name: ${args.name}\nEmail: ${args.email}\n\nMessage:\n${args.message}`,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend email failed:", errText);
    }

    return inquiryId;
  },
});