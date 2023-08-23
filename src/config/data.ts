import { typeData } from "../type";

const data: typeData[] = [
  {
    id: 1,
    label: "1",
    level: 1,
    children: [
      {
        id: 11,
        label: "11",
        level: 2,
        children: [
          {
            id: 111,
            label: "111",
            level: 3,
          },
          {
            id: 112,
            label: "112",
            level: 3,
          },
        ],
      },
      {
        id: 12,
        label: "12",
        level: 2,

        children: [
          {
            id: 121,
            label: "121",
            level: 3,
            children: [
              {
                id: 1211,
                label: "1211",
                level: 4,
              },

              {
                id: 1212,
                label: "1212",
                level: 4,
              },
            ],
          },

          {
            id: 112,
            label: "122",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "2",
    level: 1,
    children: [
      {
        id: 21,
        label: "21",
        level: 2,
      },
      {
        id: 22,
        label: "22",
        level: 2,
      },
    ],
  },
  {
    id: 3,
    label: "3",
    level: 1,
  },
  {
    id: 4,
    label: "4",
    level: 1,
  },
];

export default data;
