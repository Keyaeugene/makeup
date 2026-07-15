// convex/submissions.ts
import { mutation, internalMutation, query } from "./_generated/server";
import { v } from "convex/values";

// --- BOOKINGS ---

export const createBooking = mutation({
  args: {
    service: v.string(),
    date: v.string(),
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const bookingId = await ctx.db.insert("bookings", args);
    return bookingId;
  },
});

export const getBookings = query({
  handler: async (ctx) => {
    return await ctx.db.query("bookings").order("desc").collect();
  },
});

// --- INQUIRIES ---

// Internal mutation: called only by the action in actions.ts
export const insertInquiry = internalMutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const inquiryId = await ctx.db.insert("inquiries", args);
    return inquiryId;
  },
});

export const getInquiries = query({
  handler: async (ctx) => {
    return await ctx.db.query("inquiries").order("desc").collect();
  },
});