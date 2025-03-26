import React from 'react'
import { ArrowLeft, Phone, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, useParams, Navigate } from 'react-router-dom'
import TourTimetable from './TourTimetable'
import detailImage1 from '../assets/detail1.jpg'
import detailImage2 from '../assets/detail2.jpg'
import detailImage3 from '../assets/detail3.jpg'

export default function PlanDetail() {
  const { planId } = useParams()
  const { t, i18n } = useTranslation()
  const isJapanese = i18n.language === 'ja'

  // Define all plans data
  const plansData = {
    coastal: {
      id: 'coastal',
      title: t('plansPage.coastal.title'),
      description: t('plansPage.coastal.description'),
      image: detailImage1,
      fullDescription: t('plansPage.coastal.fullDescription'),
      highlights: t('plansPage.coastal.highlights', { returnObjects: true }),
      duration: t('plansPage.coastal.duration'),
      difficulty: t('plansPage.coastal.difficulty'),
      groupSize: t('plansPage.coastal.groupSize'),
      available: true
    },
    mountain: {
      id: 'mountain',
      title: t('plansPage.mountain.title'),
      description: isJapanese ? '準備中 - 近日公開予定' : 'Coming Soon - Stay Tuned!',
      image: detailImage2,
      fullDescription: t('plansPage.mountain.fullDescription'),
      highlights: t('plansPage.mountain.highlights', { returnObjects: true }),
      duration: t('plansPage.mountain.duration'),
      difficulty: t('plansPage.mountain.difficulty'),
      groupSize: t('plansPage.mountain.groupSize'),
      available: false,
      comingSoon: true
    },
    city: {
      id: 'city',
      title: t('plansPage.city.title'),
      description: isJapanese ? '準備中 - 近日公開予定' : 'Coming Soon - Stay Tuned!',
      image: detailImage3,
      fullDescription: t('plansPage.city.fullDescription'),
      highlights: t('plansPage.city.highlights', { returnObjects: true }),
      duration: t('plansPage.city.duration'),
      difficulty: t('plansPage.city.difficulty'),
      groupSize: t('plansPage.city.groupSize'),
      available: false,
      comingSoon: true
    }
  }

  // Get the current plan data
  const plan = plansData[planId]

  // If plan doesn't exist or is not available, redirect to plans page
  if (!plan || (!plan.available && plan.comingSoon)) {
    return <Navigate to="/plans" replace />
  }

  return (
    <div className="individual-plan">
      <Link to="/plans" className="back-button">
        <ArrowLeft className="icon" />
        {t('plansPage.backToPlans')}
      </Link>
      
      <div>
        <div className="plan-details">
          <div className="plan-image-container">
            <img src={plan.image || "/placeholder.svg"} alt={plan.title} className="plan-image" />
          </div>
          
          <div className="plan-info-container">
            <h2>{plan.title}</h2>
            <p>{plan.fullDescription}</p>
            <div className="plan-info">
              <div>
                <strong>{t('plansPage.duration')}:</strong> {plan.duration}
              </div>
              <div>
                <strong>{t('plansPage.difficulty')}:</strong> {plan.difficulty}
              </div>
              <div>
                <strong>{t('plansPage.groupSize')}:</strong> {plan.groupSize}
              </div>
            </div>
            <h3>{t('plansPage.tourHighlights')}</h3>
            <ul>
              {plan.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            
            {/* Call to Book button - placed under tour highlights */}
            <div className="call-to-book-container">
              <a href="tel:+8109072924723" className="call-to-book-button">
                <Phone className="icon" />
                {t('plansPage.callToBook')}
              </a>
            </div>
          </div>
        </div>
        
        {/* Tour Schedule section - only for coastal tour */}
        {plan.id === 'coastal' && (
          <div className="tour-schedule-section">
            <h3 className="schedule-title">
              {t('plansPage.coastal.schedule', 'Tour Schedule')}
            </h3>
            <TourTimetable />
          </div>
        )}
      </div>
    </div>
  )
}