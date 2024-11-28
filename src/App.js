// import React, { useState } from 'react'
// import { Bike, Info, Map, Phone, Menu, X, ChevronRight, Mail, MapPin, ArrowLeft, Globe } from 'lucide-react'
// import './App.css'
// import heroImage from './assets/hero.jpg'
// import aboutUsImage from './assets/about_us.jpg'
// import detailImage1 from './assets/detail1.jpg'
// import detailImage2 from './assets/detail2.jpg'
// import detailImage3 from './assets/detail3.jpg'
// import locationImage from './assets/location.jpg'
// import { Helmet } from 'react-helmet'

// export default function Component() {
//   const [activeTab, setActiveTab] = useState('home')
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [activePlan, setActivePlan] = useState(null)
//   const [isEnglish, setIsEnglish] = useState(false)

//   const tabs = [
//     { id: 'home', label: isEnglish ? 'Home' : 'ホーム', icon: Bike },
//     { id: 'about', label: isEnglish ? 'About' : '概要', icon: Info },
//     { id: 'plans', label: isEnglish ? 'Plans' : 'プラン', icon: Map },
//     { id: 'contact', label: isEnglish ? 'Contact' : '連絡先', icon: Phone },
//   ]

//   const plans = [
//     {
//       id: 'coastal',
//       title: isEnglish ? "Coastal Breeze Ride" : "海岸線ブリーズライド",
//       description: isEnglish 
//         ? "A relaxing 5-day tour along scenic coastlines, perfect for beginners and families."
//         : "初心者や家族に最適な、景色の良い海岸線に沿ってのんびりと5日間のツアー。",
//       image: detailImage1,
//       fullDescription: isEnglish
//         ? "Embark on a breathtaking 5-day journey along stunning coastal routes. This tour is ideal for beginners and families looking for a relaxing yet adventurous experience. Cycle through charming seaside towns, enjoy picturesque ocean views, and feel the refreshing sea breeze as you pedal along well-maintained coastal paths."
//         : "美しい海岸線に沿って息をのむような5日間の旅に出かけましょう。このツアーは、リラックスしながらも冒険的な体験を求める初心者や家族に最適です。魅力的な海辺の町を自転車で巡り、絵のような海の景色を楽しみ、整備の行き届いた海岸沿いの道を走りながら爽やかな海風を感じることができます。",
//       highlights: isEnglish
//         ? [
//             "Scenic rides along beautiful coastlines",
//             "Visit to historic lighthouses and marine wildlife sanctuaries",
//             "Beachside picnics and local seafood tastings",
//             "Optional water activities like kayaking or paddleboarding",
//             "Suitable for all fitness levels with optional challenging routes"
//           ]
//         : [
//             "美しい海岸線に沿った景色の良いライド",
//             "歴史的な灯台や海洋生物保護区への訪問",
//             "ビーチでのピクニックと地元のシーフード試食",
//             "カヤックやパドルボードなどのオプションの水上アクティビティ",
//             "オプションの挑戦的なルートもあり、全てのフィットネスレベルに適しています"
//           ],
//       duration: isEnglish ? "5 days" : "5日間",
//       difficulty: isEnglish ? "Easy to Moderate" : "易しい〜中程度",
//       groupSize: isEnglish ? "8-12 people" : "8〜12人"
//     },
//     {
//       id: 'mountain',
//       title: isEnglish ? "Mountain Explorer" : "マウンテンエクスプローラー",
//       description: isEnglish
//         ? "Challenge yourself with this 7-day mountain tour, featuring breathtaking views and thrilling descents."
//         : "息をのむような景色とスリリングな下りが特徴の7日間の山岳ツアーで自分に挑戦しましょう。",
//       image: detailImage2,
//       fullDescription: isEnglish
//         ? "Push your limits on this exhilarating 7-day mountain biking adventure. Designed for intermediate to advanced cyclists, this tour takes you through rugged mountain terrain, offering breathtaking panoramic views and heart-pumping descents. Traverse winding trails through dense forests, conquer challenging climbs, and experience the thrill of technical single-track sections."
//         : "この7日間のエキサイティングなマウンテンバイクアドベンチャーで自分の限界に挑戦しましょう。中級者から上級者向けに設計されたこのツアーでは、起伏に富んだ山岳地帯を走り抜け、息をのむようなパノラマビューと心躍る下りを体験できます。鬱蒼とした森を抜ける曲がりくねった道を走破し、挑戦的な登りを征服し、テクニカルなシングルトラックセクションのスリルを味わいましょう。",
//       highlights: isEnglish
//         ? [
//             "Challenging climbs with rewarding summit views",
//             "Thrilling descents on varied terrain",
//             "Rides through pristine alpine meadows and forests",
//             "Visit to local mountain communities and cultural sites",
//             "Evening workshops on mountain biking techniques and trail maintenance"
//           ]
//         : [
//             "頂上からの絶景が楽しめる挑戦的な登り",
//             "変化に富んだ地形でのスリリングな下り",
//             "手つかずのアルパインメドウや森林地帯を走るライド",
//             "地元の山岳コミュニティや文化的な場所への訪問",
//             "マウンテンバイクのテクニックやトレイルメンテナンスに関する夕方のワークショップ"
//           ],
//       duration: isEnglish ? "7 days" : "7日間",
//       difficulty: isEnglish ? "Intermediate to Advanced" : "中級〜上級",
//       groupSize: isEnglish ? "6-10 people" : "6〜10人"
//     },
//     {
//       id: 'city',
//       title: isEnglish ? "City to Countryside" : "都市から田舎へ",
//       description: isEnglish
//         ? "Experience the best of both worlds in this 6-day tour from urban landscapes to rural beauty."
//         : "都市の景観から田舎の美しさまで、両方の良さを味わえる6日間のツアーです。",
//       image: detailImage3,
//       fullDescription: isEnglish
//         ? "Discover the perfect blend of urban excitement and rural tranquility in this unique 6-day cycling tour. Begin your journey in the heart of a vibrant city, exploring its iconic landmarks and hidden gems by bike. As the days progress, transition from bustling city streets to peaceful country roads, witnessing the gradual change in scenery and pace of life."
//         : "このユニークな6日間のサイクリングツアーで、都市の興奮と田舎の静けさが完璧に調和した体験をしましょう。活気あふれる都市の中心部から旅を始め、自転車で有名なランドマークや隠れた名所を探索します。日が経つにつれて、賑やかな都市の通りから平和な田舎道へと移り変わり、景色や生活のペースが徐々に変化していくのを目撃します。",
//       highlights: isEnglish
//         ? [
//             "Guided city tour covering major attractions and local hotspots",
//             "Scenic rides through picturesque countryside and quaint villages",
//             "Visit to local farms with fresh produce tastings",
//             "Cultural experiences in both urban and rural settings",
//             "Gradual transition from flat city terrain to gently rolling hills"
//           ]
//         : [
//             "主要な観光スポットやローカルな人気スポットを巡るガイド付き都市ツアー",
//             "絵のように美しい田園地帯や趣のある村々を巡る景観ライド",
//             "地元の農場訪問と新鮮な農産物の試食",
//             "都市部と農村部の両方での文化体験",
//             "平坦な都市の地形から緩やかな丘陵地帯への段階的な移行"
//           ],
//       duration: isEnglish ? "6 days" : "6日間",
//       difficulty: isEnglish ? "Easy to Moderate" : "易しい〜中程度",
//       groupSize: isEnglish ? "8-14 people" : "8〜14人"
//     }
//   ]

