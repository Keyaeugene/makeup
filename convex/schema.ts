// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  bookings: defineTable({
    service: v.string(),
    date: v.string(),
    name: v.string(),
    email: v.string(),
  }),
  inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
  }),
});