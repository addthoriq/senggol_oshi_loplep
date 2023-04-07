dataSetVersion = "2023-04-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter berdasarkan Dimensi",
    key: "dimensi",
    checked: false,
    sub: [
      { name: "2D (Waifu)", key: "waifu" },
      { name: "3D (Oshii)", key: "oshii" },
    ]
  },
  {
    name: "Filter berdasarkan Gen",
    key: "gen",
    checked: false,
    sub: [
      { name: "μ's", key: "muse" },
      { name: "Aqours", key: "aqours" },
      { name: "Nijigasaki", key: "niji" },
      { name: "Liella", key: "liella" },
      { name: "School Idol Musical", key: "sim" },
      { name: "Hasunosora", key: "hasu" },
    ]
  },
];

var waifu = "idol/";
var oshii = "voiceactress/";

dataSet[dataSetVersion].characterData = [
  // Begin Muse
  {
    name: "Kosaka Honoka",
    img: waifu + "4Kousaka-Honoka-2nSYRU.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Ayase Eli",
    img: waifu + "1Ayase-Eli-wRbUwD.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: ["muse"]
    }
  },
  {
    name: "Minami Kotori",
    img: waifu + "9Minami-Kotori-97bAtR.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: ["muse"]
    }
  },
  {
    name: "Sonoda Umi",
    img: waifu + "13Sonoda-Umi-Gr3Hk1.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Hashizora Rin",
    img: waifu + "2Hoshizora-Rin-1hRTnq.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Nishikino Maki",
    img: waifu + "10Nishikino-Maki-85vaOk.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Tojo Nozomi",
    img: waifu + "15Toujou-Nozomi-lfnEwQ.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Koizumi Hanayo",
    img: waifu + "3Koizumi-Hanayo-wuvH3R.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Yazawa Nico",
    img: waifu + "18Yazawa-Nico-giFa6q.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "muse" ]
    }
  },
  // End Muse
  // Begin Aqours
  {
    name: "Takami Chika",
    img: waifu + "14Takami-Chika-MumE0U.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Sakurauchi Riko",
    img: waifu + "12Sakurauchi-Riko-p2EuTb.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Matsuura Kanan",
    img: waifu + "8Matsuura-Kanan-aT2Td5.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Kurosawa Dia",
    img: waifu + "6Kurosawa-Dia-6ovIG8.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Watanabe You",
    img: waifu + "17Watanabe-You-En1r2L.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Tsushima Yoshiko",
    img: waifu + "16Tsushima-Yoshiko-NdFuZH.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Kunikida Hanamaru",
    img: waifu + "5Kunikida-Hanamaru-TomAYd.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Ohara Mari",
    img: waifu + "11Ohara-Mari-nI3CW6.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  {
    name: "Kurosawa Ruby",
    img: waifu + "7Kurosawa-Ruby-RoBWBL.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "aqours" ]
    }
  },
  // End Aqours
  // Begin Nijigasaki
  {
    name: "Uehara Ayumu",
    img: waifu + "102Uehara-Ayumu-KN13pl.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Nakasu Kasumi",
    img: waifu + "67Nakasu-Kasumi-1w2SQe.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Osaka Shizuku",
    img: waifu + "70Osaka-Shizuku-1WGIlr.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Uehara Ayumu",
    img: waifu + "102Uehara-Ayumu-KN13pl.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Asaka Karin",
    img: waifu + "24Asaka-Karin-3nF3em.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Miyashita Ai",
    img: waifu + "62Miyashita-Ai-f38Jhw.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Konoe Kanata",
    img: waifu + "50Konoe-Kanata-82Ei8T.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Yuki Setsuna",
    img: waifu + "110Yuki-Setsuna-2gVQWE.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Emma Verde",
    img: waifu + "28Emma-Verde-pVzmKV.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Tennoji Rina",
    img: waifu + "97Tennoji-Rina-YB8JUo.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Mifune Shioriko",
    img: waifu + "113Mifune-Shioriko-tNDNRT.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Mia Taylor",
    img: waifu + "123Mia-Taylor-jCx23M.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  {
    name: "Lanzhu Zhong",
    img: waifu + "124Lanzhu-aPGOOW.png",
    opts: {
      dimensi: [ "waifu" ],
      gen: [ "niji" ]
    }
  },
  // End Nijigasaki
  // Begin Liella
  {
    name: "Shibuya Kanon",
    img: waifu + "118Shibuya-Kanon-if8zlW.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Tang Keke",
    img: waifu + "119Tang-Keke-4Tr0Yx.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Arashi Chisato",
    img: waifu + "120Arashi-Chisato-eySO7L.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Heanna Sumire",
    img: waifu + "121Heanna-Sumire-Ben4YX.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Hazuki Ren",
    img: waifu + "122Hazuki-Ren-fZ9vXK.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Sakurakoji Kinako",
    img: waifu + "172Sakurakoji-Kinako-AMHcCz.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Yoneme Mei",
    img: waifu + "173Yoneme-Mei-DyEzzc.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Wakana Shiki",
    img: waifu + "174Wakana-Shiki-bnw0Nf.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  // End Liella
  // Begin SIM
  {
    name: "Tsubaki Rurika",
    img: waifu + "190Tsubaki-Rurika-wvwUXw.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  {
    name: "Onitsuka Natsumi",
    img: waifu + "175Onitsuka-Natsumi-o4o7O2.png",
    opts: {
      dimensi: ["waifu"],
      gen: ["liella"]
    }
  },
  //End SIM
  // Seiyuu //
  // Begin Muse
  {
    name: "Nitta Emi",
    img: oshii + "4Nitta-Emi-Vjrbrn.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  {
    name: "Uchida Aya",
    img: oshii + "9Uchida-Aya-1NVeJV.jpg",
    opts: {
      dimensi: [ "oshii" ],
      gen: [ "muse" ]
    }
  },
  // End Muse
];
