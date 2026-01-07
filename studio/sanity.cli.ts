import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: 'fa80crkw',
        dataset: 'production'
    },
    deployment: {
        appId: 'tnh7nxmtjlizyeqpvg0uki7m',
        autoUpdates: true,
    },
})
