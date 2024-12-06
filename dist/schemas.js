import { z } from 'zod';
// Input Schemas
// Projects
export const ListProjectsInputSchema = z.object({
    ref: z.string().optional()
});
export const GetProjectInputSchema = z.object({
    ref: z.string()
});
export const CreateProjectInputSchema = z.object({
    name: z.string(),
    organization_id: z.string(),
    region: z.string(),
    db_pass: z.string(),
    plan: z.string().optional()
});
export const DeleteProjectInputSchema = z.object({
    ref: z.string()
});
// Organizations
export const ListOrganizationsInputSchema = z.object({});
export const GetOrganizationInputSchema = z.object({
    slug: z.string()
});
export const CreateOrganizationInputSchema = z.object({
    name: z.string(),
    billing_email: z.string()
});
export const UpdateOrganizationInputSchema = z.object({
    slug: z.string(),
    name: z.string().optional(),
    billing_email: z.string().optional()
});
// Project API Keys
export const GetProjectApiKeysInputSchema = z.object({
    ref: z.string(),
    // Optional filter by key name
    name: z.string().optional()
});
