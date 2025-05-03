import bottomTurnFront from "../assets/videos/maneuvers/surf/bottom-turn-front.mp4";
import bottomTurnBack from "../assets/videos/maneuvers/surf/bottom-turn-back.mp4";

export const MANEUVERS_SIDE = {
  FRONTSIDE: "FRONTSIDE",
  BACKSIDE: "BACKSIDE",
};

export const MANEUVERS_LIST = {
  "Speed Generation": {
    description: "Générer de la vitesse sur la vague.",
    tips: "Utilisez votre poids pour pomper la planche.",
  },
  "Bottom Turn": {
    description: "Un virage en bas de la vague pour prendre de la vitesse.",
    tips: "Gardez votre poids sur l'arrière de la planche.",
  },
  Carve: {
    description: "Un virage fluide et contrôlé sur la vague.",
    tips: "Gardez les genoux fléchis et le regard vers l'avant.",
  },
  Cutback: {
    description: "Un virage serré pour revenir vers la mousse de la vague.",
    tips: "Utilisez votre épaule pour initier le mouvement.",
  },
  Snap: {
    description: "Un virage rapide et explosif sur le sommet de la vague.",
    tips: "Gardez votre poids sur l'arrière de la planche.",
  },
  Floater: {
    description: "Rester sur le sommet de la mousse de la vague.",
    tips: "Gardez votre centre de gravité bas.",
  },
  Tube: {
    description: "Rentrer dans le tube formé par la vague.",
    tips: "Regardez vers l'avant et restez compact.",
  },
};

