// =============================
// PIPE OD DATA (NEW)
// =============================
const pipeOD883 = {
    "1/8": 10.3,
    "1/4": 13.7,
    "3/8": 17.1,
    "0.5": 21.3,
    "0.75": 26.7,
    "1": 33.4,
    "1.25": 42.2,
    "1.5": 48.3,
    "2": 60.3,
    "2.5": 73.0,
    "3": 88.9,
    "3.5": 101.6,
    "4": 114.3,
    "5": 141.3,
    "6": 168.3,
    "8": 219.1,
    "10": 273.0,
    "12": 323.8,
    "14": 355.6,
    "16": 406.4,
    "18": 457.0,
    "20": 508.0,
    "22": 559.0,
    "24": 610.0,
    "26": 660.0,
    "28": 711.0,
    "30": 762.0,
    "32": 813.0,
    "34": 864.0,
    "36": 914.0,
    "38": 965.2,
    "40": 1016.0,
    "42": 1066.8,
    "44": 1117.6,
    "46": 1168.4
};

// =============================
// UNIQUE GLOBAL VARIABLES
// =============================
const pipeDataMaster883 = {
    "1/8": {
        "SCH 5s": "",
        "SCH 10s": "1.24",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "1.73",
        "SCH 40": "1.73",
        "SCH STD": "1.73",
        "SCH 60": "",
        "SCH 80s": "2.41",
        "SCH 80": "2.41",
        "SCH XS": "2.41",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "",
        "SCH XXS": "",
        "SCH X STG": "2.41",
        "SCH HVY": ""
    },
    "1/4": {
        "SCH 5s": "",
        "SCH 10s": "1.65",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "2.24",
        "SCH 40": "2.24",
        "SCH STD": "2.24",
        "SCH 60": "",
        "SCH 80s": "3.02",
        "SCH 80": "3.02",
        "SCH XS": "3.02",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "",
        "SCH XXS": "",
        "SCH X STG": "3.02",
        "SCH HVY": ""
    },
    "3/8": {
        "SCH 5s": "",
        "SCH 10s": "1.65",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "2.31",
        "SCH 40": "2.31",
        "SCH STD": "2.31",
        "SCH 60": "",
        "SCH 80s": "3.20",
        "SCH 80": "3.20",
        "SCH XS": "3.20",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "",
        "SCH XXS": "",
        "SCH X STG": "3.20",
        "SCH HVY": ""
    },
    "0.5": {
        "SCH 5s": "1.65",
        "SCH 10s": "2.11",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "2.77",
        "SCH 40": "2.77",
        "SCH STD": "2.77",
        "SCH 60": "",
        "SCH 80s": "3.73",
        "SCH 80": "3.73",
        "SCH XS": "3.73",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "4.78",
        "SCH XXS": "7.47",
        "SCH X STG": "3.73",
        "SCH XX STG": "7.46",
        "SCH HVY": "3.25/4.0"
    },

    "0.75": {
        "SCH 5s": "1.65",
        "SCH 10s": "2.11",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "2.87",
        "SCH 40": "2.87",
        "SCH STD": "2.87",
        "SCH 60": "",
        "SCH 80s": "3.91",
        "SCH 80": "3.91",
        "SCH XS": "3.91",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "5.56",
        "SCH XXS": "7.82",
        "SCH X STG": "2.87",
        "SCH XX STG": "7.82",
        "SCH HVY": "3.25"
    },

    "1": {
        "SCH 5s": "1.65",
        "SCH 10s": "2.77",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "3.38",
        "SCH 40": "3.38",
        "SCH STD": "3.38",
        "SCH 60": "",
        "SCH 80s": "4.55",
        "SCH 80": "4.55",
        "SCH XS": "4.55",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "6.35",
        "SCH XXS": "9.09",
        "SCH X STG": "4.54",
        "SCH XX STG": "9.09",
        "SCH HVY": "4.00"
    },
  "1.25": {
        "SCH 5s": "1.65",
        "SCH 10s": "2.77",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "3.56",
        "SCH 40": "3.56",
        "SCH STD": "3.56",
        "SCH 60": "",
        "SCH 80s": "4.85",
        "SCH 80": "4.85",
        "SCH XS": "4.85",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "6.35",
        "SCH XXS": "9.70",
      "SCH X STG": "4.85",
        "SCH XX STG": "9.70",
        "SCH HVY": ""
    },

    "1.5": {
        "SCH 5s": "1.65",
        "SCH 10s": "2.77",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "3.68",
        "SCH 40": "3.68",
        "SCH STD": "3.68",
        "SCH 60": "",
        "SCH 80s": "5.08",
        "SCH 80": "5.08",
        "SCH XS": "5.08",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "7.14",
        "SCH XXS": "10.15",
        "SCH X STG": "5.08",
        "SCH XX STG": "10.16",
        "SCH HVY": "4.00"
    },

    "2": {
        "SCH 5s": "1.65",
        "SCH 10s": "2.77",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "3.91",
        "SCH 40": "3.91",
        "SCH STD": "3.91",
        "SCH 60": "",
        "SCH 80s": "5.54",
        "SCH 80": "5.54",
        "SCH XS": "5.54",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "8.74",
        "SCH XXS": "11.07",
        "SCH X STG": "5.54",
        "SCH XX STG": "10.07",
        "SCH HVY": "4.50"
    },

    "2.5": {
        "SCH 5s": "2.11",
        "SCH 10s": "3.05",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "5.16",
        "SCH 40": "5.16",
        "SCH STD": "5.16",
        "SCH 60": "",
        "SCH 80s": "7.01",
        "SCH 80": "7.01",
        "SCH XS": "7.01",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "9.53",
        "SCH XXS": "14.02",
        "SCH X STG": "7.0",
        "SCH XX STG": "14.02",
        "SCH HVY": ""
    },

    "3": {
        "SCH 5s": "2.11",
        "SCH 10s": "3.05",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "5.49",
        "SCH 40": "5.49",
        "SCH STD": "5.49",
        "SCH 60": "",
        "SCH 80s": "7.62",
        "SCH 80": "7.62",
        "SCH XS": "7.62",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "11.13",
        "SCH XXS": "15.24",
        "SCH X STG": "7.62",
        "SCH XX STG": "15.24",
        "SCH HVY": "4.80"
    },

    "3.5": {
        "SCH 5s": "2.11",
        "SCH 10s": "3.05",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "5.74",
        "SCH 40": "5.74",
        "SCH STD": "5.74",
        "SCH 60": "",
        "SCH 80s": "8.08",
        "SCH 80": "8.08",
        "SCH XS": "8.08",
        "SCH 100": "",
        "SCH 120": "",
        "SCH 140": "",
        "SCH 160": "",
        "SCH XXS": "",
        "SCH X STG": "8.07",
        "SCH HVY": ""
    },

    "4": {
        "SCH 5s": "2.11",
        "SCH 10s": "3.05",
        "SCH 10": "",
        "SCH 20": "",
        "SCH 30": "",
        "SCH 40s": "6.02",
        "SCH 40": "6.02",
        "SCH STD": "6.02",
        "SCH 60": "",
        "SCH 80s": "8.56",
        "SCH 80": "8.56",
        "SCH XS": "8.56",
        "SCH 100": "",
        "SCH 120": "11.13",
        "SCH 140": "",
        "SCH 160": "13.49",
        "SCH XXS": "17.12",
        "SCH X STG": "8.56",
        "SCH XX STG": "17.12",
        "SCH HVY": "5.40"
    },
   
   "5": {
    "SCH 5s": "2.77",
    "SCH 10s": "3.40",
    "SCH 10": "",
    "SCH 20": "",
    "SCH 30": "",
    "SCH 40s": "6.55",
    "SCH 40": "6.55",
    "SCH STD": "6.55",
    "SCH 60": "",
    "SCH 80s": "9.53",
    "SCH 80": "9.53",
    "SCH XS": "9.53",
    "SCH 100": "",
    "SCH 120": "12.70",
    "SCH 140": "",
    "SCH 160": "15.88",
    "SCH XXS": "19.05",
     "SCH HVY": "5.40"
  },

  "6": {
    "SCH 5s": "2.77",
    "SCH 10s": "3.40",
    "SCH 10": "",
    "SCH 20": "",
    "SCH 30": "",
    "SCH 40s": "7.11",
    "SCH 40": "7.11",
    "SCH STD": "7.11",
    "SCH 60": "",
    "SCH 80s": "10.97",
    "SCH 80": "10.97",
    "SCH XS": "10.97",
    "SCH 100": "",
    "SCH 120": "14.27",
    "SCH 140": "",
    "SCH 160": "18.26",
    "SCH XXS": "21.95",
      "SCH X STG": "10.97",
        "SCH XX STG": "21.95",
    "SCH HVY": "5.40"
  },

  "8": {
    "SCH 5s": "2.77",
    "SCH 10s": "3.76",
    "SCH 10": "",
    "SCH 20": "6.35",
    "SCH 30": "7.04",
    "SCH 40s": "8.18",
    "SCH 40": "8.18",
    "SCH STD": "8.18",
    "SCH 60": "10.31",
    "SCH 80s": "12.70",
    "SCH 80": "12.70",
    "SCH XS": "12.70",
    "SCH 100": "15.09",
    "SCH 120": "18.26",
    "SCH 140": "20.62",
    "SCH 160": "23.01",
    "SCH XXS": "22.23",
      "SCH X STG": "12.70",
        "SCH XX STG": "22.23",
    "SCH HVY": ""
  },

  "10": {
    "SCH 5s": "3.40",
    "SCH 10s": "4.19",
    "SCH 10": "",
    "SCH 20": "6.35",
    "SCH 30": "7.80",
    "SCH 40s": "9.27",
    "SCH 40": "9.27",
    "SCH STD": "9.27",
    "SCH 60": "12.70",
    "SCH 80s": "12.70",
    "SCH 80": "15.09",
    "SCH XS": "12.70",
    "SCH 100": "18.26",
    "SCH 120": "21.44",
    "SCH 140": "25.40",
    "SCH 160": "28.58",
    "SCH XXS": "25.40",
      "SCH X STG": "12.70",
        "SCH XX STG": "25.40",
    "SCH HVY": ""
  },

  "12": {
    "SCH 5s": "3.96",
    "SCH 10s": "4.57",
    "SCH 10": "",
    "SCH 20": "6.35",
    "SCH 30": "8.38",
    "SCH 40s": "9.53",
    "SCH 40": "10.31",
    "SCH STD": "9.53",
    "SCH 60": "14.27",
    "SCH 80s": "12.70",
    "SCH 80": "17.48",
    "SCH XS": "12.70",
    "SCH 100": "21.44",
    "SCH 120": "25.40",
    "SCH 140": "28.58",
    "SCH 160": "33.32",
    "SCH XXS": "25.40",
    "SCH X STG": "12.70",
    "SCH XX STG": "25.40",
    "SCH HVY": ""
  },

  "14": {
    "SCH 5s": "3.96",
    "SCH 10s": "4.78",
    "SCH 10": "6.35",
    "SCH 20": "7.92",
    "SCH 30": "9.53",
    "SCH 40s": "",
    "SCH 40": "11.13",
    "SCH STD": "9.53",
    "SCH 60": "15.09",
    "SCH 80s": "",
    "SCH 80": "19.05",
    "SCH XS": "12.70",
    "SCH 100": "23.83",
    "SCH 120": "27.79",
    "SCH 140": "31.75",
    "SCH 160": "35.71",
    "SCH XXS": "",
    "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "16": {
    "SCH 5s": "4.19",
    "SCH 10s": "4.78",
    "SCH 10": "6.35",
    "SCH 20": "7.92",
    "SCH 30": "9.53",
    "SCH 40s": "",
    "SCH 40": "12.70",
    "SCH STD": "9.53",
    "SCH 60": "16.66",
    "SCH 80s": "",
    "SCH 80": "21.44",
    "SCH XS": "17.70",
    "SCH 100": "26.19",
    "SCH 120": "30.96",
    "SCH 140": "36.53",
    "SCH 160": "40.49",
    "SCH XXS": "",
      "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "18": {
    "SCH 5s": "4.19",
    "SCH 10s": "4.78",
    "SCH 10": "6.35",
    "SCH 20": "7.92",
    "SCH 30": "11.13",
    "SCH 40s": "",
    "SCH 40": "14.27",
    "SCH STD": "9.53",
    "SCH 60": "19.05",
    "SCH 80s": "",
    "SCH 80": "23.83",
    "SCH XS": "12.70",
    "SCH 100": "29.36",
    "SCH 120": "34.93",
    "SCH 140": "39.67",
    "SCH 160": "45.24",
    "SCH XXS": "",
      "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "20": {
    "SCH 5s": "4.78",
    "SCH 10s": "5.54",
    "SCH 10": "6.35",
    "SCH 20": "9.53",
    "SCH 30": "12.70",
    "SCH 40s": "",
    "SCH 40": "15.09",
    "SCH STD": "9.53",
    "SCH 60": "20.62",
    "SCH 80s": "",
    "SCH 80": "26.19",
    "SCH XS": "12.70",
    "SCH 100": "32.54",
    "SCH 120": "38.10",
    "SCH 140": "44.45",
    "SCH 160": "50.01",
    "SCH XXS": "",
      "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "22": {
    "SCH 5s": "4.78",
    "SCH 10s": "5.54",
    "SCH 10": "6.35",
    "SCH 20": "9.53",
    "SCH 30": "12.70",
    "SCH 40s": "",
    "SCH 40": "",
    "SCH STD": "9.53",
    "SCH 60": "22.23",
    "SCH 80s": "",
    "SCH 80": "28.58",
    "SCH XS": "12.70",
    "SCH 100": "34.93",
    "SCH 120": "41.28",
    "SCH 140": "47.63",
    "SCH 160": "53.98",
    "SCH XXS": "",
      "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "24": {
    "SCH 5s": "5.54",
    "SCH 10s": "6.35",
    "SCH 10": "6.35",
    "SCH 20": "9.53",
    "SCH 30": "14.27",
    "SCH 40s": "",
    "SCH 40": "17.48",
    "SCH STD": "9.53",
    "SCH 60": "24.61",
    "SCH 80s": "",
    "SCH 80": "30.96",
    "SCH XS": "12.70",
    "SCH 100": "38.89",
    "SCH 120": "46.02",
    "SCH 140": "52.37",
    "SCH 160": "59.54",
    "SCH XXS": "",
      "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "26": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "7.92",
    "SCH 20": "12.70",
    "SCH 30": "",
    "SCH 40s": "",
    "SCH 40": "",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
      "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "28": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "7.92",
    "SCH 20": "12.70",
    "SCH 30": "15.88",
    "SCH 40s": "",
    "SCH 40": "",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "30": {
    "SCH 5s": "6.35",
    "SCH 10s": "7.90",
    "SCH 10": "7.92",
    "SCH 20": "12.70",
    "SCH 30": "15.88",
    "SCH 40s": "",
    "SCH 40": "",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "32": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "7.92",
    "SCH 20": "12.70",
    "SCH 30": "15.88",
    "SCH 40s": "",
    "SCH 40": "17.48",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "34": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "7.92",
    "SCH 20": "12.70",
    "SCH 30": "15.88",
    "SCH 40s": "",
    "SCH 40": "17.48",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "36": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "7.92",
    "SCH 20": "12.70",
    "SCH 30": "15.88",
    "SCH 40s": "",
    "SCH 40": "19.05",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "38": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "",
    "SCH 20": "",
    "SCH 30": "",
    "SCH 40s": "",
    "SCH 40": "",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH HVY": ""
  },

  "40": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "",
    "SCH 20": "",
    "SCH 30": "",
    "SCH 40s": "9.53",
    "SCH 40": "12.7",
    "SCH STD": "",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH HVY": ""
  },

  "42": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "",
    "SCH 20": "12.70",
    "SCH 30": "15.88",
    "SCH 40s": "",
    "SCH 40": "19.05",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH X STG": "12.70",
    "SCH HVY": ""
  },

  "44": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "",
    "SCH 20": "",
    "SCH 30": "",
    "SCH 40s": "",
    "SCH 40": "",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH HVY": ""
  },

  "46": {
    "SCH 5s": "",
    "SCH 10s": "",
    "SCH 10": "",
    "SCH 20": "",
    "SCH 30": "",
    "SCH 40s": "",
    "SCH 40": "",
    "SCH STD": "9.53",
    "SCH 60": "",
    "SCH 80s": "",
    "SCH 80": "",
    "SCH XS": "12.70",
    "SCH 100": "",
    "SCH 120": "",
    "SCH 140": "",
    "SCH 160": "",
    "SCH XXS": "",
    "SCH HVY": ""
  },
    // =============================
    // DUE TO MESSAGE LIMIT —
    // I CAN SEND FULL 100% DATA
    // IN NEXT MESSAGE (PART 2)
    // =============================

};

