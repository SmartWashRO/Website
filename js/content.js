// SmartWash — bilingual content source
// Edit this file to change any copy, pricing, or contact info.
//
// This is a plain script (not an ES module) on purpose: it works whether
// the site is opened by double-clicking the HTML file, previewed locally,
// or viewed live on the web. Everything is attached to window.SmartWash.

window.SmartWash = window.SmartWash || {};

window.SmartWash.CONTENT = {
  en: {
    nav: { home: 'Home', about: 'How it works', pricing: 'Pricing', business: 'For Business', contact: 'Contact', call: 'Call now' },
    footer: { tagline: 'Waterless mobile car wash, Sibiu, Romania.', rights: '© 2026 SmartWash. All rights reserved.' },

    home: {
      badge: 'Waterless · on-site · Sibiu',
      title: 'Clean car.\nSmart choice.',
      subtitle: 'Park at any of our sites, and we\u2019ll hand-wash your car — waterless — while you shop, work, or relax. No booking, no waiting, no lifting a finger.',
      ctaCall: 'Call now', ctaWhatsapp: 'WhatsApp us',

      locationsIntro: 'Currently operating at',

      benefitsTitle: 'Why people choose SmartWash',
      benefitsSubtitle: 'Everything about this is designed to save you time and hassle.',
      benefits: [
        { t: 'No advance booking', d: 'Just pull in. No appointment, no app to open, no waiting for a slot.' },
        { t: 'Zero wait time', d: "We get started right away — you're never standing in a queue." },
        { t: 'No self-cleaning', d: 'Our attendants do all the work, by hand. You do nothing.' },
        { t: 'Phone notifications', d: "We message you the moment your car is ready — no need to check." },
        { t: 'Online & card payments', d: 'Pay by card or online. No cash needed, ever.' },
        { t: 'Your time is yours', d: 'Shop, eat, grab a coffee, watch a movie — we\u2019ll handle the rest.' },
      ],

      stats: [ { value: '99.3%', label: 'less water used' }, { value: '30-45 min', label: 'average visit' }, { value: '0', label: 'trips to a car wash' } ],

      servicesTitle: 'Pricing', servicesSubtitle: 'Two options. No hidden extras.',
      services: [
        { name: 'Exterior Wash', desc: 'Hand exterior wash — body, wheels, tires, and windows, entirely waterless.', price: '45 lei', duration: '25\u201330 min' },
        { name: 'Exterior + Interior', desc: 'Full exterior wash plus interior vacuum, dashboard, and console detail.', price: '65 lei', duration: '40\u201345 min' },
      ],

      howTitle: 'How it works',
      steps: [
        { t: 'Park anywhere we operate' },
        { t: 'Speak to our attendant' },
        { t: 'Pay by card or online' },
        { t: 'Go enjoy your destination' },
        { t: 'Come back to a perfectly clean car' },
      ],

      ecoTeaserTitle: 'Why waterless',
      ecoTeaserHeading: 'A wash that skips the hose entirely',
      ecoTeaserText: 'Every SmartWash visit uses a fraction of the water of a traditional wash — no tap, no drain, no runoff. Curious how the formula actually works?',
      ecoTeaserLink: 'See how it works',

      mapTitle: 'Where to find us',
      mapSubtitle: 'Park at any of our sites in Sibiu — no need to book ahead.',

      testimonialsTitle: 'Client testimonials',
      testimonials: [
        { name: 'Olivia Wilson', quote: 'I love this service! The quality is incredible and the team is excellent at communicating. I will definitely book again.' },
        { name: 'Andrei Pop', quote: "I didn't have to plan around it at all — they washed the car while I was shopping." },
      ],

      ctaTitle: 'Ready for a spotless car, without lifting a finger?', ctaSub: "Call or message us — or just park at one of our sites.",
    },

    about: {
      badge: 'How it works',
      title: 'The waterless wash, explained',
      subtitle: 'What waterless actually means, why it works, and why it beats the alternatives.',

      whatTitle: 'What is a waterless car wash?',
      whatText: "Instead of hosing a car down, we apply a polymer-rich cleaning solution directly to each panel. The polymers surround dirt and grit particles and lift them away from the paint, so a microfiber towel can glide the mess off rather than grind it in. No hose, no bucket, no runoff — just a bottle, a towel, and a trained hand.",

      chemistryTitle: 'The chemistry, briefly',
      chemistryPoints: [
        { t: 'Encapsulates dirt', d: 'Lubricating polymers surround grit so it lifts away instead of scratching the clearcoat.' },
        { t: 'pH-balanced', d: 'Safe on every paint type, trim, and finish — nothing abrasive, nothing acidic.' },
        { t: 'Leaves a protective layer', d: 'A light, water- and UV-resistant finish is left behind after every wash.' },
        { t: 'Biodegradable formula', d: 'Nothing goes down a drain, and what little residue there is breaks down cleanly.' },
      ],

      stepsTitle: 'The process, step by step',
      steps: [
        { t: 'Pre-check & dust-off', d: 'A quick walk-around and a soft dust-off so we\u2019re not dragging loose grit across the paint.' },
        { t: 'Waterless solution, panel by panel', d: 'The cleaning solution is applied section by section, never left to dry on the surface.' },
        { t: 'Lift, don\u2019t rub', d: 'A clean microfiber towel lifts the loosened dirt away with light pressure, folded fresh often.' },
        { t: 'Wheels, tires & glass', d: 'Dedicated towels and products for wheels, tires, and glass — never mixed with the paintwork tools.' },
        { t: 'Interior (if selected)', d: 'Vacuum, dashboard, console, and door panels, finished with a light interior wipe-down.' },
        { t: 'Final inspection', d: 'A last look under good light to catch anything missed before you get the notification.' },
      ],

      ecoTitle: 'The eco-friendly case',
      ecoText: 'A traditional wash bay can use 150\u2013300 litres of water per car, most of it running straight into a drain carrying oil, brake dust, and detergent with it. SmartWash uses a fraction of that per vehicle, with nothing to treat or dispose of afterwards.',
      ecoPoints: [
        { t: '99.3% less water', d: 'Compared to the average traditional wash bay, per vehicle.' },
        { t: 'No contaminated runoff', d: 'Nothing carrying oil, brake dust, or detergent reaches a drain or the ground.' },
        { t: 'No infrastructure', d: 'No water mains, drainage, or power hookup required anywhere we operate.' },
      ],

      comparisonTitle: 'Why not just use a regular car wash?',
      comparisonText: 'Every option on the market makes a trade-off. Here\u2019s where SmartWash lands compared to the two most common alternatives.',
      comparison: [
        { t: 'vs. full-service / tunnel wash', d: 'No queue, no driving there, and no rotating brushes that can carry grit from car to car and leave fine swirl marks. We come to you instead.' },
        { t: 'vs. self-service bays', d: 'No standing outside with a wand in the cold or rain, no pay-by-the-minute pressure, and no arm-stretching for an SUV roof. We do the work by hand.' },
        { t: 'vs. doing it yourself', d: 'No hose, no bucket, no hour of your weekend gone — and a more consistent, professional finish every time.' },
      ],

      ctaTitle: 'Ready to see it for yourself?', ctaSub: "Call or message us — we'll find a time that works.",
    },

    business: {
      badge: 'For Business',
      title: 'Bring SmartWash to your site — or your fleet',
      subtitle: 'Two ways to work with us: host SmartWash as an amenity at your venue, or put your company\u2019s vehicles on a wash program.',

      stats: [ { value: '99.3%', label: 'less water used' }, { value: '0 lei', label: 'cost to host' }, { value: 'Zero', label: 'infrastructure needed' } ],

      hostTitle: 'Host SmartWash at your venue',
      hostSubtitle: 'For malls, retail parks, pop-up events, municipalities, and any site operator with parking. A five-star amenity your visitors will talk about — at no cost to you.',
      hostBenefits: [
        { t: 'Zero cost to host', d: 'No rent, no revenue share, no setup fee — ever.' },
        { t: 'No infrastructure', d: 'No water, drainage, or power connection required from your site.' },
        { t: 'A real amenity', d: 'Visitors stay longer when their car is being taken care of while they shop or work.' },
        { t: 'Fully insured team', d: 'Uniformed, insured attendants — no changes to your site access or operations.' },
      ],

      fleetTitle: 'Put your fleet on a wash program',
      fleetSubtitle: 'For companies with vehicle fleets, and corporates or factories with employee parking.',
      fleetBenefits: [
        { t: 'Zero downtime', d: 'Vehicles are washed while parked — no trip to a wash bay, ever.' },
        { t: 'Always presentable', d: 'Client-facing vehicles stay showroom-clean, on a schedule you set.' },
        { t: 'One monthly invoice', d: 'Simple, predictable pricing per vehicle — no admin overhead.' },
        { t: 'An employee perk', d: 'Extend the program to staff personal vehicles as a benefit.' },
      ],

      segmentsTitle: 'Who we work with',
      segments: [
        { t: 'Shopping malls & retail parks' },
        { t: 'Pop-up events & venues' },
        { t: 'Municipalities & public sites' },
        { t: 'Corporate offices & factories' },
        { t: 'Fleet operators' },
        { t: 'Any site with parking' },
      ],

      clientsTitle: 'Sites & partners we work with',

      formTitle: 'Tell us about your site or fleet',
      formSubtitle: "Whether you're a venue operator or a fleet manager, share a few details and we'll come back with a plan.",

      ctaTitle: "Let's talk about your site", ctaSub: 'No commitment — tell us about your location or fleet and we\u2019ll take it from there.',
    },

    contact: {
      badge: 'Contact', title: 'Get in touch', subtitle: "Call or message us — we'll find a time that works.",
      phoneLabel: 'Phone', whatsappLabel: 'WhatsApp', emailLabel: 'Email', addressLabel: 'Based in', hoursLabel: 'Hours',
      address: 'Sibiu, Romania', hours: 'Daily, 08:00\u201320:00',
    },
  },

  ro: {
    nav: {
      home: 'Acasă',
      about: 'Cum funcționează',
      pricing: 'Prețuri',
      business: 'Pentru companii',
      contact: 'Contact',
      call: 'Sună acum'
    },

    footer: {
      tagline: 'Spălare auto fără apă, în Sibiu.',
      rights: '© 2026 SmartWash. Toate drepturile rezervate.'
    },

    home: {
      badge: 'Fără apă · direct la tine · Sibiu',
      title: 'Mașină curată,\nfără griji.',
      subtitle:
        'Parchezi la una dintre locațiile noastre și ne lași mașina — o spălăm manual, fără apă, cât timp tu faci cumpărături, lucrezi sau te relaxezi. Fără programare, fără așteptare, fără stres.',
      ctaCall: 'Sună acum',
      ctaWhatsapp: 'Scrie-ne pe WhatsApp',

      locationsIntro: 'Ne găsești acum la',

      benefitsTitle: 'De ce aleg clienții SmartWash',
      benefitsSubtitle: 'Totul este gândit ca tu să câștigi timp și energie.',
      benefits: [
        { t: 'Fără programare', d: 'Doar parchezi — fără programare, fără aplicații și fără să aștepți un loc liber.' },
        { t: 'Zero timp de așteptare', d: 'Începem pe loc — nu stai niciodată la coadă.' },
        { t: 'Fără spălare pe cont propriu', d: 'Echipa noastră se ocupă de tot, manual — tu nu trebuie să faci nimic.' },
        { t: 'Notificări pe telefon', d: 'Te anunțăm imediat ce mașina este gata, ca să nu pierzi timp verificând.' },
        { t: 'Plată online sau cu cardul', d: 'Plătești cu cardul sau online — fără numerar.' },
        { t: 'Timpul tău rămâne liber', d: 'Faci cumpărături, mănânci ceva, bei o cafea sau vezi un film — noi ne ocupăm de mașină.' }
      ],

      stats: [
        { value: '99,3%', label: 'mai puțină apă' },
        { value: '30–45 min', label: 'durata medie' },
        { value: '0', label: 'drumuri la spălătorie' }
      ],

      servicesTitle: 'Prețuri',
      servicesSubtitle: 'Două opțiuni. Fără costuri ascunse.',
      services: [
        {
          name: 'Spălare Exterior',
          desc: 'Spălare manuală exterior — caroserie, jante, anvelope și geamuri. Totul fără apă.',
          price: '45 lei',
          duration: '25–30 min'
        },
        {
          name: 'Exterior + Interior',
          desc: 'Spălare exterior completă, plus aspirare interior, bord și consolă.',
          price: '65 lei',
          duration: '40–45 min'
        }
      ],

      howTitle: 'Cum funcționează',
      steps: [
        { t: 'Parchezi la una dintre locații' },
        { t: 'Vorbești cu un membru al echipei' },
        { t: 'Plătești cu cardul sau online' },
        { t: 'Îți vezi de treabă' },
        { t: 'Revii la o mașină impecabilă' }
      ],

      ecoTeaserTitle: 'De ce fără apă',
      ecoTeaserHeading: 'O spălare care nu are nevoie de furtun',
      ecoTeaserText:
        'Fiecare vizită SmartWash folosește doar o fracțiune din apa unei spălări clasice — fără apă curentă, fără canalizare, fără reziduuri. Vrei să vezi procesul pas cu pas?',
      ecoTeaserLink: 'Vezi cum funcționează',

      mapTitle: 'Unde ne găsești',
      mapSubtitle: 'Parchezi la una dintre locațiile noastre din Sibiu, fără nicio programare.',

      testimonialsTitle: 'Ce spun clienții',
      testimonials: [
        {
          name: 'Ioana Marinescu',
          quote:
            'Nu mai pierd timp la spălătorie — au venit la birou și mașina era gata cât am fost în ședințe.'
        },
        {
          name: 'Cristian Radu',
          quote:
            'Seriozitate și punctualitate — exact ce îți dorești când lași mașina pe mâna cuiva.'
        }
      ],

      ctaTitle: 'O mașină impecabilă, fără griji?',
      ctaSub: 'Sună-ne, scrie-ne sau parchează direct la una dintre locațiile noastre.'
    },

    about: {
      badge: 'Cum funcționează',
      title: 'Spălarea fără apă, explicată pe înțelesul tuturor',
      subtitle:
        'Ce înseamnă cu adevărat „fără apă", de ce funcționează și de ce este mai bună decât alternativele.',

      whatTitle: 'Ce este o spălare auto fără apă?',
      whatText:
        'În loc de furtun, folosim o soluție de curățare bogată în polimeri, aplicată direct pe fiecare panou. Polimerii înconjoară praful și murdăria și le desprind de pe vopsea, astfel încât laveta din microfibră le ridică ușor, fără frecare. Fără furtun, fără găleată, fără reziduuri — doar un flacon, o lavetă și un tehnician priceput.',

      chemistryTitle: 'Chimia, pe scurt',
      chemistryPoints: [
        {
          t: 'Încapsulează murdăria',
          d: 'Polimerii lubrifianți înconjoară particulele, astfel încât se ridică fără să zgârie lacul.'
        },
        {
          t: 'pH echilibrat',
          d: 'Sigur pentru orice tip de vopsea, garnitură sau finisaj — nimic abraziv, nimic acid.'
        },
        {
          t: 'Strat protector',
          d: 'După fiecare spălare rămâne un finisaj ușor, rezistent la apă și la razele UV.'
        },
        {
          t: 'Formulă biodegradabilă',
          d: 'Fără reziduuri care să ajungă în sol sau canalizare.'
        }
      ],

      stepsTitle: 'Procesul, pas cu pas',
      steps: [
        {
          t: 'Verificare & îndepărtare praf',
          d: 'O scurtă inspecție și o îndepărtare ușoară a prafului pentru a evita zgârieturile.'
        },
        {
          t: 'Aplicare soluție',
          d: 'Soluția se aplică panou cu panou, fără a o lăsa să se usuce.'
        },
        {
          t: 'Ridicare, nu frecare',
          d: 'Laveta curată ridică murdăria cu presiune minimă.'
        },
        {
          t: 'Roți, anvelope & geamuri',
          d: 'Produse și lavete dedicate, fără amestec cu cele pentru caroserie.'
        },
        {
          t: 'Interior (opțional)',
          d: 'Aspirare, bord, consolă, panouri uși.'
        },
        {
          t: 'Inspecție finală',
          d: 'Verificare completă înainte de notificare.'
        }
      ],

      ecoTitle: 'Argumentul ecologic',
      ecoText:
        'O spălare tradițională poate consuma 150–300 litri de apă per mașină, iar mare parte ajunge în canalizare cu reziduuri. SmartWash folosește doar o fracțiune, fără scurgeri și fără infrastructură.',

      ecoPoints: [
        { t: '99,3% mai puțină apă', d: 'Consum semnificativ redus față de spălătoriile clasice.' },
        { t: 'Fără scurgeri contaminate', d: 'Niciun reziduu nu ajunge în sol sau canalizare.' },
        { t: 'Fără infrastructură necesară', d: 'Nu este nevoie de apă curentă, canalizare sau curent electric.' }
      ],

      comparisonTitle: 'De ce nu o spălătorie obișnuită?',
      comparisonText: 'Fiecare alternativă are compromisurile ei. Iată cum se compară SmartWash.',
      comparison: [
        {
          t: 'vs. tunel',
          d: 'Fără cozi, fără perii care pot zgâria, fără drumuri suplimentare.'
        },
        {
          t: 'vs. self-service',
          d: 'Fără stat în frig sau ploaie, fără presiune pe timp, fără efort fizic.'
        },
        {
          t: 'vs. DIY',
          d: 'Fără furtun, fără găleată, fără pierdere de timp.'
        }
      ],

      ctaTitle: 'Vrei să vezi cum funcționează în realitate?',
      ctaSub: 'Sună-ne sau scrie-ne — găsim un moment potrivit.'
    },

    business: {
      badge: 'Pentru companii',
      title: 'Adu SmartWash la locația ta — sau la flota ta',
      subtitle:
        'Două moduri de colaborare: ca serviciu pentru vizitatori sau ca program pentru flote.',

      stats: [
        { value: '99,3%', label: 'mai puțină apă' },
        { value: '0 lei', label: 'cost de găzduire' },
        { value: 'Zero', label: 'infrastructură necesară' }
      ],

      hostTitle: 'Găzduiește SmartWash la locația ta',
      hostSubtitle:
        'Pentru mall-uri, parcuri comerciale, evenimente, municipalități — un serviciu premium fără costuri.',

      hostBenefits: [
        { t: 'Zero cost', d: 'Fără chirie, fără comision, fără taxe.' },
        { t: 'Fără infrastructură', d: 'Nu ai nevoie de apă, canalizare sau curent.' },
        { t: 'Beneficiu real', d: 'Vizitatorii stau mai mult când mașina lor este îngrijită.' },
        { t: 'Echipe asigurate', d: 'Personal uniformizat, instruit și asigurat.' }
      ],

      fleetTitle: 'Program pentru flote',
      fleetSubtitle: 'Pentru companii cu flote sau parcări de angajați.',

      fleetBenefits: [
        { t: 'Zero timp pierdut', d: 'Mașinile sunt spălate direct în parcare.' },
        { t: 'Imagine impecabilă', d: 'Vehiculele rămân curate constant.' },
        { t: 'O singură factură', d: 'Preț fix lunar, fără birocrație.' },
        { t: 'Beneficiu pentru angajați', d: 'Poate fi extins și la mașinile personale.' }
      ],

      segmentsTitle: 'Cu cine lucrăm',
      segments: [
        { t: 'Mall-uri și parcuri comerciale' },
        { t: 'Evenimente și locații' },
        { t: 'Municipalități' },
        { t: 'Corporații și fabrici' },
        { t: 'Operatori de flote' },
        { t: 'Orice locație cu parcare' }
      ],

      clientsTitle: 'Locații & parteneri',

      formTitle: 'Spune-ne despre locația sau flota ta',
      formSubtitle: 'Trimite câteva detalii și revenim cu o propunere.',

      ctaTitle: 'Hai să vorbim despre locația ta',
      ctaSub: 'Fără obligații — ne spui detaliile, noi ne ocupăm de restul.'
    },

    contact: {
      badge: 'Contact',
      title: 'Hai să vorbim',
      subtitle: 'Sună-ne sau scrie-ne — găsim un moment potrivit.',
      phoneLabel: 'Telefon',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      addressLabel: 'Ne găsești în',
      hoursLabel: 'Program',
      address: 'Sibiu, România',
      hours: 'Zilnic, 08:00–20:00'
    }
  },
};


window.SmartWash.CONTACT = { phone: '+40 755 282 775', phoneTel: 'tel:+40755282775', whatsapp: 'https://wa.me/40755282775', email: 'hello@smartwash.ro' };
