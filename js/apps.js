// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Alone",
  version: "V1",
  date: "2025",
  folder: "asset-v1/",
  ambience: "",  
  firstloopDelay: 300,
  looptime: 6750,
  bpm: 142,
  totalframe: 322,
  nbpolo: 7,
  maxrecloop: 24,
  bonusloopA: true, 
  bonusendloopA: true,
  colBck: "#09589B",
  col0: "#09589B",
  col1: "#09589B",
  col2: "#09589B",
  col3: "#09589B",
  col4: "#09589B",
  animearray: [
    {
      name: "1_kickhit",
      color: "E70022",
      uniqsnd: !0,
    },
    {
      name: "2_kick",
      color: "E70022",
      uniqsnd: !0,
    },
    {
      name: "3_clap",
      color: "E70022",
      uniqsnd: !0,
    },
    {
      name: "4_hithat",
      color: "E70022",
      uniqsnd: !0,
    },
    {
      name: "5_drum",
      color: "E70022",
      uniqsnd: !0,
    },
    {
      name: "6_superdeepbass",
      color: "0961B8",
      uniqsnd: !0,
    },
    {
      name: "7_intro",
      color: "0961B8",
      uniqsnd: !0,
    },
    {
      name: "8_cymbal",
      color: "0961B8",
      uniqsnd: !1,
    },
    {
      name: "9_transision",
      color: "0961B8",
      uniqsnd: !1,
    },
    {
      name: "10_crashintro",
      color: "0961B8",
      uniqsnd: !1,
    },
    {
      name: "11_pluck",
      color: "444269",
      uniqsnd: !0,
    },
    {
      name: "12_bell",
      color: "444269",
      uniqsnd: !0,
    },
    {
      name: "13_leadnormal",
      color: "444269",
      uniqsnd: !1,
    },
    {
      name: "14_droplead",
      color: "444269",
      uniqsnd: !0,
    },
    {
      name: "15_basstungtung",
      color: "444269",
      uniqsnd: !0,
    },
    {
      name: "16_alone",
      color: "97ACBD",
      uniqsnd: !1,
    },
    {
      name: "17_arcade",
      color: "97ACBD",
      uniqsnd: !1,
    },
    {
      name: "18_vokalchop",
      color: "97ACBD",
      uniqsnd: !1,
    },
    {
      name: "19_vokalchopdrop",
      color: "97ACBD",
      uniqsnd: !0,
    },
    {
      name: "20_enola",
      color: "97ACBD",
      uniqsnd: !1,
    },
  ],
  bonusarray: [
    {
      name: "alone",
      src: "b1-v1-blank-hb",
      code: "3,6,8,11,18",
      sound: "bonus-alone",
      aspire: "aspire-blank",
      expire: "",
      icon: "b1-v1-alone-icon.svg",
      loop: 6,
    },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...