// =============================
// POPULATE UI (unique IDs)
// =============================
const selectNPS883 = document.getElementById("select_nps_883");
const selectSCH883 = document.getElementById("select_sch_883");
const resultBox883 = document.getElementById("result_thickness_883");

// =============================
// Create OD display box
// =============================
let resultOD883 = document.getElementById("result_od_883");
if (!resultOD883) {
    resultOD883 = document.createElement("div");
    resultOD883.id = "result_od_883";
    resultOD883.style.marginTop = "10px";
    resultOD883.style.fontSize = "20px";
    resultOD883.style.color = "#ffffff";
    document.querySelector(".box883").appendChild(resultOD883);
}

// =============================
// Create Circumference box
// =============================
let resultCirc883 = document.getElementById("result_circumference_883");
if (!resultCirc883) {
    resultCirc883 = document.createElement("div");
    resultCirc883.id = "result_circumference_883";
    resultCirc883.style.marginTop = "10px";
    resultCirc883.style.fontSize = "20px";
    resultCirc883.style.color = "#ffffff";
    document.querySelector(".box883").appendChild(resultCirc883);
}

// =============================
// Create Inside Diameter (ID) box
// =============================
let resultID883 = document.getElementById("result_id_883");
if (!resultID883) {
    resultID883 = document.createElement("div");
    resultID883.id = "result_id_883";
    resultID883.style.marginTop = "10px";
    resultID883.style.fontSize = "20px";
    resultID883.style.color = "#ffffff";
    document.querySelector(".box883").appendChild(resultID883);
}

