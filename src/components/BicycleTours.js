"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import { Link, useLocation } from "react-router-dom"
import { Bike, Info, Map, Phone, Menu, X, Globe, ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import "../App.css"

// Initialize i18n
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          menu: {
            home: "Home",
            about: "About",
            plans: "Plans",
            contact: "Contact Us",
          },
          common: {
            slowCycling: "Slow Cycling",
            bookTour: "Book a Tour",
            allRightsReserved: "All rights reserved.",
            switchLanguage: "Switch language",
            toggleMenu: "Toggle menu",
            closeMenu: "Close menu",
            languages: {
              en: "English",
              ja: "日本語",
              zh: "中文",
            },
          },
          pageTitle: {
            home: "Slow Cycling - Explore the World on Two Wheels",
            about: "About Slow Cycling - Our Story and Mission",
            plans: "Bicycle Tour Plans - Coastal, Mountain, and City Adventures",
            contact: "Contact Slow Cycling - Book Your Adventure Today",
            default: "Slow Cycling - Bicycle Tours and Adventures",
          },
          pageDescription: {
            home: "Embark on unforgettable bicycle adventures across stunning landscapes with Slow Cycling. Expert guides, scenic routes, and tours for all skill levels.",
            about:
              "Learn about Slow Cycling's passion for combining the thrill of cycling with the joy of exploration. Discover our story, mission, and commitment to unforgettable experiences.",
            plans:
              "Explore our diverse range of bicycle tour plans, from coastal rides to mountain adventures and city-to-countryside journeys. Find the perfect tour for your next cycling holiday.",
            contact:
              "Get in touch with Slow Cycling to book your next bicycle adventure. Contact us for inquiries about our tours, custom itineraries, or general information.",
            default:
              "Slow Cycling offers unforgettable bicycle tours and adventures across stunning landscapes. Expert guides, scenic routes, and experiences for all skill levels.",
          },
          home: {
            hero: {
              title: "Explore the World on BROMPTON BICYCLYE",
              description: "Experience unforgettable bicycle adventures across stunning landscapes.",
              ctaButton: "Discover Our Tours",
              imageAlt: "Cyclist riding through a scenic landscape",
            },
            features: {
              scenicRoutes: {
                title: "Scenic Routes",
                description: "Carefully curated paths through breathtaking landscapes.",
              },
              expertGuides: {
                title: "Expert Guides",
                description: "Knowledgeable local guides to enhance your journey.",
              },
              allSkillLevels: {
                title: "All Skill Levels",
                description: "Tours tailored for beginners to experienced cyclists.",
              },
            },
            whyChooseUs: {
              title: "Why Choose Slow Cycling?",
              reason1: "Authentic local experiences",
              reason2: "Small group sizes for personalized attention",
              reason3:
                "High-quality and well-maintained BROMPTON bikes are available for free rental (you may also bring your own BROMPTON).",
              reason4: "Eco-friendly and sustainable travel",
            },
            ctaSection: {
              title: "Ready for Slow Cycling in Miyazaki?",
              button: "View Our Tour Plans",
            },
          },
          aboutPage: {
            title: "About Slow Cycling",
            paragraph1:
              "Slow cycling is a travel style that allows you to enjoy cycling at a relaxed pace while immersing yourself in nature and culture. Rather than simply reaching a destination, it focuses on appreciating the scenery and encounters along the way, leading to new discoveries and unforgettable experiences.",
            paragraph2: "Experience the breathtaking coastline and rich culture of Miyazaki!",
            paragraph3:
              "We offer tours that allow you to deeply explore the nature, history, and traditions of Miyazaki. With its warm climate, endless coastline, and vibrant local communities, Miyazaki provides visitors with unforgettable experiences.",
            paragraph4:
              "Through slow cycling, you can take your time to discover the stunning coastal landscapes of Miyazaki. Ride along the scenic shoreline, visit breathtaking viewpoints, savor delicious local seafood, and immerse yourself in traditional crafts and festivals.",
            paragraph5:
              "We are committed to sustainable and responsible tourism that benefits local communities while minimizing environmental impact. Join us for a one-of-a-kind journey that can only be experienced in Miyazaki.",
            imageAlt: "Slow Cycling founders on a bicycle tour",
          },
          plansPage: {
            title: "Our Tour Plans",
            learnMore: "Learn More",
            backToPlans: "Back to Plans",
            duration: "Duration",
            difficulty: "Difficulty",
            groupSize: "Group Size",
            tourHighlights: "Tour Highlights",
            callToBook: "Call to Book",
            coastal: {
              title: "Coastal Tour",
              description: "Experience the refreshing sea breeze as you cycle along picturesque coastlines.",
              fullDescription:
                "Our Coastal Breeze Tour takes you on a journey along stunning shorelines, quaint fishing villages, and dramatic sea cliffs. Feel the salt air on your skin as you pedal through some of the most beautiful coastal landscapes.",
              highlights: [
                "Ride along scenic coastal roads",
                "Visit charming seaside towns",
                "Enjoy fresh seafood at local restaurants",
                "Explore hidden beaches and coves",
                "Kimono Dressing, Calligraphy, and Tea Ceremony Experience",
              ],
              duration: "10 ~ 11 hours",
              difficulty: "Easy",
              groupSize: "4-5 people",
              schedule: "Tour Schedule",
            },
            mountain: {
              title: "Alpine Adventure",
              description: "Challenge yourself with exhilarating climbs and breathtaking mountain views.",
              fullDescription:
                "The Alpine Adventure is perfect for those seeking a challenge. Climb winding mountain roads, descend through lush valleys, and take in panoramic views of snow-capped peaks. This tour will test your endurance and reward you with unforgettable vistas.",
              highlights: [
                "Conquer challenging mountain passes",
                "Enjoy spectacular alpine scenery",
                "Stay in cozy mountain lodges",
                "Experience local mountain culture and cuisine",
              ],
              duration: "10 days",
              difficulty: "Challenging",
              groupSize: "6-10 people",
            },
            city: {
              title: "Urban Explorer",
              description: "Discover the heart of vibrant cities and their surrounding countryside.",
              fullDescription:
                "Our Urban Explorer tour combines the excitement of city life with the tranquility of nearby rural areas. Cycle through bustling city streets, explore urban parks, and then venture into the surrounding countryside for a diverse and enriching experience.",
              highlights: [
                "Explore city landmarks by bicycle",
                "Ride through urban parks and green spaces",
                "Visit local markets and artisan shops",
                "Cycle through picturesque countryside just outside the city",
              ],
              duration: "5 days",
              difficulty: "Easy to Moderate",
              groupSize: "8-14 people",
            },
          },
          contactPage: {
            title: "Contact Us",
            email: "Email",
            phone: "Phone",
            address: "Address",
            streetAddress: "Shimanouchi 5621-8",
            cityStateZip: "Miyazaki-city, Miyazaki 8800121",
            country: "Japan",
            mapAlt: "Map showing the location of Slow Cycling office",
          },
        },
      },
      ja: {
        translation: {
          menu: {
            home: "ホーム",
            about: "私たちについて",
            plans: "ツアー予約",
            contact: "お問い合わせ",
          },
          common: {
            slowCycling: "スローサイクリング",
            bookTour: "ツアーを予約",
            allRightsReserved: "All Rights Reserved",
            switchLanguage: "言語を切り替え",
            toggleMenu: "メニューを切り替え",
            closeMenu: "メニューを閉じる",
            languages: {
              en: "English",
              ja: "日本語",
              zh: "中文",
            },
          },
          pageTitle: {
            home: "スローサイクリング - 二輪で世界を探索",
            about: "スローサイクリングについて - 私たちの物語と使命",
            plans: "自転車ツアープラン - 海岸、山、都市の冒険",
            contact: "スローサイクリングへのお問い合わせ - 今日から冒険を予約",
            default: "スローサイクリング - 自転車ツアーと冒険",
          },
          pageDescription: {
            home: "スローサイクリングで息をのむような景色の中で忘れられない自転車の冒険に出かけましょう。経験豊富なガイド、景色の良いルート、全てのスキルレベルに対応したツアーをご用意しています。",
            about:
              "スローサイクリングのサイクリングのスリルと探検の喜びを組み合わせることへの情熱について学びましょう。私たちの物語、使命、そして忘れられない体験への取り組みをご覧ください。",
            plans:
              "海岸沿いのライドから山岳冒険、都市から田舎への旅まで、多様な自転車ツアープランをご覧ください。次のサイクリング休暇に最適なツアーを見つけましょう。",
            contact:
              "スローサイクリングに連絡して、次の自転車の冒険を予約しましょう。ツアーやカスタムイベント、一般的な情報についてのお問い合わせはこちらまで。",
            default:
              "スローサイクリングは、息をのむような景色の中で忘れられない自転車ツアーと冒険を提供します。経験豊富なガイド、景色の良いルート、全てのスキルレベルに対応した体験をご用意しています。",
          },
          home: {
            hero: {
              title: "Bromptonで楽しむ",
              description: "息をのむような景色の中で忘れられない自転車の冒険を体験しましょう。",
              ctaButton: "ツアーを見る",
              imageAlt: "景色の良い風景を走るサイクリスト",
            },
            features: {
              scenicRoutes: {
                title: "景色の良いルート",
                description: "息をのむような景色を通る丁寧に選ばれた道。",
              },
              expertGuides: {
                title: "専門ガイド",
                description: "あなたの旅を豊かにする知識豊富な地元ガイド。",
              },
              allSkillLevels: {
                title: "すべてのスキルレベル",
                description: "初心者から経験豊富なサイクリストまで対応したツアー。",
              },
            },
            whyChooseUs: {
              title: "なぜスローサイクリングを選ぶのか？",
              reason1: "本物の地元体験",
              reason2: "きめ細かな対応のための小グループサイズ",
              reason3: "高品質で整備の行き届いたBROMPTONを無料でレンタル（御自分のBROMPTONを持参していただくことも可）",
              reason4: "エコフレンドリーで持続可能な旅行",
            },
            ctaSection: {
              title: "宮崎県の大自然でスローサイクリングを体験しませんか？",
              button: "ツアーを予約する",
            },
          },
          aboutPage: {
            title: "スローサイクリングについて",
            paragraph1:
              "スローサイクリングとは、ゆったりとしたペースで自然や文化を感じながら自転車を楽しむ旅のスタイルです。ただ目的地へ向かうのではなく、道中の景色や出会いを大切にしながら進むことで、新しい発見や感動を味わえます。",
            paragraph2:
              "私たちは、宮崎の大自然や歴史、伝統を深く体験できるツアーを提供しています。南国ならではの温暖な気候、どこまでも続く海岸線、そして郷土料理や地元の人々とのふれあいが、訪れる人々に特別な体験をもたらします。",
            paragraph3:
              "スローサイクリングを通じて、宮崎ならではの海岸沿いの風景や文化をじっくり味わっていただけます。自転車でのんびりと海岸線を走りながら、絶景のビュースポットを巡ったり、新鮮な海の幸を使った郷土料理を楽しんだり、地域の伝統工芸や祭りに触れることができます。",
            paragraph4:
              "私たちは、地域社会に利益をもたらし、環境への影響を最小限に抑える持続可能で責任ある観光を大切にしています。宮崎でしか味わえない特別な体験を、一緒に楽しみましょう。",
            imageAlt: "自転車ツアーに参加するスローサイクリングの創設者たち",
          },
          plansPage: {
            title: "ツアープラン",
            learnMore: "詳細を見る",
            backToPlans: "プランに戻る",
            duration: "所要時間",
            difficulty: "難易度",
            groupSize: "グループサイズ",
            tourHighlights: "ツアーのハイライト",
            callToBook: "電話で予約",
            coastal: {
              title: "海岸ツアー",
              description: "絵のような海岸線に沿ってサイクリングしながら、爽やかな海風を体験します。",
              fullDescription:
                "海岸線ブリーズツアーでは、美しい海岸線、のどかな漁村、劇的な海食崖に沿って旅をします。最も美しい沿岸の風景を通り抜けながら、肌に塩の空気を感じてください。",
              highlights: [
                "景色の良い沿岸道路を走る",
                "魅力的な海辺の町を訪れる",
                "地元のレストランで新鮮なシーフードを楽しむ",
                "隠れたビーチや入り江を探索する",
                "着付け・書道・茶道の体験",
              ],
              duration: "10~11時間",
              difficulty: "初級",
              groupSize: "4-5人",
              schedule: "ツアースケジュール",
            },
            mountain: {
              title: "アルパインアドベンチャー",
              description: "エキサイティングな登りと息をのむような山の景色で自分に挑戦します。",
              fullDescription:
                "アルパインアドベンチャーは、挑戦を求める人々に最適です。曲がりくねった山道を登り、緑豊かな谷を下り、雪をかぶった山々のパノラマビューを楽しみます。このツアーはあなたの持久力をテストし、忘れられない景色で報いてくれるでしょう。",
              highlights: [
                "挑戦的な山岳峠を征服する",
                "壮大なアルプスの景色を楽しむ",
                "居心地の良い山小屋に滞在する",
                "地元の山岳文化と料理を体験する",
              ],
              duration: "10日間",
              difficulty: "上級",
              groupSize: "6-10人",
            },
            city: {
              title: "アーバンエクスプローラー",
              description: "活気ある都市の中心部とその周辺の田舎を発見します。",
              fullDescription:
                "私たちのアーバンエクスプローラーツアーは、都市生活の興奮と近郊の田舎の静けさを組み合わせています。賑やかな都市の通りをサイクリングし、都市公園を探索し、そして周辺の田舎に冒険に出かけ、多様で豊かな体験をします。",
              highlights: [
                "自転車で都市のランドマークを探索する",
                "都市公園や緑地を走る",
                "地元の市場や職人の店を訪れる",
                "都市のすぐ外にある絵のような田舎をサイクリングする",
              ],
              duration: "5日間",
              difficulty: "初級から中級",
              groupSize: "8-14人",
            },
          },
          contactPage: {
            title: "お問い合わせ",
            email: "メールアドレス",
            phone: "電話番号",
            address: "住所",
            streetAddress: "880-0121",
            cityStateZip: "宮崎県宮崎市島之内5621-8",
            country: "日本",
            mapAlt: "スローサイクリングオフィスの位置を示す地図",
          },
        },
      },
      zh: {
        translation: {
          menu: {
            home: "首页",
            about: "关于我们",
            plans: "行程计划",
            contact: "联系我们",
          },
          common: {
            slowCycling: "慢骑行",
            bookTour: "预订行程",
            allRightsReserved: "版权所有",
            switchLanguage: "切换语言",
            toggleMenu: "切换菜单",
            closeMenu: "关闭菜单",
            languages: {
              en: "English",
              ja: "日本語",
              zh: "中文",
            },
          },
          pageTitle: {
            home: "慢骑行 - 骑行探索世界",
            about: "关于慢骑行 - 我们的故事和使命",
            plans: "自行车行程计划 - 海岸、山地和城市冒险",
            contact: "联系慢骑行 - 立即预订您的冒险",
            default: "慢骑行 - 自行车行程和冒险",
          },
          pageDescription: {
            home: "与慢骑行一起，踏上穿越壮丽景观的难忘自行车冒险。专业向导，风景优美的路线，适合各种技能水平的行程。",
            about: "了解慢骑行如何将骑行的刺激与探索的乐趣相结合。发现我们的故事、使命和对难忘体验的承诺。",
            plans:
              "探索我们多样化的自行车行程计划，从海岸骑行到山地冒险，再到城市乡村之旅。为您的下一次骑行假期找到完美的行程。",
            contact: "联系慢骑行预订您的下一次自行车冒险。有关我们的行程、定制行程或一般信息的咨询，请联系我们。",
            default: "慢骑行提供穿越壮丽景观的难忘自行车行程和冒险。专业向导，风景优美的路线，适合各种技能水平的体验。",
          },
          home: {
            hero: {
              title: "骑行BROMPTON探索世界",
              description: "在壮丽的景观中体验难忘的自行车冒险。",
              ctaButton: "探索我们的行程",
              imageAlt: "骑行者穿越风景如画的景观",
            },
            features: {
              scenicRoutes: {
                title: "风景优美的路线",
                description: "精心策划的路线穿越令人叹为观止的景观。",
              },
              expertGuides: {
                title: "专业向导",
                description: "知识渊博的当地向导丰富您的旅程。",
              },
              allSkillLevels: {
                title: "适合各种技能水平",
                description: "为初学者到经验丰富的骑行者量身定制的行程。",
              },
            },
            whyChooseUs: {
              title: "为什么选择慢骑行？",
              reason1: "真实的当地体验",
              reason2: "小团体规模提供个性化关注",
              reason3: "高品质且维护良好的BROMPTON自行车可免费租用（您也可以带上自己的BROMPTON）",
              reason4: "环保且可持续的旅行",
            },
            ctaSection: {
              title: "准备好在宫崎慢骑行了吗？",
              button: "查看我们的行程计划",
            },
          },
          aboutPage: {
            title: "关于慢骑行",
            paragraph1:
              "慢骑行是一种旅行风格，让您在沉浸于自然和文化的同时，以轻松的节奏享受骑行。它不仅仅是到达目的地，而是专注于欣赏沿途的风景和邂逅，带来新的发现和难忘的体验。",
            paragraph2: "体验宫崎令人叹为观止的海岸线和丰富的文化！",
            paragraph3:
              "我们提供的行程让您深入探索宫崎的自然、历史和传统。凭借其温暖的气候、绵延不断的海岸线和充满活力的当地社区，宫崎为游客提供难忘的体验。",
            paragraph4:
              "通过慢骑行，您可以慢慢发现宫崎令人惊叹的海岸景观。沿着风景如画的海岸线骑行，参观令人叹为观止的观景点，品尝使用新鲜海鲜制作的当地美食，沉浸在传统工艺和节日中。",
            paragraph5:
              "我们致力于可持续和负责任的旅游，为当地社区带来利益，同时最大限度地减少对环境的影响。加入我们，一起享受只有在宫崎才能体验的独特旅程。",
            imageAlt: "慢骑行创始人参加自行车行程",
          },
          plansPage: {
            title: "我们的行程计划",
            learnMore: "了解更多",
            backToPlans: "返回计划",
            duration: "持续时间",
            difficulty: "难度",
            groupSize: "团体规模",
            tourHighlights: "行程亮点",
            callToBook: "电话预订",
            coastal: {
              title: "海岸行程",
              description: "沿着风景如画的海岸线骑行，体验清新的海风。",
              fullDescription:
                "我们的海岸微风行程带您沿着令人惊叹的海岸线、宁静的渔村和壮观的海蚀崖旅行。当您骑行穿过一些最美丽的海岸景观时，感受皮肤上的咸咸海风。",
              highlights: [
                "沿着风景优美的海岸道路骑行",
                "参观迷人的海滨小镇",
                "在当地餐厅享用新鲜海鲜",
                "探索隐藏的海滩和海湾",
                "和服穿着、书法和茶道体验",
              ],
              duration: "10~11小时",
              difficulty: "简单",
              groupSize: "4-5人",
              schedule: "行程安排",
            },
            mountain: {
              title: "高山冒险",
              description: "挑战自我，体验令人兴奋的爬坡和令人叹为观止的山景。",
              fullDescription:
                "高山冒险非常适合寻求挑战的人。爬上蜿蜒的山路，穿越茂密的山谷，欣赏雪山的全景。这个行程将测试您的耐力，并以难忘的景色回报您。",
              highlights: [
                "征服具有挑战性的山口",
                "欣赏壮观的高山风景",
                "住在舒适的山间小屋",
                "体验当地山区文化和美食",
              ],
              duration: "10天",
              difficulty: "具有挑战性",
              groupSize: "6-10人",
            },
            city: {
              title: "城市探索者",
              description: "探索充满活力的城市中心及其周边乡村。",
              fullDescription:
                "我们的城市探索者行程将城市生活的兴奋与附近乡村的宁静相结合。骑行穿越繁忙的城市街道，探索城市公园，然后冒险进入周边乡村，获得多样化且丰富的体验。",
              highlights: [
                "骑行探索城市地标",
                "穿越城市公园和绿地",
                "参观当地市场和工匠商店",
                "骑行穿越城市郊外的风景如画的乡村",
              ],
              duration: "5天",
              difficulty: "简单到中等",
              groupSize: "8-14人",
            },
          },
          contactPage: {
            title: "联系我们",
            email: "电子邮件",
            phone: "电话",
            address: "地址",
            streetAddress: "岛之内5621-8",
            cityStateZip: "宫崎市，宫崎县 8800121",
            country: "日本",
            mapAlt: "显示慢骑行办公室位置的地图",
          },
        },
      },
    },
    fallbackLng: "ja",
    lng: "ja", // Set default language to Japanese
    detection: {
      order: ["localStorage", "navigator"],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default function BicycleTours({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const languageMenuRef = useRef(null)

  useEffect(() => {
    // Ensure the language is set to Japanese on initial load
    i18n.changeLanguage("ja")
  }, [])

  useEffect(() => {
    // Close language menu when clicking outside
    function handleClickOutside(event) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const tabs = [
    { id: "home", label: t("menu.home"), icon: Bike, path: "/" },
    { id: "about", label: t("menu.about"), icon: Info, path: "/about" },
    { id: "plans", label: t("menu.plans"), icon: Map, path: "/plans" },
    { id: "contact", label: t("menu.contact"), icon: Phone, path: "/contact" },
  ]

  const languages = [
    { code: "ja", name: t("common.languages.ja") },
    { code: "en", name: t("common.languages.en") },
    { code: "zh", name: t("common.languages.zh") },
  ]

  const getPageTitle = useCallback(() => {
    switch (location.pathname) {
      case "/":
        return t("pageTitle.home")
      case "/about":
        return t("pageTitle.about")
      case "/plans":
        return t("pageTitle.plans")
      case "/contact":
        return t("pageTitle.contact")
      default:
        return t("pageTitle.default")
    }
  }, [location.pathname, t])

  const getPageDescription = useCallback(() => {
    switch (location.pathname) {
      case "/":
        return t("pageDescription.home")
      case "/about":
        return t("pageDescription.about")
      case "/plans":
        return t("pageDescription.plans")
      case "/contact":
        return t("pageDescription.contact")
      default:
        return t("pageDescription.default")
    }
  }, [location.pathname, t])

  const changeLanguage = useCallback(
    (langCode) => {
      i18n.changeLanguage(langCode)
      setIsLanguageMenuOpen(false)
    },
    [i18n],
  )

  const toggleLanguageMenu = useCallback(() => {
    setIsLanguageMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <div className="bicycle-tours">
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" hrefLang="en" href={`https://www.slowcycling.com/en${location.pathname}`} />
        <link rel="alternate" hrefLang="ja" href={`https://www.slowcycling.com/ja${location.pathname}`} />
        <link rel="alternate" hrefLang="zh" href={`https://www.slowcycling.com/zh${location.pathname}`} />
        <link rel="canonical" href={`https://www.slowcycling.com/${i18n.language}${location.pathname}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.slowcycling.com/${i18n.language}${location.pathname}`} />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:image" content="https://www.slowcycling.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://www.slowcycling.com/${i18n.language}${location.pathname}`} />
        <meta name="twitter:title" content={getPageTitle()} />
        <meta name="twitter:description" content={getPageDescription()} />
        <meta name="twitter:image" content="https://www.slowcycling.com/twitter-image.jpg" />
      </Helmet>

      <header>
        <div className="container">
          <Link to="/" className="site-title">
            <h1>{t("common.slowCycling")}</h1>
          </Link>
          <nav className="desktop-nav">
            {tabs.map((tab) => (
              <Link key={tab.id} to={tab.path} className={location.pathname === tab.path ? "active" : ""}>
                <span>{tab.label}</span>
              </Link>
            ))}
          </nav>
          <div className="mobile-controls">
            <div className="language-selector" ref={languageMenuRef}>
              <button
                className="language-toggle"
                onClick={toggleLanguageMenu}
                aria-label={t("common.switchLanguage")}
                aria-expanded={isLanguageMenuOpen}
              >
                <Globe className="icon" />
                <span>{i18n.language.toUpperCase()}</span>
                <ChevronDown className="icon-small" />
              </button>
              {isLanguageMenuOpen && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={i18n.language === lang.code ? "active" : ""}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t("common.toggleMenu")}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="close-menu-button" onClick={closeMenu} aria-label={t("common.closeMenu")}>
            <X />
          </button>
          <div className="mobile-menu-content">
            {tabs.map((tab) => (
              <Link key={tab.id} to={tab.path} onClick={closeMenu}>
                <span>{tab.label}</span>
              </Link>
            ))}
            <div className="mobile-language-selector">
              <p>{t("common.switchLanguage")}:</p>
              <div className="mobile-language-buttons">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={i18n.language === lang.code ? "active" : ""}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="container">{children}</main>

      <footer>
        <div className="container">
          <p>&copy; 2025 s'ism. {t("common.allRightsReserved")}</p>
        </div>
      </footer>
    </div>
  )
}
