'use client';

import Link from 'next/link';
import { useSetHeaderTheme } from '@/contexts/HeaderContext';

// Press Kit / Downloads (type 2 = MEDIA_DOWNLOAD)
const pressKitItems = [
  {
    title: 'PM – Verwählt?',
    img: 'PM15.jpg',
    link: 'https://democracy-deutschland.de/files/download/PM_Verw%C3%A4hlt_110122.pdf',
  },
  {
    title: 'DEMOCRACY – Ein Erklärfilm',
    img: 'Erkl%C3%A4rfilm.png',
    link: 'https://www.youtube.com/watch?v=DFXcnRdXA7k',
  },
  {
    title: 'PM – Taten statt Worte',
    img: 'PM14.jpg',
    link: 'https://democracy-deutschland.de/files/download/PM_TatenstattWorte_090821.pdf',
  },
  {
    title: 'Wahl-O-Meter – Ein Erklärfilm',
    img: 'Erkl%C3%A4rfilm2.png',
    link: 'https://www.youtube.com/watch?v=uWwQquy_MD0',
  },
  {
    title: 'DEMOCRACY – Klappflyer (A4)',
    img: 'Klappflyer.png',
    link: 'https://democracy-deutschland.de/files/download/DEMOCRACY-Klappflyer.pdf',
  },
  {
    title: 'DEMOCRACY – App-Logo',
    img: 'AppIcon.png',
    link: 'https://democracy-deutschland.de/files/download/DEMOCRACY-Logo.png',
  },
];

// Blog posts from WordPress
const blogPosts = [
  {
    title: "News #37 – Weihnachtsbrief '24",
    img: 'https://democracy-deutschland.de/blog/wp-content/uploads/2024/12/News_37.jpg',
    link: 'https://democracy-deutschland.de/blog/?post_type=post&p=800',
  },
  {
    title: "News #36 – Weihnachtsbrief '23",
    img: 'https://democracy-deutschland.de/blog/wp-content/uploads/2024/12/News_36.jpg',
    link: 'https://democracy-deutschland.de/blog/?post_type=post&p=808',
  },
  {
    title: 'Berlin,  Wählen ist nicht  abstimmen!',
    img: 'https://democracy-deutschland.de/blog/wp-content/uploads/2023/02/Kommentar_05_Blog.jpg',
    link: 'https://democracy-deutschland.de/blog/?post_type=post&p=816',
  },
  {
    title: 'In Lützerath verläuft die Demokratiegrenze',
    img: 'https://democracy-deutschland.de/blog/wp-content/uploads/2024/12/Kommentar_04c_Blog-2048x1054-1.png',
    link: 'https://democracy-deutschland.de/blog/?post_type=post&p=823',
  },
  {
    title: "News #35 – Weihnachtsbrief '22",
    img: 'https://democracy-deutschland.de/blog/wp-content/uploads/2024/12/News_35.png',
    link: 'https://democracy-deutschland.de/blog/?post_type=post&p=828',
  },
  {
    title: 'Richtlinienkompetenz: Darf es noch ein bisschen weniger Demokratie sein?',
    img: 'https://democracy-deutschland.de/blog/wp-content/uploads/2024/12/Kommentar_Richtlinienkompetenz-2048x1054-1.png',
    link: 'https://democracy-deutschland.de/blog/?post_type=post&p=836',
  },
  {
    title: 'News #34 – Geschichte der Demokratie',
    img: 'https://democracy-deutschland.de/blog/wp-content/uploads/2024/12/News_34.png',
    link: 'https://democracy-deutschland.de/blog/?post_type=post&p=843',
  },
  {
    title: 'Realitycheck – Bündnis90/Die Grünen: Aufgabe des Pazifismus',
    img: 'https://democracy-deutschland.de/blog/wp-content/uploads/2024/12/34_04_RealityCheck.jpg',
    link: 'https://democracy-deutschland.de/blog/?post_type=post&p=851',
  },
  {
    title: 'News #33 – Impfpflicht und 12.000 Euro',
    img: 'https://democracy-deutschland.de/blog/wp-content/uploads/2024/12/News_33.png',
    link: 'https://democracy-deutschland.de/blog/?post_type=post&p=854',
  },
];

