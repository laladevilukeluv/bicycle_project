import React, { useState } from 'react'
import { ArrowLeft, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import detailImage1 from '../assets/detail1.jpg'
import detailImage2 from '../assets/detail2.jpg'
import detailImage3 from '../assets/detail3.jpg'

export default function Plans() {
  const [activePlan, setActivePlan] = useState(null)
  const { t } = useTranslation()

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
      groupSize: t('plansPage.coastal.groupSize')
    },
    {
      id: 'mountain',
      title: t('plansPage.mountain.title'),
      description: t('plansPage.mountain.description'),
      image: detailImage2,
      fullDescription: t('plansPage.mountain.fullDescription'),
      highlights: t('plansPage.mountain.highlights', { returnObjects: true }),
      duration: t('plansPage.mountain.duration'),
      difficulty: t('plansPage.mountain.difficulty'),
      groupSize: t('plansPage.mountain.groupSize')
    },
    {
      id: 'city',
      title: t('plansPage.city.title'),
      description: t('plansPage.city.description'),
      image: detailImage3,
      fullDescription: t('plansPage.city.fullDescription'),
      highlights: t('plansPage.city.highlights', { returnObjects: true }),
      duration: t('plansPage.city.duration'),
      difficulty: t('plansPage.city.difficulty'),
      groupSize: t('plansPage.city.groupSize')
    }
  ]

  return (
    <section className="plans">
      {!activePlan ? (
        <>
          <h2>{t('plansPage.title')}</h2>
          <div className="plan-cards">
            {plans.map((plan) => (
              <div key={plan.id} className="plan-card">
                <img src={plan.image} alt={plan.title} />
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <button onClick={() => setActivePlan(plan.id)}>{t('plansPage.learnMore')}</button>
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
            <div key={plan.id} className="plan-details">
              <div>
                <img src={plan.image} alt={plan.title} className="plan-image" />
              </div>
              <div>
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
                <a href="tel:+1234567890" className="call-to-book-button">
                  <Phone className="icon" />
                  {t('plansPage.callToBook')}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}