import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import locationImage from '../assets/location.jpg'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section className="contact">
      <h2>{t('contactPage.title')}</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <Mail className="icon" />
            <div>
              <h3>{t('contactPage.email')}</h3>
              <a href="mailto:info@slowcycling.com">info@slowcycling.com</a>
            </div>
          </div>
          <div className="contact-item">
            <Phone className="icon" />
            <div>
              <h3>{t('contactPage.phone')}</h3>
              <a href="tel:+12345678900">+1 (234) 567-8900</a>
            </div>
          </div>
          <div className="contact-item">
            <MapPin className="icon" />
            <div>
              <h3>{t('contactPage.address')}</h3>
              <p>
                {t('contactPage.streetAddress')}<br />
                {t('contactPage.cityStateZip')}<br />
                {t('contactPage.country')}
              </p>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <img src={locationImage} alt={t('contactPage.mapAlt')} />
        </div>
      </div>
    </section>
  )
}