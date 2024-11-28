import React from 'react'
import { useTranslation } from 'react-i18next'
import aboutUsImage from '../assets/about_us.jpg'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="about">
      <h2>{t('aboutPage.title')}</h2>
      <div className="about-content">
        <div>
          <p>{t('aboutPage.paragraph1')}</p>
          <p>{t('aboutPage.paragraph2')}</p>
          <p>{t('aboutPage.paragraph3')}</p>
        </div>
        <div>
          <img src={aboutUsImage} alt={t('aboutPage.imageAlt')} />
        </div>
      </div>
    </section>
  )
}