//   const toggleLanguage = () => {
//     setIsEnglish(!isEnglish)
//   }

//   const navigateToPlans = () => {
//     setActiveTab('plans')
//     setActivePlan(null)
//     setIsMenuOpen(false)
//     window.scrollTo(0, 0)
//   }

//   const handleTabChange = (tabId) => {
//     setActiveTab(tabId)
//     setActivePlan(null)
//     setIsMenuOpen(false)
//     window.scrollTo(0, 0)
//   }
//   const getPageTitle = () => {
//     switch (activeTab) {
//       case 'home':
//         return isEnglish ? 'Slow Cycling - Explore the World on Two Wheels' : 'スローサイクリング - 二輪で世界を探索';
//       case 'about':
//         return isEnglish ? 'About Slow Cycling - Our Story and Mission' : 'スローサイクリングについて - 私たちの物語と使命';
//       case 'plans':
//         return isEnglish ? 'Bicycle Tour Plans - Coastal, Mountain, and City Adventures' : '自転車ツアープラン - 海岸、山、都市の冒険';
//       case 'contact':
//         return isEnglish ? 'Contact Slow Cycling - Book Your Adventure Today' : 'スローサイクリングへのお問い合わせ - 今日から冒険を予約';
//       default:
//         return isEnglish ? 'Slow Cycling - Bicycle Tours and Adventures' : 'スローサイクリング - 自転車ツアーと冒険';
//     }
//   }

