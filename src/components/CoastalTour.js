import React from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import TourTimetable from '../components/TourTimetable'
import './TourTimetable.css'

export default function CoastalTour() {
  const { t } = useTranslation()

  return (
    <section className="coastal-tour">
      <Link to="/plans" className="back-button">
        <ArrowLeft className="icon" />
        {t('plansPage.backToPlans')}
      </Link>
      
      <h2>{t('plansPage.coastal.title')}</h2>
      <p className="tour-description">{t('plansPage.coastal.fullDescription')}</p>
      
      <h3 className="schedule-title">{t('plansPage.coastal.schedule')}</h3>
      <TourTimetable />
      
      <div className="tour-info">
        <div>
          <strong>{t('plansPage.duration')}:</strong> {t('plansPage.coastal.duration')}
        </div>
        <div>
          <strong>{t('plansPage.difficulty')}:</strong> {t('plansPage.coastal.difficulty')}
        </div>
        <div>
          <strong>{t('plansPage.groupSize')}:</strong> {t('plansPage.coastal.groupSize')}
        </div>
      </div>
    </section>
  )
}