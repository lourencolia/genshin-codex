"use client"

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Sword, Star, Settings } from 'lucide-react'
import styles from './layout.module.css'

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    
    const menuItems = [
        { href: '/home', icon: Home, label: 'Home' },
        { href: '/builds', icon: Sword, label: 'Builds' },
        { href: '/pity', icon: Star, label: 'Pity' },
        { href: '/configuracoes', icon: Settings, label: 'Configurações' },
    ]

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logo}>Genshin Codex</div>
                <nav>
                    <ul className={styles.navMenu}>
                        {menuItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <li 
                                    key={item.href}
                                    className={`${styles.navItem} ${pathname === item.href ? styles.navItemActive : ''}`}
                                >
                                    <Link href={item.href}>
                                        <Icon size={20} className={styles.navIcon} />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    )
}