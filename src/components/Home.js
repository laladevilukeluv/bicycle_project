import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Bike } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/hero.jpg'

export default function Home() {
  const { t } = useTranslation()

  return (
    <section className="home">
      <div className="hero">
        <img src={heroImage} alt={t('home.hero.imageAlt')} />
        <div className="hero-content">
          <h2>{t('home.hero.title')}</h2>
          <p>{t('home.hero.description')}</p>
          <Link to="/plans" className="cta-button">
            {t('home.hero.ctaButton')}
            <ChevronRight className="icon" />
          </Link>
        </div>
      </div>

      <div className="features">
        {[
          { 
            title: t('home.features.scenicRoutes.title'),
            description: t('home.features.scenicRoutes.description')
          },
          { 
            title: t('home.features.expertGuides.title'),
            description: t('home.features.expertGuides.description')
          },
          { 
            title: t('home.features.allSkillLevels.title'),
            description: t('home.features.allSkillLevels.description')
          },
        ].map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="why-choose-us">
        <h3>{t('home.whyChooseUs.title')}</h3>
        <ul>
          {[
            t('home.whyChooseUs.reason1'),
            t('home.whyChooseUs.reason2'),
            t('home.whyChooseUs.reason3'),
            t('home.whyChooseUs.reason4'),
          ].map((reason, index) => (
            <li key={index}>
              <Bike className="icon" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="cta-section">
        <h3>{t('home.ctaSection.title')}</h3>
        <Link to="/plans" className="cta-button">
          {t('home.ctaSection.button')}
          <ChevronRight className="icon" />
        </Link>
      </div>
    </section>
  )
}
{/*<a href="https://www.flaticon.com/free-icons/brompton" title="brompton icons">Brompton icons created by iconfield - Flaticon</a> */}
