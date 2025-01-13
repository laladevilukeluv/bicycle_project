import React, { useState, useCallback, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation } from 'react-router-dom'
import { Bike, Info, Map, Phone, Menu, X, Globe, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import '../App.css'

// Initialize i18n
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          menu: {
            home: 'Home',
            about: 'About',
            plans: 'Plans',
            contact: 'Contact',
          },
          common: {
            slowCycling: 'Slow Cycling',
            bookTour: 'Book a Tour',
            allRightsReserved: 'All rights reserved.',
            switchLanguage: 'Switch language',
            toggleMenu: 'Toggle menu',
            closeMenu: 'Close menu',
          },
          pageTitle: {
            home: 'Slow Cycling - Explore the World on Two Wheels',
            about: 'About Slow Cycling - Our Story and Mission',
            plans: 'Bicycle Tour Plans - Coastal, Mountain, and City Adventures',
            contact: 'Contact Slow Cycling - Book Your Adventure Today',
            default: 'Slow Cycling - Bicycle Tours and Adventures'
          },
          pageDescription: {
            home: 'Embark on unforgettable bicycle adventures across stunning landscapes with Slow Cycling. Expert guides, scenic routes, and tours for all skill levels.',
            about: 'Learn about Slow Cycling\'s passion for combining the thrill of cycling with the joy of exploration. Discover our story, mission, and commitment to unforgettable experiences.',
            plans: 'Explore our diverse range of bicycle tour plans, from coastal rides to mountain adventures and city-to-countryside journeys. Find the perfect tour for your next cycling holiday.',
            contact: 'Get in touch with Slow Cycling to book your next bicycle adventure. Contact us for inquiries about our tours, custom itineraries, or general information.',
            default: 'Slow Cycling offers unforgettable bicycle tours and adventures across stunning landscapes. Expert guides, scenic routes, and experiences for all skill levels.'
          },
          home: {
            hero: {
              title: 'Explore the World on BROMPTON BICYCLYE',
              description: 'Experience unforgettable bicycle adventures across stunning landscapes.',
              ctaButton: 'Discover Our Tours',
              imageAlt: 'Cyclist riding through a scenic landscape'
            },
            features: {
              scenicRoutes: {
                title: 'Scenic Routes',
                description: 'Carefully curated paths through breathtaking landscapes.'
              },
              expertGuides: {
                title: 'Expert Guides',
                description: 'Knowledgeable local guides to enhance your journey.'
              },
              allSkillLevels: {
                title: 'All Skill Levels',
                description: 'Tours tailored for beginners to experienced cyclists.'
              }
            },
            whyChooseUs: {
              title: 'Why Choose Slow Cycling?',
              reason1: 'Authentic local experiences',
              reason2: 'Small group sizes for personalized attention',
              reason3: 'High-quality, well-maintained bicycles',
              reason4: 'Eco-friendly and sustainable travel'
            },
            ctaSection: {
              title: 'Ready for Your Next Adventure?',
              button: 'View Our Tour Plans'
            }
          },
          aboutPage: {
            title: 'About Slow Cycling',
            paragraph1: 'Slow Cycling was born from a passion for exploring the world on two wheels. Our founders, avid cyclists themselves, realized that the best way to truly experience a place is by bicycle.',
            paragraph2: 'We believe in sustainable, responsible tourism that benefits local communities and minimizes environmental impact. Our tours are designed to immerse you in the local culture, cuisine, and landscapes.',
            paragraph3: 'Whether you\'re a seasoned cyclist or a casual rider, we have a tour that\'s perfect for you. Join us for an unforgettable adventure!',
            imageAlt: 'Slow Cycling founders on a bicycle tour'
          },
          plansPage: {
            title: 'Our Tour Plans',
            learnMore: 'Learn More',
            backToPlans: 'Back to Plans',
            duration: 'Duration',
            difficulty: 'Difficulty',
            groupSize: 'Group Size',
            tourHighlights: 'Tour Highlights',
            callToBook: 'Call to Book',
            coastal: {
              title: 'Coastal Tour',
              description: 'Experience the refreshing sea breeze as you cycle along picturesque coastlines.',
              fullDescription: 'Our Coastal Breeze Tour takes you on a journey along stunning shorelines, quaint fishing villages, and dramatic sea cliffs. Feel the salt air on your skin as you pedal through some of the most beautiful coastal landscapes.',
              highlights: [
                'Ride along scenic coastal roads',
                'Visit charming seaside towns',
                'Enjoy fresh seafood at local restaurants',
                'Explore hidden beaches and coves'
              ],
              duration: '7 days',
              difficulty: 'Moderate',
              groupSize: '8-12 people'
            },
            mountain: {
              title: 'Alpine Adventure',
              description: 'Challenge yourself with exhilarating climbs and breathtaking mountain views.',
              fullDescription: 'The Alpine Adventure is perfect for those seeking a challenge. Climb winding mountain roads, descend through lush valleys, and take in panoramic views of snow-capped peaks. This tour will test your endurance and reward you with unforgettable vistas.',
              highlights: [
                'Conquer challenging mountain passes',
                'Enjoy spectacular alpine scenery',
                'Stay in cozy mountain lodges',
                'Experience local mountain culture and cuisine'
              ],
              duration: '10 days',
              difficulty: 'Challenging',
              groupSize: '6-10 people'
            },
            city: {
              title: 'Urban Explorer',
              description: 'Discover the heart of vibrant cities and their surrounding countryside.',
              fullDescription: 'Our Urban Explorer tour combines the excitement of city life with the tranquility of nearby rural areas. Cycle through bustling city streets, explore urban parks, and then venture into the surrounding countryside for a diverse and enriching experience.',
              highlights: [
                'Explore city landmarks by bicycle',
                'Ride through urban parks and green spaces',
                'Visit local markets and artisan shops',
                'Cycle through picturesque countryside just outside the city'
              ],
              duration: '5 days',
              difficulty: 'Easy to Moderate',
              groupSize: '8-14 people'
            }
          },
          contactPage: {
            title: 'Contact Us',
            email: 'Email',
            phone: 'Phone',
            address: 'Address',
            streetAddress: '123 Adventure Lane',
            cityStateZip: 'Cycleville, CA 98765',
            country: 'United States',
            mapAlt: 'Map showing the location of Slow Cycling office'
          }
        }
      },
      ja: {
        translation: {
          menu: {
            home: 'ホーム',
            about: '概要',
            plans: 'プラン',
            contact: '連絡先',
          },
          common: {
            slowCycling: 'スローサイクリング',
            bookTour: 'ツアーを予約',
            allRightsReserved: 'All Rights Reserved',
            switchLanguage: '言語を切り替え',
            toggleMenu: 'メニューを切り替え',
            closeMenu: 'メニューを閉じる',
          },
          pageTitle: {
            home: 'スローサイクリング - 二輪で世界を探索',
            about: 'スローサイクリングについて - 私たちの物語と使命',
            plans: '自転車ツアープラン - 海岸、山、都市の冒険',
            contact: 'スローサイクリングへのお問い合わせ - 今日から冒険を予約',
            default: 'スローサイクリング - 自転車ツアーと冒険'
          },
          pageDescription: {
            home: 'スローサイクリングで息をのむような景色の中で忘れられない自転車の冒険に出かけましょう。経験豊富なガイド、景色の良いルート、全てのスキルレベルに対応したツアーをご用意しています。',
            about: 'スローサイクリングのサイクリングのスリルと探検の喜びを組み合わせることへの情熱について学びましょう。私たちの物語、使命、そして忘れられない体験への取り組みをご覧ください。',
            plans: '海岸沿いのライドから山岳冒険、都市から田舎への旅まで、多様な自転車ツアープランをご覧ください。次のサイクリング休暇に最適なツアーを見つけましょう。',
            contact: 'スローサイクリングに連絡して、次の自転車の冒険を予約しましょう。ツアーやカスタムイベント、一般的な情報についてのお問い合わせはこちらまで。',
            default: 'スローサイクリングは、息をのむような景色の中で忘れられない自転車ツアーと冒険を提供します。経験豊富なガイド、景色の良いルート、全てのスキルレベルに対応した体験をご用意しています。'
          },
          home: {
            hero: {
              title: 'Bromptonで楽しむ',
              description: '息をのむような景色の中で忘れられない自転車の冒険を体験しましょう。',
              ctaButton: 'ツアーを見る',
              imageAlt: '景色の良い風景を走るサイクリスト'
            },
            features: {
              scenicRoutes: {
                title: '景色の良いルート',
                description: '息をのむような景色を通る丁寧に選ばれた道。'
              },
              expertGuides: {
                title: '専門ガイド',
                description: 'あなたの旅を豊かにする知識豊富な地元ガイド。'
              },
              allSkillLevels: {
                title: 'すべてのスキルレベル',
                description: '初心者から経験豊富なサイクリストまで対応したツアー。'
              }
            },
            whyChooseUs: {
              title: 'なぜスローサイクリングを選ぶのか？',
              reason1: '本物の地元体験',
              reason2: 'きめ細かな対応のための小グループサイズ',
              reason3: '高品質で整備の行き届いた自転車',
              reason4: 'エコフレンドリーで持続可能な旅行'
            },
            ctaSection: {
              title: '次の冒険の準備はできましたか？',
              button: 'ツアープランを見る'
            }
          },
          aboutPage: {
            title: 'スローサイクリングについて',
            paragraph1: 'スローサイクリングは、二輪で世界を探索する情熱から生まれました。自転車愛好家である私たちの創設者は、ある場所を本当に体験する最良の方法は自転車であることに気づきました。',
            paragraph2: '私たちは、地域社会に利益をもたらし、環境への影響を最小限に抑える持続可能で責任ある観光を信じています。私たちのツアーは、地元の文化、料理、風景に没頭できるようにデザインされています。',
            paragraph3: 'ベテランのサイクリストであっても、カジュアルなライダーであっても、あなたにぴったりのツアーがあります。忘れられない冒険に参加しましょう！',
            imageAlt: '自転車ツアーに参加するスローサイクリングの創設者たち'
          },
          plansPage: {
            title: '私たちのツアープラン',
            learnMore: '詳細を見る',
            backToPlans: 'プランに戻る',
            duration: '期間',
            difficulty: '難易度',
            groupSize: 'グループサイズ',
            tourHighlights: 'ツアーのハイライト',
            callToBook: '電話で予約',
            coastal: {
              title: '海岸ツアー',
              description: '絵のような海岸線に沿ってサイクリングしながら、爽やかな海風を体験します。',
              fullDescription: '海岸線ブリーズツアーでは、美しい海岸線、のどかな漁村、劇的な海食崖に沿って旅をします。最も美しい沿岸の風景を通り抜けながら、肌に塩の空気を感じてください。',
              highlights: [
                '景色の良い沿岸道路を走る',
                '魅力的な海辺の町を訪れる',
                '地元のレストランで新鮮なシーフードを楽しむ',
                '隠れたビーチや入り江を探索する'
              ],
              duration: '7日間',
              difficulty: '中級',
              groupSize: '8-12人'
            },
            mountain: {
              title: 'アルパインアドベンチャー',
              description: 'エキサイティングな登りと息をのむような山の景色で自分に挑戦します。',
              fullDescription: 'アルパインアドベンチャーは、挑戦を求める人々に最適です。曲がりくねった山道を登り、緑豊かな谷を下り、雪をかぶった山々のパノラマビューを楽しみます。このツアーはあなたの持久力をテストし、忘れられない景色で報いてくれるでしょう。',
              highlights: [
                '挑戦的な山岳峠を征服する',
                '壮大なアルプスの景色を楽しむ',
                '居心地の良い山小屋に滞在する',
                '地元の山岳文化と料理を体験する'
              ],
              duration: '10日間',
              difficulty: '上級',
              groupSize: '6-10人'
            },
            city: {
              title: 'アーバンエクスプローラー',
              description: '活気ある都市の中心部とその周辺の田舎を発見します。',
              fullDescription: '私たちのアーバンエクスプローラーツアーは、都市生活の興奮と近郊の田舎の静けさを組み合わせています。賑やかな都市の通りをサイクリングし、都市公園を探索し、そして周辺の田舎に冒険に出かけ、多様で豊かな体験をします。',
              highlights: [
                '自転車で都市のランドマークを探索する',
                '都市公園や緑地を走る',
                '地元の市場や職人の店を訪れる',
                '都市のすぐ外にある絵のような田舎をサイクリングする'
              ],
              duration: '5日間',
              difficulty: '初級から中級',
              groupSize: '8-14人'
            }
          },
          contactPage: {
            title: 'お問い合わせ',
            email: 'メールアドレス',
            phone: '電話番号',
            address: '住所',
            streetAddress: '冒険レーン123',
            cityStateZip: 'サイクルビル、CA 98765',
            country: 'アメリカ合衆国',
            mapAlt: 'スローサイクリングオフィスの位置を示す地図'
          }
        }
      }
    },
    fallbackLng: 'ja',
    lng: 'ja', // Set default language to Japanese
    detection: {
      order: ['localStorage', 'navigator']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default function BicycleTours({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    // Ensure the language is set to Japanese on initial load
    i18n.changeLanguage('ja');
  }, []);

  const tabs = [
    { id: 'home', label: t('menu.home'), icon: Bike, path: '/' },
    { id: 'about', label: t('menu.about'), icon: Info, path: '/about' },
    { id: 'plans', label: t('menu.plans'), icon: Map, path: '/plans' },
    { id: 'contact', label: t('menu.contact'), icon: Phone, path: '/contact' },
  ]

  const getPageTitle = useCallback(() => {
    switch (location.pathname) {
      case '/':
        return t('pageTitle.home')
      case '/about':
        return t('pageTitle.about')
      case '/plans':
        return t('pageTitle.plans')
      case '/contact':
        return t('pageTitle.contact')
      default:
        return t('pageTitle.default')
    }
  }, [location.pathname, t])

  const getPageDescription = useCallback(() => {
    switch (location.pathname) {
      case '/':
        return t('pageDescription.home')
      case '/about':
        return t('pageDescription.about')
      case '/plans':
        return t('pageDescription.plans')
      case '/contact':
        return t('pageDescription.contact')
      default:
        return t('pageDescription.default')
    }
  }, [location.pathname, t])

  const toggleLanguage = useCallback(() => {
    const newLang = i18n.language === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLang);
  }, [i18n])

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
          <h1>{t('common.slowCycling')}</h1>
          <nav className="desktop-nav">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={location.pathname === tab.path ? 'active' : ''}
              >
                <span>{tab.label}</span>
              </Link>
            ))}
          </nav>
          <div className="mobile-controls">
            <button className="language-toggle" onClick={toggleLanguage} aria-label={t('common.switchLanguage')}>
              <Globe className="icon" />
              <span>{i18n.language === 'en' ? 'EN' : 'JP'}</span>
            </button>
            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={t('common.toggleMenu')}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu">
            <button className="close-menu-button" onClick={closeMenu} aria-label={t('common.closeMenu')}>
              <X />
            </button>
          <div className="mobile-menu-content">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                onClick={closeMenu}
              >
                <span>{tab.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <main className="container">
        {children}
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Slow Cycling. {t('common.allRightsReserved')}</p>
        </div>
      </footer>
    </div>
  )
}