export const MANEUVERS_DATA = [
  {
    title: "Bottom Turn",
    maneuver: MANEUVERS_LIST["Bottom Turn"],
    gif: require("../assets/videos/maneuvers/surf/bottom-turn-front.gif"),
    content: [
      {
        type: MANEUVERS_SIDE.FRONTSIDE,
        content: [
          {
            type: "text",
            content:
              "Virage en bas de la vague pour prendre de la vitesse (frontside).",
          },
          {
            type: "gif",
            uri: require("../assets/videos/maneuvers/surf/bottom-turn-front.gif"),
          },
          {
            type: "text",
            content:
              "Compressez-vous, poussez sur le pied arrière et regardez vers la lèvre. Utiliser la main arrière comme centre de rotation.",
          },
        ],
      },
      {
        type: MANEUVERS_SIDE.BACKSIDE,
        content: [
          {
            type: "text",
            content:
              "Virage en bas de la vague pour prendre de la vitesse (backside).",
          },
          {
            type: "gif",
            uri: require("../assets/videos/maneuvers/surf/bottom-turn-back.gif"),
          },
          {
            type: "text",
            content:
              "Tournez vos épaules et hanches ensemble pour un bon pivot.",
          },
        ],
      },
    ],
  },
];
export const MANEUVERS_DATA_BACK = [
  {
    title: "Speed Generation",
    maneuver: MANEUVERS_LIST["Speed Generation"],
    content: [
      {
        type: MANEUVERS_SIDE.FRONTSIDE,
        content: [
          {
            type: "text",
            content: "Générer de la vitesse sur la vague (frontside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=K85iw0PMg4w" },
          {
            type: "text",
            content: "Utilisez votre poids pour pomper la planche.",
          },
        ],
      },
      {
        type: MANEUVERS_SIDE.BACKSIDE,
        content: [
          {
            type: "text",
            content: "Générer de la vitesse sur la vague (backside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=K85iw0PMg4w" },
          {
            type: "text",
            content: "Utilisez l'épaule arrière pour mieux accélérer.",
          },
        ],
      },
    ],
  },
  {
    title: "Bottom Turn",
    maneuver: MANEUVERS_LIST["Bottom Turn"],
    content: [
      {
        type: MANEUVERS_SIDE.FRONTSIDE,
        content: [
          {
            type: "text",
            content:
              "Virage en bas de la vague pour prendre de la vitesse (frontside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=YGH_icZbsGE" },
          {
            type: "text",
            content:
              "Compressez-vous, poussez sur le pied arrière et regardez vers la lèvre.",
          },
        ],
      },
      {
        type: MANEUVERS_SIDE.BACKSIDE,
        content: [
          {
            type: "text",
            content:
              "Virage en bas de la vague pour prendre de la vitesse (backside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=YGH_icZbsGE" },
          {
            type: "text",
            content:
              "Tournez vos épaules et hanches ensemble pour un bon pivot.",
          },
        ],
      },
    ],
  },
  {
    title: "Carve",
    maneuver: MANEUVERS_LIST["Carve"],
    content: [
      {
        type: MANEUVERS_SIDE.FRONTSIDE,
        content: [
          {
            type: "text",
            content: "Virage puissant et contrôlé sur la vague (frontside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=ASoDdIx7U-w" },
          {
            type: "text",
            content: "Abaissez-vous et engagez le rail progressivement.",
          },
        ],
      },
      {
        type: MANEUVERS_SIDE.BACKSIDE,
        content: [
          {
            type: "text",
            content: "Virage puissant et contrôlé sur la vague (backside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=ASoDdIx7U-w" },
          {
            type: "text",
            content:
              "Concentrez-vous sur l'ouverture des épaules vers la vague.",
          },
        ],
      },
    ],
  },
  {
    title: "Cutback",
    maneuver: MANEUVERS_LIST["Cutback"],
    content: [
      {
        type: MANEUVERS_SIDE.FRONTSIDE,
        content: [
          {
            type: "text",
            content: "Virage serré pour revenir vers la mousse (frontside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=PxFHl-4r3p0" },
          {
            type: "text",
            content: "Regardez la mousse dès le début du mouvement.",
          },
        ],
      },
      {
        type: MANEUVERS_SIDE.BACKSIDE,
        content: [
          {
            type: "text",
            content: "Virage serré pour revenir vers la mousse (backside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=PxFHl-4r3p0" },
          {
            type: "text",
            content: "Gardez votre bras avant bas et tourné vers la mousse.",
          },
        ],
      },
    ],
  },
  {
    title: "Snap",
    maneuver: MANEUVERS_LIST["Snap"],
    content: [
      {
        type: MANEUVERS_SIDE.FRONTSIDE,
        content: [
          {
            type: "text",
            content: "Virage explosif en haut de vague (frontside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=FlfEFrTb-ts" },
          {
            type: "text",
            content: "Déclenchez le snap avec les épaules et relâchez vite.",
          },
        ],
      },
      {
        type: MANEUVERS_SIDE.BACKSIDE,
        content: [
          {
            type: "text",
            content: "Virage explosif en haut de vague (backside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=FlfEFrTb-ts" },
          {
            type: "text",
            content:
              "Mettez du poids sur le pied arrière et fouettez avec le haut du corps.",
          },
        ],
      },
    ],
  },
  {
    title: "Floater",
    maneuver: MANEUVERS_LIST["Floater"],
    content: [
      {
        type: MANEUVERS_SIDE.FRONTSIDE,
        content: [
          {
            type: "text",
            content: "Glisser sur la mousse ou la lèvre (frontside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=VO7QJpoef20" },
          {
            type: "text",
            content: "Gardez le centre de gravité bas pour absorber les chocs.",
          },
        ],
      },
      {
        type: MANEUVERS_SIDE.BACKSIDE,
        content: [
          {
            type: "text",
            content: "Glisser sur la mousse ou la lèvre (backside).",
          },
          { type: "video", url: "https://www.youtube.com/watch?v=VO7QJpoef20" },
          {
            type: "text",
            content: "Stabilisez-vous avec vos bras pour garder l'équilibre.",
          },
        ],
      },
    ],
  },
  {
    title: "Tube",
    maneuver: MANEUVERS_LIST["Tube"],
    content: [
      {
        type: MANEUVERS_SIDE.FRONTSIDE,
        content: [
          { type: "text", content: "Entrer dans le tube (frontside)." },
          { type: "video", url: "https://www.youtube.com/watch?v=0r_k6jwPPJU" },
          {
            type: "text",
            content: "Restez compact, regardez la sortie du tube.",
          },
        ],
      },
      {
        type: MANEUVERS_SIDE.BACKSIDE,
        content: [
          { type: "text", content: "Entrer dans le tube (backside)." },
          { type: "video", url: "https://www.youtube.com/watch?v=0r_k6jwPPJU" },
          {
            type: "text",
            content:
              "Fléchissez les jambes, contrôlez votre vitesse, et soyez prêt à ajuster.",
          },
        ],
      },
    ],
  },
];
