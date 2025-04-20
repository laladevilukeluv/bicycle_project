import { Clock } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import detailImage1 from "../assets/detail1.jpg"
import detailImage2 from "../assets/detail2.jpg"
import detailImage3 from "../assets/detail3.jpg"

export default function Plans() {
  const { t, i18n } = useTranslation()
  const isJapanese = i18n.language === "ja"
  const isChinese = i18n.language === "zh"

  // Function to get the coming soon text based on language
  const getComingSoonText = () => {
    if (isJapanese) return "準備中 - 近日公開予定"
    if (isChinese) return "准备中 - 即将推出"
    return "Coming Soon - Stay Tuned!"
  }

  // Function to get the button text for unavailable plans
  const getUnavailableButtonText = () => {
    if (isJapanese) return "準備中"
    if (isChinese) return "准备中"
    return "Coming Soon"
  }

  // Function to get the overlay text for coming soon plans
  const getOverlayText = () => {
    if (isJapanese) return "近日公開"
    if (isChinese) return "即将推出"
    return "Coming Soon"
  }

  const plans = [
    {
      id: "coastal",
      title: t("plansPage.coastal.title"),
      description: t("plansPage.coastal.description"),
      image: detailImage1,
      available: true,
    },
    {
      id: "mountain",
      title: t("plansPage.mountain.title"),
      description: getComingSoonText(),
      image: detailImage2,
      available: false,
      comingSoon: true,
    },
    {
      id: "city",
      title: t("plansPage.city.title"),
      description: getComingSoonText(),
      image: detailImage3,
      available: false,
      comingSoon: true,
    },
  ]

  return (
    <section className="plans">
      <h2>{t("plansPage.title")}</h2>
      <div className="plan-cards">
        {plans.map((plan) => (
          <div key={plan.id} className={`plan-card ${plan.comingSoon ? "coming-soon" : ""}`}>
            <div className="plan-image-wrapper">
              <img src={plan.image || "/placeholder.svg"} alt={plan.title} />
              {plan.comingSoon && (
                <div className="coming-soon-overlay">
                  <Clock className="coming-soon-icon" />
                  <span>{getOverlayText()}</span>
                </div>
              )}
            </div>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            {plan.available ? (
              <Link to={`/plans/${plan.id}`} className="plan-link-button">
                {t("plansPage.learnMore")}
              </Link>
            ) : (
              <button className="disabled" disabled>
                {getUnavailableButtonText()}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