// Pressespiegel (type 0 = MEDIA_PRESS)
const pressArticles = [
  {
    title: 'Space Frogs – Wie der Bundestag Gesetze durch trickst',
    img: 'spacefrogs2_560.jpg',
    link: 'https://www.youtube.com/watch?v=CATI5fJQkHg',
  },
  {
    title: 'DLF Nova – DEMOCRACY App: Auch nach der Wahl Einfluss nehmen',
    img: 'DLFNova_560.png',
    link: 'https://www.deutschlandfunknova.de/beitrag/democracy-app-auch-nach-der-wahl-einfluss-nehmen',
  },
  {
    title: 'HNA – Göttinger Demokratie-Aktivist entwickelt Wahl-O-Meter: Kandidaten-Suche via App',
    img: 'HNA_560.png',
    link: 'https://www.hna.de/lokales/goettingen/goettingen-ort28741/goettinger-demokratie-aktivist-entwickelt-wahl-meter-kandidaten-suche-via-app-90985459.html',
  },
  {
    title: 'Focus – Mit dieser App können Sie Abstimmungen im Bundestag mit ihren Ansichten vergleichen',
    img: 'Focus_560.png',
    link: 'https://www.focus.de/digital/bundestagswahl-2021-mit-dieser-app-koennen-sie-abstimmungen-im-bundestag-mit-ihren-ansichten-vergleichen_id_24262915.html',
  },
  {
    title: 'Horizont – Diese Guerilla-Aktion entzaubert die Wahlversprechen der Parteien',
    img: 'Horizont_560.png',
    link: 'https://www.horizont.net/marketing/nachrichten/finde-die-taten-hinter-den-worten-diese-guerilla-aktion-entzaubert-die-wahlversprechen-der-parteien-194348',
  },
  {
    title: 'DEMOCRACY in LdN#255 ab Minute 34:00',
    img: 'LdN_560.png',
    link: 'https://lagedernation.org/podcast/ldn255-countdown-zur-bundestagswahl-kampagne-gegen-direktkandidierende-klimaschutz-in-den-wahlprogrammen-greenpeace-vs-vw-meldeplattform-fuer-steuerbetrug/',
  },
  {
    title: 'Tagesschau – Alternativen zum Wahl-O-Mat',
    img: 'Tagesschau_560.png',
    link: 'https://www.youtube.com/watch?v=LLKEt477otU',
  },
  {
    title: 'Chip – DEMOCRACY',
    img: 'Chip_560.png',
    link: 'https://www.chip.de/downloads/webapp-Democracy_183822304.html',
  },
  {
    title: 'DEMOCRACY in WAHLEN - Der Film',
    img: 'Wahlen_560.png',
    link: 'https://www.youtube.com/watch?v=hbbt4CYlIUI',
  },
  {
    title: 'Golem – Der verbesserte Wahl-O-Mat in einer App?',
    img: 'Golem_560.png',
    link: 'https://www.golem.de/news/democracy-der-verbesserte-wahl-o-mat-in-einer-app-1906-141599.html',
  },
  {
    title: 'Die Macher – Transparente Demokratie mit der DEMOCRACY App',
    img: 'Macherb_560.png',
    link: 'https://www.youtube.com/watch?v=TcINuHBwk4g',
  },
  {
    title: 'Westfalenpost – App soll Entscheidungen im Bundestag transparenter machen',
    img: 'Westfalenpost_560.png',
    link: 'https://www.wp.de/staedte/altkreis-brilon/article216147653/app-soll-den-bundestag-transparenter-machen.html',
  },
  {
    title: 'MDR Doku – DEMOCRACY in "Mehr Bürger an die Macht?"',
    img: 'MDRDoku_560.png',
    link: 'https://www.youtube.com/watch?v=5sbPOUL-5Fs',
  },
  {
    title: 'Deutsche Welle – Der Tag mit Raimund Stündel: Gast des Tages Marius Krüger',
    img: 'DeutscheWelle_560.png',
    link: 'https://www.youtube.com/watch?v=RkSq_rBpVlA',
  },
  {
    title: 'Frankfurter Rundschau – Die Demokratie-Macher',
    img: 'FR_560.png',
    link: 'https://www.fr.de/kultur/demokratie-macher-10908580.html',
  },
  {
    title: 'WIRED – DEMOCRACY in Die Bundesregierung sollte Wort halten',
    img: 'wired_560.png',
    link: 'https://www.gq-magazin.de/auto-technik/article/die-bundesregierung-sollte-wort-halten-und-unserer-demokratie-ein-update-fuer-mehr-beteiligung-verpassen',
  },
  {
    title: 'Göttinger Tageblatt – Göttinger entwickelt App „DEMOCRACY"',
    img: 'GT_560.png',
    link: 'https://www.goettinger-tageblatt.de/wirtschaft/regional/goettinger-entwickelt-app-democracy-45LMUPT2SK65OINSFRXMRLLIZ4.html',
  },
  {
    title: 'Gründerszene – Die App für eine transparentere Demokratie',
    img: 'Gruenderszene_560.png',
    link: 'https://www.businessinsider.de/gruenderszene/media/democracy-politische-teilhabe/',
  },
  {
    title: 'AudioPreneur Podcast - DEMOCRACY Deutschland – die App für mehr Demokratie',
    img: 'audiopreneur.minified.png',
    link: 'https://audiopreneur.de/34-ap-democracy-deutschland-die-app-fuer-mehr-demokratie/',
  },
  {
    title: 'Fabio De Masi - Demokratie in Echtzeit',
    img: 'Fabio_Di_Masi.minified.png',
    link: 'https://www.facebook.com/fabio.d.masi/videos/724139911119044/?hc_ref=ARQOUAwCEBF-BSc3ka28z7nFVaOjJVCYgIxLzJ_DEYH0VZfZpljYV3uPLum3LCkcB2s',
  },
  {
    title: 'Marina Weisband - Wahl-O-Mat, aber für immer',
    img: 'Marina_Weisband.minified.png',
    link: 'http://marinaweisband.de/der-wahl-o-mat-fuer-immer/',
  },
];

