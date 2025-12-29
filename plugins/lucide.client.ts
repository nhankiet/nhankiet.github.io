// Lucide icons plugin for Nuxt
// Usage: <Icon name="Home" /> or import specific icons

import { defineNuxtPlugin } from '#app'
import * as LucideIcons from 'lucide-vue-next'

export default defineNuxtPlugin((nuxtApp) => {
    // Register commonly used icons as global components
    const icons = [
        'Home',
        'User',
        'Mail',
        'Phone',
        'MapPin',
        'Github',
        'Linkedin',
        'Twitter',
        'ExternalLink',
        'ChevronRight',
        'ChevronLeft',
        'ChevronDown',
        'ChevronUp',
        'ArrowRight',
        'ArrowLeft',
        'Sun',
        'Moon',
        'Menu',
        'X',
        'Search',
        'Settings',
        'Download',
        'Upload',
        'Check',
        'Copy',
        'Code',
        'Terminal',
        'Folder',
        'File',
        'FileText',
        'Image',
        'Video',
        'Music',
        'Calendar',
        'Clock',
        'Heart',
        'Star',
        'Bookmark',
        'Share',
        'Send',
        'Trash',
        'Edit',
        'Plus',
        'Minus',
        'Eye',
        'EyeOff',
        'Lock',
        'Unlock',
        'Key',
        'Shield',
        'Zap',
        'Award',
        'Briefcase',
        'GraduationCap',
        'Building',
        'Globe',
        'Database',
        'Server',
        'Cloud',
        'Cpu',
        'Bot',
        'BrainCircuit',
        'Rocket',
    ]

    icons.forEach((iconName) => {
        const icon = (LucideIcons as any)[iconName]
        if (icon) {
            nuxtApp.vueApp.component(iconName, icon)
        }
    })
})
