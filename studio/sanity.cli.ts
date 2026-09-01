import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  /**
   * Hostname for the free hosted Studio: https://<studioHost>.sanity.studio
   * Change this if the name is taken, then run `npx sanity deploy`.
   */
  studioHost: '1818creative',
  autoUpdates: true,
});
