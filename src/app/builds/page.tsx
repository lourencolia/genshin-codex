'use client'

import DashboardLayout from '../components/DashboardLayout'
import { useState, useEffect } from 'react'
import styles from './builds.module.css'

interface Build {
    element: string
    character: string
    role: string
    weapons: string
    artifacts: string
    main_stats: string
    substats: string
    talent_priority: string
}

export default function Builds() {
    const [builds, setBuilds] = useState<Build[]>([])
    const [filteredBuilds, setFilteredBuilds] = useState<Build[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedElement, setSelectedElement] = useState('all')
    const [loading, setLoading] = useState(true)

    const elements = ['all', 'Hydro', 'Pyro', 'Electro', 'Dendro', 'Cryo', 'Anemo', 'Geo']
    
    const elementColors: { [key: string]: string } = {
        'Hydro': '#4A9FFF',
        'Pyro': '#FF6B3D',
        'Electro': '#B388FF',
        'Dendro': '#7BC74D',
        'Cryo': '#7DD5ED',
        'Anemo': '#74C2A8',
        'Geo': '#F4A93C'
    }

    useEffect(() => {
        fetchBuilds()
    }, [])

    useEffect(() => {
        filterBuilds()
    }, [searchTerm, selectedElement, builds])

    const API_URL = process.env.NEXT_PUBLIC_API_URL 

    const fetchBuilds = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${API_URL}/builds`)
            const data = await response.json()
            setBuilds(data)
            setFilteredBuilds(data)
        } catch (error) {
            console.error('Erro ao buscar builds:', error)
        } finally {
            setLoading(false)
        }
    }

    const filterBuilds = () => {
        let filtered = builds

        if (selectedElement !== 'all') {
            filtered = filtered.filter(build => 
                build.element.toLowerCase() === selectedElement.toLowerCase()
            )
        }

        if (searchTerm) {
            filtered = filtered.filter(build =>
                build.character.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        setFilteredBuilds(filtered)
    }

    const getElementColor = (element: string) => {
        return elementColors[element] || '#667eea'
    }

    if (loading) {
        return (
            <DashboardLayout>
                <div className={styles.pageContent}>
                    <div className={styles.loadingContainer}>
                        <div className={styles.spinner}></div>
                        <p>Carregando builds...</p>
                    </div>
                </div>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div className={styles.pageContent}>
                <div className={styles.header}>
                    <h1 className={styles.headerTitle}>Genshin Impact Builds</h1>
                    <p className={styles.headerSubtitle}>
                        Encontre as melhores builds para seus personagens
                    </p>
                </div>

                <div className={styles.searchSection}>
                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder="Buscar personagem..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                        <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <div className={styles.filterContainer}>
                        <span className={styles.filterLabel}>Elemento:</span>
                        <div className={styles.elementButtons}>
                            {elements.map(element => (
                                <button
                                    key={element}
                                    onClick={() => setSelectedElement(element)}
                                    className={`${styles.elementButton} ${selectedElement === element ? styles.active : ''}`}
                                    style={{
                                        borderColor: element !== 'all' ? getElementColor(element) : '#667eea',
                                        backgroundColor: selectedElement === element 
                                            ? (element !== 'all' ? getElementColor(element) : '#667eea')
                                            : 'transparent'
                                    }}
                                >
                                    {element === 'all' ? 'Todos' : element}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.resultsCount}>
                    {filteredBuilds.length} {filteredBuilds.length === 1 ? 'build encontrada' : 'builds encontradas'}
                </div>

                <div className={styles.buildsGrid}>
                    {filteredBuilds.length > 0 ? (
                        filteredBuilds.map((build, index) => (
                            <div key={index} className={styles.buildCard}>
                                <div 
                                    className={styles.cardHeader}
                                    style={{ 
                                        background: `linear-gradient(135deg, ${getElementColor(build.element)}22 0%, ${getElementColor(build.element)}11 100%)`
                                    }}
                                >
                                    <div className={styles.elementBadge} style={{ backgroundColor: getElementColor(build.element) }}>
                                        {build.element}
                                    </div>
                                    <h2 className={styles.characterName}>{build.character}</h2>
                                    <p className={styles.role}>{build.role}</p>
                                </div>

                                <div className={styles.cardBody}>
                                    <div className={styles.infoSection}>
                                        <h3 className={styles.sectionTitle}>
                                            <span className={styles.icon}>⚔️</span>
                                            Armas
                                        </h3>
                                        <p className={styles.sectionContent}>{build.weapons}</p>
                                    </div>

                                    <div className={styles.infoSection}>
                                        <h3 className={styles.sectionTitle}>
                                            <span className={styles.icon}>✨</span>
                                            Artefatos
                                        </h3>
                                        <p className={styles.sectionContent}>{build.artifacts}</p>
                                    </div>

                                    <div className={styles.infoSection}>
                                        <h3 className={styles.sectionTitle}>
                                            <span className={styles.icon}>📊</span>
                                            Stats Principais
                                        </h3>
                                        <p className={styles.sectionContent}>{build.main_stats}</p>
                                    </div>

                                    <div className={styles.infoSection}>
                                        <h3 className={styles.sectionTitle}>
                                            <span className={styles.icon}>💎</span>
                                            Substats
                                        </h3>
                                        <p className={styles.sectionContent}>{build.substats}</p>
                                    </div>

                                    <div className={styles.infoSection}>
                                        <h3 className={styles.sectionTitle}>
                                            <span className={styles.icon}>🎯</span>
                                            Prioridade de Talentos
                                        </h3>
                                        <p className={styles.sectionContent}>{build.talent_priority}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noResults}>
                            <p>Nenhuma build encontrada com os filtros selecionados</p>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    )
}