export interface DifficultyLevel {
  level: string;
  levelValue: number;
  levelType: 'Re:MASTER' | 'MASTER' | 'EXPERT' | 'ADVANCED' | 'BASIC';
}

export interface ChartStats {
  bpm: number;
  totalNotes: number;
  taps: number;
  holds: number;
  slides: number;
  touches: number;
  breaks: number;
}

export interface Song {
  id: string;
  name: string;
  difficulties: DifficultyLevel[];
  image: string;
  maidata: string;
  downloadUrl: string;
  chartDesigner: string;
  artist: string;
  chartStats: ChartStats | 'None';
  requirements?: {
    description: string;
    conditions: string[];
    isLocked: boolean;
  };
}

// id: "1",
// name: "Daytime EP",
// difficulties: [
//   {
//     level: "14+",
//     levelValue: 14.9,
//     levelType: "Re:MASTER"
//   },
//   {
//     level: "13.5",
//     levelValue: 13.5,
//     levelType: "MASTER"
//   },
//   {
//     level: "12.0",
//     levelValue: 12.0,
//     levelType: "EXPERT"
//   }
// ],
// image: "/songs/all/daytime/bg.jpg",
// downloadUrl: "https://drive.google.com/uc?export=download&id=1cfPeNNBG69UpLGVqpgLb-hpjkfm6yVLE",
// chartDesigner: "H&S",
// artist: "Seatrus",

