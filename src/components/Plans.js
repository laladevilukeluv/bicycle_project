import React, { useState } from 'react'
import { ArrowLeft, Phone, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import detailImage1 from '../assets/detail1.jpg'
import detailImage2 from '../assets/detail2.jpg'
import detailImage3 from '../assets/detail3.jpg'
import TourTimetable from '../components/TourTimetable'

export default function Plans() {
  const [activePlan, setActivePlan] = useState(null)
  const { t, i18n } = useTranslation()
  const isJapanese = i18n.language === 'ja'

  const plans = [
    {
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
    {
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
    {
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
  ]

  const handlePlanClick = (planId) => {
    const plan = plans.find(p => p.id === planId);
    if (plan && plan.available) {
      setActivePlan(planId);
    }
  }

  return (
    <section className="plans">
      {!activePlan ? (
        <>
          <h2>{t('plansPage.title')}</h2>
          <div className="plan-cards">
            {plans.map((plan) => (
              <div key={plan.id} className={`plan-card ${plan.comingSoon ? 'coming-soon' : ''}`}>
                <div className="plan-image-wrapper">
                  <img src={plan.image || "/placeholder.svg"} alt={plan.title} />
                  {plan.comingSoon && (
                    <div className="coming-soon-overlay">
                      <Clock className="coming-soon-icon" />
                      <span>{isJapanese ? '近日公開' : 'Coming Soon'}</span>
                    </div>
                  )}
                </div>
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <button 
                  onClick={() => handlePlanClick(plan.id)}
                  className={plan.comingSoon ? 'disabled' : ''}
                  disabled={!plan.available}
                >
                  {plan.comingSoon 
                    ? (isJapanese ? '準備中' : 'Coming Soon') 
                    : t('plansPage.learnMore')}
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="individual-plan">
          <button className="back-button" onClick={() => setActivePlan(null)}>
            <ArrowLeft className="icon" />
            {t('plansPage.backToPlans')}
          </button>
          
          {plans.map((plan) => plan.id === activePlan && (
            <div key={plan.id}>
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
                </div>
              </div>
              
              {/* Tour Schedule section - now placed after highlights and centered */}
              {plan.id === 'coastal' && (
                <div className="tour-schedule-section">
                  <h3 className="schedule-title">
                    {t('plansPage.coastal.schedule', 'Tour Schedule')}
                  </h3>
                  <TourTimetable />
                  
                  {/* Call to Book button - now placed under the timetable */}
                  <div className="call-to-book-container">
                    <a href="tel:+810985397060" className="call-to-book-button">
                      <Phone className="icon" />
                      {t('plansPage.callToBook')}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}