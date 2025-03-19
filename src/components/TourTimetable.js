import React from 'react'
import { useTranslation } from 'react-i18next'
import { Clock, MapPin } from 'lucide-react'

export default function TourTimetable() {
  const { t, i18n } = useTranslation()
  const isJapanese = i18n.language === 'ja'

  // Tour schedule data with both languages
  const tourData = {
    title: {
      en: "Coastal Tour: Experience cycling with folding Brompton bicycles and trains from Aoshima to Nichinan",
      ja: "海岸ツアー南国の美しい海岸線、魅力溢れる観光スポットが豊富な青島から日南までを「折りたたみ自転車Brompton」で電車を交えたサイクリングを体験しませんか？"
    },
    theme: {
      en: "This tour's theme is \"Leisurely Sightseeing Cycling\".",
      ja: "この企画は「のんびり観光サイクリング」をテーマにしてます。"
    },
    schedule: [
      { time: "09:10", activityJa: "宮崎駅発", activityEn: "Depart from Miyazaki Station" },
      { time: "09:30", activityJa: "木花運動公園着", activityEn: "Arrive at Kibana Sports Park" },
      { time: "", activityJa: "青島観光", activityEn: "Aoshima Sightseeing" },
      { time: "11:00", activityJa: "ひで丸にて昼食", activityEn: "Lunch at Hidemaru" },
      { time: "", activityJa: "堀切峠", activityEn: "Horikiri Pass" },
      { time: "13:07", activityJa: "内海駅発", activityEn: "Depart from Uchiumi Station" },
      { time: "13:16", activityJa: "伊比井駅着", activityEn: "Arrive at Ibii Station" },
      { time: "", activityJa: "サンメッセ日南、鵜戸神宮", activityEn: "Sun Messe Nichinan, Udo Shrine" },
      { time: "15:00", activityJa: "ジャンボタクシー(またはタクシー）で飫肥", activityEn: "Take Jumbo Taxi (or regular taxi) to Obi" },
      { time: "", activityJa: "飫肥の街散策（人力車予約、四半的予約）", activityEn: "Explore Obi Town (rickshaw reservation, Shihanmato reservation)" },
      { time: "16:27", activityJa: "飫肥駅発", activityEn: "Depart from Obi Station" },
      { time: "17:49", activityJa: "宮崎駅着", activityEn: "Arrive at Miyazaki Station" },
      { time: "", activityJa: "★　豫章館（よしょうかん）着付け・書道・茶道の体験　一時間半程度", activityEn: "★ Yoshokan: Experience kimono dressing, calligraphy, and tea ceremony (approx. 1.5 hours)", special: true },
      { time: "17:56", activityJa: "飫肥駅発", activityEn: "Depart from Obi Station" },
      { time: "18:59", activityJa: "宮崎駅着", activityEn: "Arrive at Miyazaki Station" }
    ]
  }

  return (
    <div className="tour-timetable">
      <div className="timetable-header">
        <h3 className="timetable-title">
          {isJapanese ? tourData.title.ja : tourData.title.en}
        </h3>
        <p className="timetable-theme">
          {isJapanese ? tourData.theme.ja : tourData.theme.en}
        </p>
      </div>

      <div className="timetable-container">
        <table className="timetable">
          <thead>
            <tr>
              <th className="time-header">
                <Clock className="icon" size={16} />
                {isJapanese ? "時間" : "Time"}
              </th>
              <th className="activity-header">
                <MapPin className="icon" size={16} />
                {isJapanese ? "活動" : "Activity"}
              </th>
            </tr>
          </thead>
          <tbody>
            {tourData.schedule.map((item, index) => (
              <tr key={index} className={item.special ? "special-row" : ""}>
                <td className="time-cell">{item.time}</td>
                <td className="activity-cell">
                  {isJapanese ? item.activityJa : item.activityEn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}