// Publikationen (type 1 = MEDIA_PUBLICATION)
const publications = [
  {
    title: 'DEMOCRACY – Volksabstimmung per App',
    img: 'Erkl%C3%A4rfilm_3.png',
    link: 'https://www.youtube.com/watch?v=4n7APCS2hMM',
  },
  {
    title: 'DEMOCRACY – Mission Statement',
    img: 'Mission_Statement.png',
    link: 'https://www.youtube.com/watch?v=E3KvgGrGQO4',
  },
  {
    title: 'Wahl-O-Meter – Ein Erklärfilm',
    img: 'Erkl%C3%A4rfilm_2.png',
    link: 'https://www.youtube.com/watch?v=uWwQquy_MD0',
  },
  {
    title: 'DEMOCRACY – Die Geschichte',
    img: 'Geschichte.png',
    link: 'https://www.youtube.com/watch?v=ruCzHnp6V4o',
  },
  {
    title: 'DEMOCRACY – Ein Erklärfilm',
    img: 'Erkl%C3%A4rfilm_1.png',
    link: 'https://www.youtube.com/watch?v=DFXcnRdXA7k',
  },
  {
    title: 'DEMOCRACY goes Crowdfunding',
    img: 'CF.png',
    link: 'https://www.youtube.com/watch?v=q0frFha7QE8',
  },
];

interface MediaArticleProps {
  title: string;
  img: string;
  link: string;
  useExternalImg?: boolean;
}

