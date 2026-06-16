'use server';
/**
 * @fileOverview A Genkit flow to generate a compelling 50-word introduction for a full-stack developer portfolio
 * based on provided project data.
 *
 * - generateDevPitch - A function that handles the generation of the developer pitch.
 * - GenerateDevPitchInput - The input type for the generateDevPitch function.
 * - GenerateDevPitchOutput - The return type for the generateDevPitch function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ProjectSchema = z.object({
  name: z.string().describe('The name of the project.'),
  description: z.string().describe('A brief description of the project.'),
  technologiesUsed: z.array(z.string()).describe('A list of technologies used in the project.'),
});

const GenerateDevPitchInputSchema = z.object({
  projects: z.array(ProjectSchema).describe('An array of projects to be analyzed for the pitch.'),
});
export type GenerateDevPitchInput = z.infer<typeof GenerateDevPitchInputSchema>;

const GenerateDevPitchOutputSchema = z.string().describe('A compelling 50-word introduction for a developer portfolio.');
export type GenerateDevPitchOutput = z.infer<typeof GenerateDevPitchOutputSchema>;

export async function generateDevPitch(input: GenerateDevPitchInput): Promise<GenerateDevPitchOutput> {
  return generateDevPitchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDevPitchPrompt',
  input: { schema: GenerateDevPitchInputSchema },
  output: { schema: GenerateDevPitchOutputSchema },
  prompt: `You are an AI-powered tool that generates compelling introductions for full-stack developer portfolios.
Your goal is to create a concise, engaging 50-word introduction that highlights the developer's skills and experience based on their projects.

Analyze the following project data and generate a 50-word introduction:

{{#each projects}}
Project Name: {{this.name}}
Description: {{this.description}}
Technologies: {{#each this.technologiesUsed}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
---
{{/each}}

Ensure the introduction is exactly 50 words and focuses on the developer's overall capabilities demonstrated by these projects.`,
});

const generateDevPitchFlow = ai.defineFlow(
  {
    name: 'generateDevPitchFlow',
    inputSchema: GenerateDevPitchInputSchema,
    outputSchema: GenerateDevPitchOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
