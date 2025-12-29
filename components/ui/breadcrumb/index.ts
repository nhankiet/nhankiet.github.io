import { ChevronRight, MoreHorizontal } from 'lucide-vue-next'
import { h, type Component } from 'vue'

export const Breadcrumb = (props: any, { slots }: any) => h('nav', { 'aria-label': 'breadcrumb', ...props }, h('ol', { class: 'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5' }, slots.default?.()))

export const BreadcrumbList = (props: any, { slots }: any) => h('ol', { class: 'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5', ...props }, slots.default?.())

export const BreadcrumbItem = (props: any, { slots }: any) => h('li', { class: 'inline-flex items-center gap-1.5', ...props }, slots.default?.())

export const BreadcrumbLink = (props: any, { slots }: any) => {
    const { asChild, ...rest } = props
    if (asChild) return h(slots.default?.()[0], { class: 'transition-colors hover:text-foreground', ...rest })
    return h('a', { class: 'transition-colors hover:text-foreground', ...rest }, slots.default?.())
}

export const BreadcrumbPage = (props: any, { slots }: any) => h('span', { role: 'link', 'aria-disabled': 'true', 'aria-current': 'page', class: 'font-normal text-foreground', ...props }, slots.default?.())

export const BreadcrumbSeparator = (props: any, { slots }: any) => {
    return h('li', { role: 'presentation', 'aria-hidden': 'true', class: '[&>svg]:w-3.5 [&>svg]:h-3.5', ...props }, slots ? slots.default?.() : h(ChevronRight))
}

export const BreadcrumbEllipsis = (props: any, { slots }: any) => {
    return h('span', { role: 'presentation', 'aria-hidden': 'true', class: 'flex h-9 w-9 items-center justify-center', ...props }, slots ? slots.default?.() : h(MoreHorizontal, { class: 'h-4 w-4' }))
}
