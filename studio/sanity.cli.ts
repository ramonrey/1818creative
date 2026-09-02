import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  /**
   * Hostname for the free hosted Studio: https://<studioHost>.sanity.studio
   * Must start with a letter (so "1818creative" isn't allowed). Change this
   * and re-run `npx sanity deploy` to rename it.
   */
  studioHost: 'creative1818',
  deployment: {
    appId: 'n058l9v1y4ehzse66e9dhibz',
    autoUpdates: true,
  },
});
