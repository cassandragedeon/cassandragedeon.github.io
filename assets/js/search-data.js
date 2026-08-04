
const currentUrl = window.location.href;
const siteUrl = "https://cassandragedeon.github.io";
let updatedUrl = currentUrl.replace("https://cassandragedeon.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-à-propos",
    title: "à propos",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications scientifiques",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projets",
          title: "projets",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-enseignements",
          title: "enseignements",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "articles",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "articles",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-parution-de-l-ouvrage-collectif-psychologie-sociale-des-inégalités-perceptions-causes-et-conséquences-dunod-avec-un-chapitre-co-écrit-avec-céline-darnon-les-enfants-et-les-inégalités",
          title: 'Parution de l’ouvrage collectif Psychologie sociale des inégalités : perceptions, causes et conséquences...',
          description: "",
          section: "actualités",},{id: "news-organisation-avec-stella-tsamitrou-d-une-journée-de-regroupement-des-psychologues-de-l-éducation-nationale-1er-degré-au-sein-de-la-plateforme-e-3c-comportement-cerveau-cognition-à-l-ère-de-la-transition-numérique",
          title: 'Organisation, avec Stella Tsamitrou, d’une journée de regroupement des psychologues de l’Éducation nationale...',
          description: "",
          section: "actualités",},{id: "news-symposium-à-l-39-easp-2026-social-development-intergroup-cognition",
          title: 'Symposium à l&amp;#39;EASP 2026 — Social Development, Intergroup Cognition',
          description: "",
          section: "actualités",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-développement-de-la-catégorisation-sociale-et-des-attitudes-intergroupes",
          title: 'Développement de la catégorisation sociale et des attitudes intergroupes',
          description: "Comment le contexte façonne la catégorisation sociale et les attitudes intergroupes chez l&#39;enfant",
          section: "projets",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-biais-en-santé-communication-entre-médecins-et-patients",
          title: 'Biais en santé : communication entre médecins et patients',
          description: "Comment l&#39;origine ethno-raciale des patient·e·s façonne la communication médicale",
          section: "projets",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-compréhension-du-pouvoir-social-chez-l-39-enfant",
          title: 'Compréhension du pouvoir social chez l&amp;#39;enfant',
          description: "Les enfants comprennent-ils et réagissent-ils au pouvoir social ?",
          section: "projets",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-biais-en-santé-perception-de-la-douleur",
          title: 'Biais en santé : Perception de la douleur',
          description: "Comment les catégories sociales façonnent l&#39;évaluation de la douleur d&#39;autrui",
          section: "projets",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-grandir-ensemble-inclusion-en-maternelle-et-attitudes-envers-l-39-autisme",
          title: 'GRANDIR ENSEMBLE : inclusion en maternelle et attitudes envers l&amp;#39;autisme',
          description: "L&#39;impact des dispositifs d&#39;inclusion en maternelle sur les attitudes et interactions entre enfants",
          section: "projets",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'envoyer un courriel',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("mailto:%63%61%73%73%61%6E%64%72%61.%67%65%64%65%6F%6E@%75%63%61.%66%72", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://bsky.app/profile/cassge.bsky.social", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.linkedin.com/in/cassandra-gedeon", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3015-2473", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Cassandra-Gedeon-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4xfJhjIAAAAJ", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'langues',
          handler: () => {
            window.location.href = "/en-us" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