// =============================
// POPULATE NPS DROPDOWN
// =============================
for (let nps in pipeDataMaster883) {
    let opt = document.createElement("option");
    opt.value = nps;
    opt.textContent = nps;
    selectNPS883.appendChild(opt);
}

// =============================
// WHEN NPS SELECTED → LOAD SCH
// =============================
selectNPS883.addEventListener("change", function () {

    selectSCH883.innerHTML = `<option value="">-- Select SCH --</option>`;
    resultBox883.innerHTML = "";
    resultOD883.innerHTML = "";
    resultCirc883.innerHTML = "";
    resultID883.innerHTML = "";

    let schedules = pipeDataMaster883[this.value];

    for (let sch in schedules) {
        let thick = schedules[sch];

        if (thick !== "" && thick !== null && thick !== undefined) {
            let opt = document.createElement("option");
            opt.value = sch;
            opt.textContent = sch;
            selectSCH883.appendChild(opt);
        }
    }
});

// =============================
// WHEN SCH SELECTED → SHOW THICKNESS, OD, ID, CIRC
// =============================
selectSCH883.addEventListener("change", function () {

    let nps = selectNPS883.value;
    let sch = selectSCH883.value;

    let thick = parseFloat(pipeDataMaster883[nps][sch]);
    let od = parseFloat(pipeOD883[nps]);

    if (!thick || thick === "") {
        resultBox883.innerHTML = `<b>No Data</b>`;
        resultOD883.innerHTML = "";
        resultCirc883.innerHTML = "";
        resultID883.innerHTML = "";
        return;
    }

    // Thickness
    resultBox883.innerHTML = `Thickness: <b>${thick} mm</b>`;

    // Outside Diameter
    resultOD883.innerHTML = `Outside Diameter (OD): <b>${od} mm</b>`;

    // Inside Diameter → ID = OD - 2 × Thickness
    let id = (od - 2 * thick).toFixed(2);
    resultID883.innerHTML = `Inside Diameter (ID): <b>${id} mm</b>`;

    // Circumference = π × OD
    let circumference = (Math.PI * od).toFixed(2);
    resultCirc883.innerHTML = `Outer Circumference: <b>${circumference} mm</b>`;
});

