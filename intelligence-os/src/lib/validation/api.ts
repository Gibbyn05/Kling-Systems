import { z } from "zod";

export const organizationQuerySchema = z.object({
  organizationId: z.string().uuid().default("00000000-0000-4000-8000-000000000001"),
});

export const dashboardQuerySchema = organizationQuerySchema.extend({
  range: z.enum(["today", "7d", "30d"]).default("30d"),
});

export const analyticsQuerySchema = organizationQuerySchema.extend({
  range: z.enum(["today", "7d", "30d", "all"]).default("30d"),
  utmSource: z.string().max(100).optional(),
  utmMedium: z.string().max(100).optional(),
  utmCampaign: z.string().max(200).optional(),
  closerId: z.string().uuid().optional(),
  includeUnattributed: z.stringbool().default(true),
});

export const taskMutationSchema = z.object({
  organizationId: z.string().uuid(),
  title: z.string().min(2).max(240),
  description: z.string().max(4000).optional(),
  priority: z.enum(["critical", "high", "medium", "low"]).default("medium"),
  status: z.enum(["open", "in_progress", "completed", "cancelled"]).default("open"),
  dueAt: z.iso.datetime({ offset: true }).optional(),
});

export const followupPreviewSchema = z.object({
  organizationId: z.string().uuid(),
  sequenceId: z.string().uuid().optional(),
  audienceType: z.enum(["lead", "client"]),
  recipientIds: z.array(z.string()).min(1).max(500),
  channel: z.enum(["email", "whatsapp", "imessage", "instagram", "sms", "demo"]),
  templateBody: z.string().min(1).max(5000),
});

export const followupSendSchema = followupPreviewSchema.extend({
  confirmed: z.literal(true),
  confirmationRecipientCount: z.number().int().positive(),
  batchIdempotencyKey: z.string().min(16).max(200),
});

export const aiQuerySchema = z.object({
  organizationId: z.string().uuid(),
  question: z.string().min(3).max(4000),
  range: z.enum(["today", "7d", "30d", "all"]).default("30d"),
});