//   const getPageDescription = () => {
//     switch (activeTab) {
//       case 'home':
//         return isEnglish 
//           ? 'Embark on unforgettable bicycle adventures across stunning landscapes with Slow Cycling. Expert guides, scenic routes, and tours for all skill levels.'
//           : 'スローサイクリングで息をのむような景色の中で忘れられない自転車の冒険に出かけましょう。経験豊富なガイド、景色の良いルート、全てのスキルレベルに対応したツアーをご用意しています。';
//       case 'about':
//         return isEnglish
//           ? 'Learn about Slow Cycling\'s passion for combining the thrill of cycling with the joy of exploration. Discover our story, mission, and commitment to unforgettable experiences.'
//           : 'スローサイクリングのサイクリングのスリルと探検の喜びを組み合わせることへの情熱について学びましょう。私たちの物語、使命、そして忘れられない体験への取り組みをご覧ください。';
//       case 'plans':
//         return isEnglish
//           ? 'Explore our diverse range of bicycle tour plans, from coastal rides to mountain adventures and city-to-countryside journeys. Find the perfect tour for your next cycling holiday.'
//           : '海岸沿いのライドから山岳冒険、都市から田舎への旅まで、多様な自転車ツアープランをご覧ください。次のサイクリング休暇に最適なツアーを見つけましょう。';
//       case 'contact':
//         return isEnglish
//           ? 'Get in touch with Slow Cycling to book your next bicycle adventure. Contact us for inquiries about our tours, custom itineraries, or general information.'
//           : 'スローサイクリングに連絡して、次の自転車の冒険を予約しましょう。ツアーやカスタムイベント、一般的な情報についてのお問い合わせはこちらまで。';
//       default:
//         return isEnglish
//           ? 'Slow Cycling offers unforgettable bicycle tours and adventures across stunning landscapes. Expert guides, scenic routes, and experiences for all skill levels.'
//           : 'スローサイクリングは、息をのむような景色の中で忘れられない自転車ツアーと冒険を提供します。経験豊富なガイド、景色の良いルート、全てのスキルレベルに対応した体験をご用意しています。';
//     }
//   }

//   return (
//     <div className="bicycle-tours">
//       <Helmet>
//         <title>{getPageTitle()}</title>
//         <meta name="description" content={getPageDescription()} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="alternate" hrefLang="en" href="https://www.slowcycling.com/en" />
//         <link rel="alternate" hrefLang="ja" href="https://www.slowcycling.com/ja" />
//         <link rel="canonical" href={`https://www.slowcycling.com/${isEnglish ? 'en' : 'ja'}`} />
        
