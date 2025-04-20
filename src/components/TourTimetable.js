import { useTranslation } from "react-i18next"
import { Clock, MapPin } from "lucide-react"

export default function TourTimetable() {
  const { t, i18n } = useTranslation()
  const isJapanese = i18n.language === "ja"
  const isChinese = i18n.language === "zh"

  // Tour schedule data with all three languages
  const tourData = {
    title: {
      en: "Coastal Tour: Experience cycling with folding Brompton bicycles and trains from Aoshima to Nichinan",
      ja: "海岸ツアー南国の美しい海岸線、魅力溢れる観光スポットが豊富な青島から日南までを「折りたたみ自転車Brompton」で電車を交えたサイクリングを体験しませんか？",
      zh: "海岸之旅：体验从青岛到日南的折叠Brompton自行车和火车骑行",
    },
    theme: {
      en: 'This tour\'s theme is "Leisurely Sightseeing Cycling".',
      ja: "この企画は「のんびり観光サイクリング」をテーマにしてます。",
      zh: '本次旅行的主题是"悠闲观光骑行"。',
    },
    schedule: [
      {
        time: "09:10",
        activityJa: "宮崎駅発",
        activityEn: "Depart from Miyazaki Station",
        activityZh: "从宫崎站出发",
      },
      {
        time: "09:30",
        activityJa: "木花運動公園着",
        activityEn: "Arrive at Kibana Sports Park",
        activityZh: "抵达木花运动公园",
      },
      {
        time: "",
        activityJa: "青島観光",
        activityEn: "Aoshima Sightseeing",
        activityZh: "青岛观光",
      },
      {
        time: "11:00",
        activityJa: "ひで丸にて昼食",
        activityEn: "Lunch at Hidemaru",
        activityZh: "在秀丸餐厅午餐",
      },
      {
        time: "",
        activityJa: "堀切峠",
        activityEn: "Horikiri Pass",
        activityZh: "堀切峠",
      },
      {
        time: "13:07",
        activityJa: "内海駅発",
        activityEn: "Depart from Uchiumi Station",
        activityZh: "从内海站出发",
      },
      {
        time: "13:16",
        activityJa: "伊比井駅着",
        activityEn: "Arrive at Ibii Station",
        activityZh: "抵达伊比井站",
      },
      {
        time: "",
        activityJa: "サンメッセ日南、鵜戸神宮",
        activityEn: "Sun Messe Nichinan, Udo Shrine",
        activityZh: "日南太阳神庙，鹈户神宫",
      },
      {
        time: "15:00",
        activityJa: "ジャンボタクシー(またはタクシー）で飫肥",
        activityEn: "Take Jumbo Taxi (or regular taxi) to Obi",
        activityZh: "乘坐大型出租车（或普通出租车）前往饱肥",
      },
      {
        time: "",
        activityJa: "飫肥の街散策（人力車予約、四半的予約）",
        activityEn: "Explore Obi Town (rickshaw reservation, Shihanmato reservation)",
        activityZh: "探索饱肥城镇（预约人力车，预约四半的）",
      },
      {
        time: "16:27",
        activityJa: "飫肥駅発",
        activityEn: "Depart from Obi Station",
        activityZh: "从饱肥站出发",
      },
      {
        time: "17:49",
        activityJa: "宮崎駅着",
        activityEn: "Arrive at Miyazaki Station",
        activityZh: "抵达宫崎站",
      },
      {
        time: "",
        activityJa: "★　豫章館（よしょうかん）着付け・書道・茶道の体験　一時間半程度",
        activityEn: "★ Yoshokan: Experience kimono dressing, calligraphy, and tea ceremony (approx. 1.5 hours)",
        activityZh: "★ 豫章馆：体验和服穿着、书法和茶道（约1.5小时）",
        special: true,
      },
      {
        time: "17:56",
        activityJa: "飫肥駅発",
        activityEn: "Depart from Obi Station",
        activityZh: "从饱肥站出发",
      },
      {
        time: "18:59",
        activityJa: "宮崎駅着",
        activityEn: "Arrive at Miyazaki Station",
        activityZh: "抵达宫崎站",
      },
    ],
  }

  // Function to get the appropriate activity text based on language
  const getActivityText = (item) => {
    if (isJapanese) return item.activityJa
    if (isChinese) return item.activityZh
    return item.activityEn
  }

  // Function to get the title text based on language
  const getTitleText = () => {
    if (isJapanese) return tourData.title.ja
    if (isChinese) return tourData.title.zh
    return tourData.title.en
  }

  // Function to get the theme text based on language
  const getThemeText = () => {
    if (isJapanese) return tourData.theme.ja
    if (isChinese) return tourData.theme.zh
    return tourData.theme.en
  }

  return (
    <div className="tour-timetable">
      <div className="timetable-header">
        <h3 className="timetable-title">{getTitleText()}</h3>
        <p className="timetable-theme">{getThemeText()}</p>
      </div>

      <div className="timetable-container">
        <table className="timetable">
          <thead>
            <tr>
              <th className="time-header">
                <Clock className="icon" size={16} />
                {isJapanese ? "時間" : isChinese ? "时间" : "Time"}
              </th>
              <th className="activity-header">
                <MapPin className="icon" size={16} />
                {isJapanese ? "活動" : isChinese ? "活动" : "Activity"}
              </th>
            </tr>
          </thead>
          <tbody>
            {tourData.schedule.map((item, index) => (
              <tr key={index} className={item.special ? "special-row" : ""}>
                <td className="time-cell">{item.time}</td>
                <td className="activity-cell">{getActivityText(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