function MediaArticle({ title, img, link, useExternalImg = false }: MediaArticleProps) {
  const imgSrc = useExternalImg
    ? img
    : img.startsWith('http')
      ? img
      : `https://democracy-deutschland.de/files/medien/${img}`;

  return (
    <div className="w-full md:w-1/3 px-4" style={{ paddingBottom: '30px' }}>
      <div
        style={{
          border: 'rgb(151,151,151) solid 1px',
          background: 'rgb(216,216,216)',
          minHeight: '200px',
          maxHeight: '200px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <img
            src={imgSrc}
            alt={title}
            className="w-full object-cover"
            style={{ minHeight: '200px' }}
          />
          <div
            className="overlay absolute inset-0 flex items-end justify-center"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
            }}
          >
            <div className="p-4 text-center">
              <h5 className="text-white text-sm font-medium leading-tight">{title}</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function PressPage() {
  useSetHeaderTheme('light');
  
  return (
    <div className="bg-white pt-16">
      {/* Press Kit Section */}
      <div className="container mx-auto px-4">
        <div className="pt-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Presse-Kit</h1>
          <h5 className="text-lg text-gray-600 pt-5 pb-12">Unsere Story</h5>
        </div>
        <div className="flex flex-wrap -mx-4">
          {pressKitItems.map((item, idx) => (
            <MediaArticle key={idx} title={item.title} img={item.img} link={item.link} />
          ))}
        </div>
      </div>

      {/* Blogs Section */}
      <div className="container mx-auto px-4">
        <div className="pt-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Blogs</h1>
          <h5 className="text-lg text-gray-600 pt-5 pb-12">DEMOCRACY bloggt</h5>
        </div>
        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post, idx) => (
            <MediaArticle key={idx} title={post.title} img={post.img} link={post.link} useExternalImg />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center pt-12">
          <img
            src="/files/images/democracy-bar.png"
            alt="Democracy Bar"
            className="w-full max-w-3xl"
          />
        </div>
      </div>

      {/* Pressespiegel Section */}
      <div className="container mx-auto px-4">
        <div className="pt-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Pressespiegel</h1>
          <h5 className="text-lg text-gray-600 pt-5 pb-12">Über DEMOCRACY berichtet</h5>
        </div>
        <div className="flex flex-wrap -mx-4">
          {pressArticles.map((article, idx) => (
            <MediaArticle key={idx} title={article.title} img={article.img} link={article.link} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center pt-12">
          <img
            src="/files/images/democracy-bar.png"
            alt="Democracy Bar"
            className="w-full max-w-3xl"
          />
        </div>
      </div>

      {/* Publikationen Section */}
      <div className="container mx-auto px-4">
        <div className="pt-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Publikationen</h1>
          <h5 className="text-lg text-gray-600 pt-5 pb-12">DEMOCRACY veröffentlicht</h5>
        </div>
        <div className="flex flex-wrap -mx-4">
          {publications.map((pub, idx) => (
            <MediaArticle key={idx} title={pub.title} img={pub.img} link={pub.link} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center pt-12">
          <img
            src="/files/images/democracy-bar.png"
            alt="Democracy Bar"
            className="w-full max-w-3xl"
          />
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4">
        <div className="pt-12 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Sie wollen einen Artikel über uns schreiben? Kontaktieren Sie uns!
          </h3>
        </div>
        <div className="flex justify-center pt-12 pb-12">
          <Link href="/contact" className="no-underline">
            <div
              className="cursor-pointer text-white text-center transition-shadow hover:shadow-md"
              style={{
                border: 'rgb(151, 151, 151) solid 1px',
                borderRadius: '5px',
                backgroundColor: 'rgb(68, 148, 211)',
                minHeight: '50px',
                padding: '12px',
                fontSize: '16px',
                margin: '5px auto',
              }}
            >
              KONTAKTFORMULAR
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