//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={`https://www.slowcycling.com/${isEnglish ? 'en' : 'ja'}`} />
//         <meta property="og:title" content={getPageTitle()} />
//         <meta property="og:description" content={getPageDescription()} />
//         <meta property="og:image" content="https://www.slowcycling.com/og-image.jpg" />

//         {/* Twitter */}
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content={`https://www.slowcycling.com/${isEnglish ? 'en' : 'ja'}`} />
//         <meta property="twitter:title" content={getPageTitle()} />
//         <meta property="twitter:description" content={getPageDescription()} />
//         <meta property="twitter:image" content="https://www.slowcycling.com/twitter-image.jpg" />

//         {/* Structured Data */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "TravelAgency",
//             "name": "Slow Cycling",
//             "url": "https://www.slowcycling.com",
//             "logo": "https://www.slowcycling.com/logo.png",
//             "description": isEnglish 
//               ? "Slow Cycling offers unforgettable bicycle tours and adventures across stunning landscapes."
//               : "スローサイクリングは、息をのむような景色の中で忘れられない自転車ツアーと冒険を提供します。",
//             "address": {
//               "@type": "PostalAddress",
//               "streetAddress": "123 Adventure Lane",
//               "addressLocality": "Cycleville",
//               "addressRegion": "CA",
//               "postalCode": "98765",
//               "addressCountry": "US"
//             },
//             "telephone": "+1-234-567-8900",
//             "email": "info@slowcycling.com",
//             "sameAs": [
//               "https://www.facebook.com/slowcycling",
//               "https://www.instagram.com/slowcycling",
//               "https://www.twitter.com/slowcycling"
//             ]
//           })}
//         </script>
//       </Helmet>
//       <header>
//         <div className="container">
//           <h1>{isEnglish ? 'Slow Cycling' : 'スローサイクリング'}</h1>
//           <nav className="desktop-nav">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => handleTabChange(tab.id)}
//                 className={activeTab === tab.id ? 'active' : ''}
//               >
//                 <span>{tab.label}</span>
//               </button>
//             ))}
//           </nav>
//           <button className="language-toggle" onClick={toggleLanguage} aria-label={isEnglish ? "Switch language" : "言語を切り替え"}>
//             <Globe className="icon" />
//             <span>{isEnglish ? 'EN' : 'JP'}</span>
//           </button>
//           <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isEnglish ? "Toggle menu" : "メニューを切り替え"}>
//             {isMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </header>

//       {isMenuOpen && (
//         <div className="mobile-menu">
//           <div className="mobile-menu-content">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => handleTabChange(tab.id)}
//               >
//                 <span>{tab.label}</span>
//               </button>
//             ))}
//             <button className="language-toggle" onClick={toggleLanguage}>
//               <Globe className="icon" />
//               <span>{isEnglish ? 'Switch to Japanese' : '英語に切り替え'}</span>
//             </button>
//           </div>
//         </div>
//       )}

//       <main className="container">
//         {activeTab === 'home' && (
//           <section className="home">
//             <div className="hero">
//               <img src={heroImage} alt={isEnglish ? "Scenic bicycle tour through mountains" : "山々を巡る景色の良い自転車ツアー"} />
//               <div className="hero-content">
//                 <h2>{isEnglish ? 'Explore the World on Two Wheels' : '二輪で世界を探索'}</h2>
//                 <p>{isEnglish ? 'Embark on unforgettable bicycle adventures across stunning landscapes' : '息をのむような景色の中で忘れられない自転車の冒険に出かけよう'}</p>
//                 <button className="cta-button" onClick={navigateToPlans}>
//                   {isEnglish ? 'Book a Tour' : 'ツアーを予約'}
//                   <ChevronRight className="icon" />
//                 </button>
//               </div>
//             </div>

