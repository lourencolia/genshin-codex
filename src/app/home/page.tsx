"use client"

import styles from './home.module.css'

export default function Home() {
    // Dados mockados
    const playerData = {
        name: "sertralia",
        uid: "620630241",
        ar: 59,
        wl: 9,
        signature: "se lascar tds vcs com a columbina",
        achievements: {
            conquistas: 946,
            abismo: "10-3",
            showcase: 9
        }
    }

    const featuredCharacters = [
        { name: "Xiao", level: 90 },
        { name: "Wanderer", level: 90 },
        { name: "Yelan", level: 90 }
    ]

    const quickAccess = [
        { icon: "📚", label: "Builds" },
        { icon: "👥", label: "Personagens" },
        { icon: "⭐", label: "Artefatos" },
        { icon: "🗺️", label: "Mapa" }
    ]

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logo}>Genshin Codex</div>
                <nav>
                    <ul className={styles.navMenu}>
                        <li className={`${styles.navItem} ${styles.navItemActive}`}>🏠 Home</li>
                        <li className={styles.navItem}>⚔️ Builds</li>
                        <li className={styles.navItem}>⭐ Pity</li>
                        <li className={styles.navItem}>⚙️ Configurações</li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <div className={styles.header}>
                    <h1 className={styles.headerTitle}>Registro de Aventura</h1>
                    <p className={styles.headerSubtitle}>Bem-vindo de volta, {playerData.name}!</p>
                </div>

                {/* Profile Card */}
                <div className={styles.profileCard}>
                    <div className={styles.profileHeader}>
                        <div className={styles.avatarContainer}>
                            <div className={styles.avatar} style={{ background: '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', color: 'white' }}>
                                👤
                            </div>
                        </div>
                        <div className={styles.profileInfo}>
                            <h2 className={styles.playerName}>{playerData.name}</h2>
                            <p className={styles.uid}>UID: {playerData.uid}</p>
                            <div className={styles.gameStats}>
                                <div className={styles.statItem}>
                                    <span className={styles.statIcon}>⭐</span>
                                    <span className={styles.statText}>AR {playerData.ar}</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statIcon}>🌍</span>
                                    <span className={styles.statText}>WL {playerData.wl}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.signature}>
                        "{playerData.signature}"
                    </div>
                </div>

                {/* Stats Grid */}
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statCardHeader}>
                            <span className={styles.statCardIcon}>🏆</span>
                        </div>
                        <p className={styles.statCardValue}>{playerData.achievements.conquistas}</p>
                        <p className={styles.statCardLabel}>Conquistas</p>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statCardHeader}>
                            <span className={styles.statCardIcon}>🏛️</span>
                        </div>
                        <p className={styles.statCardValue}>{playerData.achievements.abismo}</p>
                        <p className={styles.statCardLabel}>Abismo Espiral</p>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statCardHeader}>
                            <span className={styles.statCardIcon}>👥</span>
                        </div>
                        <p className={styles.statCardValue}>{playerData.achievements.showcase}</p>
                        <p className={styles.statCardLabel}>Showcase</p>
                    </div>
                </div>

                {/* Featured Characters */}
                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Personagens em Destaque</h3>
                    <div className={styles.charactersGrid}>
                        {featuredCharacters.map((char, index) => (
                            <div key={index} className={styles.characterCard}>
                                <div className={styles.characterAvatar} style={{ background: '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: 'white' }}>
                                    ⚔️
                                </div>
                                <h4 className={styles.characterName}>{char.name}</h4>
                                <p className={styles.characterLevel}>Nível {char.level}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}