export const maiChartData: Song[] = [
  {
    id: "1",
    name: "Daytime EP",
    difficulties: [
      {
        level: "14+",
        levelValue: 14.9,
        levelType: "MASTER"
      },
    ],
    image: "/songs/all/daytime/bg.jpg",
    maidata: "/songs/all/daytime/maidata.txt", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1cfPeNNBG69UpLGVqpgLb-hpjkfm6yVLE",
    chartDesigner: "H&S",
    artist: "Seatrus",
    chartStats: {
      bpm: 140,
      totalNotes: 5854,
      taps: 3425,
      holds: 421,
      slides: 395,
      touches: 828,
      breaks: 785
    }
  },
  {
    id: "2",
    name: "メクルメ",
    difficulties: [
      {
        level: "14",
        levelValue: 14.4,
        levelType: "Re:MASTER"
      }
    ],
    image: "/songs/all/mekuru/bg.jpg",
    maidata: "/songs/all/mekuru/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1TbL6UV0L1KOhwH1DJsUrEloVERNKFc4w",
    chartDesigner: "Happy VS H&S VS 8bit ft. The doop",
    artist: "初星学園",
    chartStats: {
      bpm: 160,
      totalNotes: 1048,
      taps: 581,
      holds: 67,
      slides: 137,
      touches: 95,
      breaks: 168
    }
  },
  {
    id: "3",
    name: "DiSANiMATE",
    difficulties: [
      {
        level: "15+",
        levelValue: 15.6,
        levelType: "Re:MASTER"
      },
      {
        level: "15",
        levelValue: 15.1,
        levelType: "MASTER"
      }

    ],
    image: "/songs/all/DiSANiMATE/bg.jpg",
    maidata: "/songs/all/DiSANiMATE/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1SREIp3OaxcZC6QVOdisIF2XUxen9elea",
    chartDesigner: "Happy & Sad",
    artist: "Seatrus",
    chartStats: "None"
  },
  {
    id: "4",
    name: "刹那の誓い", 
    difficulties: [
      {
        level: "13+",
        levelValue: 13.8,
        levelType: "MASTER"
      }
    ],
    image: "/songs/all/chikai/bg.jpg",
    maidata: "/songs/all/chikai/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1l1s9u742XDG5nl43stQ2wCIqXqwI79iQ",
    chartDesigner: "Happy And Sad!!",
    artist: "ネコハッカー feat.由崎司",
    chartStats: {
      bpm: 200,
      totalNotes: 1083,
      taps: 612,
      holds: 65,
      slides: 140,
      touches: 224,
      breaks: 42
    }
  },
  {
    id: "5",
    name: "STIGMA",
    difficulties: [
      {
        level: "14",
        levelValue: 14.1,
        levelType: "MASTER"
      }
    ],
    image: "/songs/all/stigma/bg.jpg",
    maidata: "/songs/all/stigma/maidata.txt", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1oNP12jv0SbJ7IxsP589XplYGvKDUsvRl",
    chartDesigner: "HaySad Vs S0Time",
    artist: "U-ske feat. 棗いつき",
    chartStats: {
      bpm: 194,
      totalNotes: 792,
      taps: 500,
      holds: 89,
      slides: 52,
      touches: 111,
      breaks: 40
    }
  },
  {
    id: "6",
    name: "SUPERNOVA", 
    difficulties: [
      {
        level: "14+",
        levelValue: 14.9,
        levelType: "MASTER"
      }
    ],
    image: "/songs/all/supernova/bg.jpg",
    maidata: "/songs/all/supernova/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1_mkivuAdyWRfaZsV4xTzj0YYVqC1Ynz6",
    chartDesigner: "8 bit",
    artist: "Kyotsugyon",
    chartStats: {
      bpm: 252,
      totalNotes: 1395,
      taps: 914,
      holds: 105,
      slides: 128,
      touches: 107,
      breaks: 141
    }
  },
  {
    id: "7",
    name: "Aether Crest: Celestial",
    difficulties: [
      {
        level: "14+",
        levelValue: 14.8,
        levelType: "MASTER"
      }
    ],
    image: "/songs/all/aether/bg.png",
    maidata: "/songs/all/aether/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1UGZATTON26LO3xF7dQuo_iGyw4u--RpQ",
    chartDesigner: "HaySad vs Levelast [ChuniMai]",
    artist: "void (Mournfinale) x 水野健治",
    chartStats: {
      bpm: 180,
      totalNotes: 1155,
      taps: 757,
      holds: 116,
      slides: 105,
      touches: 106,
      breaks: 77
    }
  },
  {
    id: "8",
    name: "Designant.",
    difficulties: [
      {
        level: "15",
        levelValue: 15.3,
        levelType: "Re:MASTER"
      }
    ],
    image: "/songs/all/designant/bg.jpg",
    maidata: "/songs/all/designant/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1R7un6B-RTF_VdIlar3AwyoOZCZIyyKM_",
    chartDesigner: "Happy To THE GoD VS LevelMAX",
    artist: "Designant.",
    chartStats: {
      bpm: 200,
      totalNotes: 1854,
      taps: 1169,
      holds: 123,
      slides: 109,
      touches: 143,
      breaks: 310
    }
  },
  {
    id: "9",
    name: "EXXTRA JUDGEMENT",
    difficulties: [
      {
        level: "14+",
        levelValue: 14.8,
        levelType: "MASTER"
      }
    ],
    image: "/songs/all/extra/bg.jpg",
    maidata: "/songs/all/extra/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1tKdMcXKzu05L4-TGqEKf-FDKRiMeZpoj",
    chartDesigner: "Happy&Sad",
    artist: "seatrus",
    chartStats: "None"
  },
  {
    id: "10",
    name: "Inverted World",
    difficulties: [
      {
        level: "14+",
        levelValue: 14.8,
        levelType: "MASTER"
      }
    ],
    image: "/songs/all/inverted/bg.jpg",
    maidata: "/songs/all/inverted/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1iThGdfHu6aEaKO4gyykKWjR26I8H4jOt",
    chartDesigner: "1V MELT",
    artist: "ARForest",
    chartStats: "None"
  },
  {
    id: "11",
    name: "MEGALOVANIA (Camellia Remix)",
    difficulties: [
      {
        level: "15",
        levelValue: 15.0,
        levelType: "Re:MASTER"
      }
    ],
    image: "/songs/all/megalovania/bg.jpg",
    maidata: "/songs/all/megalovania/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1igC1s2f3kjNTwCwx9tr8-LeR1OSjOLYI",
    chartDesigner: "P4P1N002 Vs Levelast",
    artist: "Toby Fox (Remixed by Camellia)",
    chartStats: "None"
  },
  {
    id: "12",
    name: "KOCMOC UNLEASHED",
    difficulties: [
      {
        level: "16.0",
        levelValue: 16.0,
        levelType: "Re:MASTER"
      }
    ],
    image: "/songs/all/kocmoc-unleashed/bg.jpg",
    maidata: "/songs/all/kocmoc-unleashed/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1xuELQh3erQF5M1Sd-IgUCaUAeGkmo2JV",
    chartDesigner: "Levelast the NULL",
    artist: "G2961 (SLEEPING HUMMINGBIRD - LONDON REMIX)",
    chartStats: "None"
  },
  {
    id: "13",
    name: "The Daybreak Will Never Come Again.",
    difficulties: [
      {
        level: "??",
        levelValue: 0,
        levelType: "MASTER"
      }
    ],
    image: "/songs/all/daybreak/bg.jpg",
    maidata: "/songs/all/daybreak/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1jKLe2wUEwYBVZh2S4eWixMAvN4SnrVde",
    chartDesigner: "HaySad VS ???",
    artist: "seatrus",
    chartStats: {
      bpm: 160,
      totalNotes: 1048,
      taps: 581,
      holds: 67,
      slides: 137,
      touches: 95,
      breaks: 168
    },
    requirements: {
      description: "Boss Song Requirements:",
      conditions: [
        "Find the Daybreak Before The End of Daytime",
        "Clear Discord Compilation IV more than 5 times or Play Discord Compilation IV all tire",
      ],
      isLocked: true
    }
  },
  {
    id: "14",
    name: "Moonlight Sonata 3rd Movement (Cut Ver.)",
    difficulties: [
      {
        level: "14+",
        levelValue: 14.7,
        levelType: "MASTER"
      }
    ],
    image: "/songs/all/moonlight-sonata/bg.jpg",
    maidata: "/songs/all/moonlight-sonata/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1cfPeNNBG69UpLGVqpgLb-hpjkfm6yVLE",
    chartDesigner: "Beamthoven",
    artist: "Beethoven",
    chartStats: "None"
  },
  {
    id: "15",
    name: "SuddeNDeath",
    difficulties: [
      {
        level: "15",
        levelValue: 15.0,
        levelType: "MASTER"
      }
    ],
    image: "/songs/all/sudden-death/bg.jpg",
    maidata: "/songs/all/sudden-death/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1jKLe2wUEwYBVZh2S4eWixMAvN4SnrVde",
    chartDesigner: "HaySad",
    artist: "xi vs. モリモリあつし",
    chartStats: "None"
  },
  {
    id: "16",
    name: "Executioner",
    difficulties: [
      {
        level: "15+",
        levelValue: 15.6,
        levelType: "MASTER"
      }
    ],
    image: "/songs/8-2/bg.jpg",
    maidata: "/songs/all/shattered-vows/maidata.txt",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1Ek1OmtVCvrVMyuwCqW99Xi5CvXwNnSeg",
    chartDesigner: "Levelast",
    artist: "Laur",
    chartStats: "None"
  },

    

  // เพิ่มเพลงอื่นๆ ตามต้องการ
]; 