//             <div className="features">
//               {[
//                 { 
//                   title: isEnglish ? 'Scenic Routes' : '景色の良いルート', 
//                   description: isEnglish ? 'Pedal through breathtaking landscapes, from coastal roads to mountain passes' : '海岸沿いの道から山岳峠まで、息をのむような景色の中をペダルで進む'
//                 },
//                 { 
//                   title: isEnglish ? 'Expert Guides' : '経験豊富なガイド',
//                   description: isEnglish ? 'Ride with passionate local guides who know every twist and turn' : 'すべての曲がり角を知り尽くした情熱的な地元ガイドと一緒にライド'
//                 },
//                 { 
//                   title: isEnglish ? 'All Skill Levels' : 'すべてのスキルレベル', 
//                   description: isEnglish ? 'From leisurely rides to challenging trails, we have tours for everyone' : 'のんびりしたライドから挑戦的なトレイルまで、すべての人のためのツアーをご用意'
//                 },
//               ].map((feature, index) => (
//                 <div key={index} className="feature-card">
//                   <h3>{feature.title}</h3>
//                   <p>{feature.description}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="why-choose-us">
//               <h3>{isEnglish ? 'Why Choose Us?' : 'なぜ私たちを選ぶのか？'}</h3>
//               <ul>
//                 {[
//                   isEnglish ? 'Eco-friendly tours supporting local communities' : '地域社会を支援するエコフレンドリーなツアー',
//                   isEnglish ? 'Small groups for a personalized experience' : 'パーソナライズされた体験のための小グループ',
//                   isEnglish ? 'High-quality bikes and safety equipment provided' : '高品質の自転車と安全装備を提供',
//                   isEnglish ? 'Flexible itineraries to match your preferences' : 'あなたの好みに合わせた柔軟な旅程',
//                 ].map((reason, index) => (
//                   <li key={index}>
//                     <Bike className="icon" />
//                     <span>{reason}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="cta-section">
//               <h3>{isEnglish ? 'Ready to Pedal into Adventure?' : '冒険にペダルを踏み出す準備はできましたか？'}</h3>
//               <button className="cta-button" onClick={navigateToPlans}>
//                 {isEnglish ? 'Browse Our Tours' : 'ツアーを見る'}
//               </button>
//             </div>
//           </section>
//         )}

//         {activeTab === 'about' && (
//           <section className="about">
//             <h2>{isEnglish ? 'About Us' : '私たちについて'}</h2>
//             <div className="about-content">
//               <div>
//                 <p>
//                   {isEnglish 
//                     ? "At Bicycle Tours, we're passionate about combining the thrill of cycling with the joy of exploration. Founded in 2010 by a group of avid cyclists, we've spent over a decade perfecting the art of two-wheeled adventures."
//                     : "自転車ツアーでは、サイクリングのスリルと探検の喜びを組み合わせることに情熱を注いでいます。2010年に熱心なサイクリストのグループによって設立され、10年以上にわたって二輪の冒険の技術を磨いてきました。"}
//                 </p>
//                 <p>
//                   {isEnglish
//                     ? "Our mission is to provide unforgettable experiences that connect people with nature, culture, and themselves. We believe that traveling by bicycle offers a unique perspective, allowing you to truly immerse yourself in the landscapes and communities you visit. Whether you're a seasoned cyclist or a casual rider, we have a tour that will inspire and challenge you."
//                     : "私たちの使命は、人々を自然、文化、そして自分自身とつなぐ忘れられない体験を提供することです。自転車で旅をすることで、訪れる景色やコミュニティに本当に没頭できる独特の視点が得られると信じています。経験豊富なサイクリストであっても、カジュアルなライダーであっても、あなたを刺激し、挑戦させるツアーをご用意しています。"}
//                 </p>
//               </div>
//               <div>
//                 <img src={aboutUsImage} alt={isEnglish ? "Our team of cycling guides" : "サイクリングガイドチーム"} />
//               </div>
//             </div>
//           </section>
//         )}

//         {activeTab === 'plans' && !activePlan && (
//           <section className="plans">
//             <h2>{isEnglish ? 'Our Tour Plans' : 'ツアープラン'}</h2>
//             <div className="plan-cards">
//               {plans.map((plan) => (
//                 <div key={plan.id} className="plan-card">
//                   <img src={plan.image} alt={plan.title} />
//                   <h3>{plan.title}</h3>
//                   <p>{plan.description}</p>
//                   <button onClick={() => setActivePlan(plan.id)}>{isEnglish ? 'Learn More' : '詳細を見る'}</button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {activeTab === 'plans' && activePlan && (
//           <section className="individual-plan">
//             <button className="back-button" onClick={() => setActivePlan(null)}>
//               <ArrowLeft className="icon" />
//               {isEnglish ? 'Back to Plans' : 'プラン一覧に戻る'}
//             </button>
//             {plans.map((plan) => plan.id === activePlan && (
//               <div key={plan.id} className="plan-details">
//                 <div>
//                   <img src={plan.image} alt={plan.title} className="plan-image" />
//                 </div>
//                 <div>
//                   <h2>{plan.title}</h2>
//                   <p>{plan.fullDescription}</p>
//                   <div className="plan-info">
//                     <div>
//                       <strong>{isEnglish ? 'Duration:' : '期間:'}</strong> {plan.duration}
//                     </div>
//                     <div>
//                       <strong>{isEnglish ? 'Difficulty:' : '難易度:'}</strong> {plan.difficulty}
//                     </div>
//                     <div>
//                       <strong>{isEnglish ? 'Group Size:' : 'グループサイズ:'}</strong> {plan.groupSize}
//                     </div>
//                   </div>
//                   <h3>{isEnglish ? 'Tour Highlights' : 'ツアーのハイライト'}</h3>
//                   <ul>
//                     {plan.highlights.map((highlight, index) => (
//                       <li key={index}>{highlight}</li>
//                     ))}
//                   </ul>
//                   <a href="tel:+1234567890" className="call-to-book-button">
//                     <Phone className="icon" />
//                     {isEnglish ? 'Call to Book: +1 (234) 567-890' : '電話予約: +1 (234) 567-890'}
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </section>
//         )}

//         {activeTab === 'contact' && (
//           <section className="contact">
//             <h2>{isEnglish ? 'Contact Us' : 'お問い合わせ'}</h2>
//             <div className="contact-content">
//               <div className="contact-info">
//                 <div className="contact-item">
//                   <Mail className="icon" />
//                   <div>
//                     <h3>{isEnglish ? 'Email' : 'メール'}</h3>
//                     <a href="mailto:info@bicycletours.com">info@bicycletours.com</a>
//                   </div>
//                 </div>
//                 <div className="contact-item">
//                   <Phone className="icon" />
//                   <div>
//                     <h3>{isEnglish ? 'Phone' : '電話'}</h3>
//                     <a href="tel:+1234567890">+1 (234) 567-890</a>
//                   </div>
//                 </div>
//                 <div className="contact-item">
//                   <MapPin className="icon" />
//                   <div>
//                     <h3>{isEnglish ? 'Address' : '住所'}</h3>
//                     <p>
//                       123 Adventure Lane<br />
//                       Cycleville, CA 98765<br />
//                       {isEnglish ? 'United States' : 'アメリカ合衆国'}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="contact-map">
//                 <img src={locationImage} alt={isEnglish ? "Location map" : "所在地マップ"} />
//               </div>
//             </div>
//           </section>
//         )}
//       </main>

//       <footer>
//         <div className="footer">
//           <p>&copy; 2024 S.ISM. {isEnglish ? 'All rights reserved.' : 'All rights reserved.'}</p>
//         </div>
//       </footer>
//     </div>
//   )
// }
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BicycleTours from './components/BicycleTours';
import Home from './components/Home';
import About from './components/About';
import Plans from './components/Plans';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <BicycleTours>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BicycleTours>
    </Router>
  );
}

export default App;