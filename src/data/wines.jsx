import * as brandsAPI from "./brands";
import saperavi from "../photos/Saperavi.png";
import napareuli from "../photos/Napareuli.jpg";
import kisi from "../photos/KisiMtsvane.png";

const wines = [
  {
    _id: "6b21ca3eeb7f6fbccd471815",
    name: "Saperavi",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Badagoni" },
    price: 6,
    type: "Red Wine, Semi-sweet",
    image: saperavi,
  },
  {
    _id: "6b21ca3eeb7f6fbccd471816",
    name: "Kindzmarauli",
    brand: { _id: "5b21ca3eeb7f6fbccd471819", name: "Teliani Valley" },
    price: 8,
    type: "White wine, Semi-sweet",
    image: napareuli,
  },
  {
    _id: "6b21ca3eeb7f6fbccd471817",
    name: "Manavis Mtvane",
    brand: { _id: "5b21ca3eeb7f6fbccd471820", name: "Chateau Mukhrani" },
    price: 10,
    type: "White wine, Sweet",
    image: kisi,
  },
  {
    _id: "6b21ca3eeb7f6fbccd471818",
    name: "Saperavi",
    brand: { _id: "5b21ca3eeb7f6fbccd471821", name: "Telavi Wine Cellar" },
    price: 9,
    type: "Red Wine",
  },
  {
    _id: "6b21ca3eeb7f6fbccd471819",
    name: "Aladasturi",
    brand: { _id: "5b21ca3eeb7f6fbccd471821", name: "Telavi Wine Cellar" },
    price: 18,
    type: "Red Wine",
  },
  {
    _id: "6b21ca3eeb7f6fbccd471820",
    name: "Rqatsiteli",
    brand: { _id: "5b21ca3eeb7f6fbccd471822", name: "Mildiani" },
    price: 11,
    type: "White Wine",
  },
  {
    _id: "6b21ca3eeb7f6fbccd471821",
    name: "Aladasturi",
    brand: { _id: "5b21ca3eeb7f6fbccd471821", name: "Telavi Wine Cellar" },
    price: 15,
    type: "Red Wine",
  },
  {
    _id: "6b21ca3eeb7f6fbccd471822",
    name: "Qisi",
    brand: { _id: "5b21ca3eeb7f6fbccd471822", name: "Askaneli Brothers" },
    price: 13,
    type: "White Wine, sweet",
  },
  {
    _id: "6b21ca3eeb7f6fbccd471823",
    name: "Chinuri",
    brand: { _id: "5b21ca3eeb7f6fbccd471822", name: "Kindzmarauli Cellar" },
    price: 20,
    type: "White Wine, sweet",
  },
  {
    _id: "6b21ca3eeb7f6fbccd471824",
    name: "Saperavi",
    brand: { _id: "5b21ca3eeb7f6fbccd471822", name: "Askaneli Brothers" },
    price: 21,
    type: "Red Wine",
  },
  // {
  //   _id: "6b21ca3eeb7f6fbccd471825",
  //   name: "Rqatsiteli",
  //   brand: { _id: "5b21ca3eeb7f6fbccd471822", name: "Mildiani" },
  //   price: 25,
  //   type: "White wine",
  // },
  // {
  //   _id: "6b21ca3eeb7f6fbccd471826",
  //   name: "Manavis Mtsvane",
  //   brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Badagoni" },
  //   price: 20,
  //   type: "White Wine",
  // },
  // {
  //   _id: "6b21ca3eeb7f6fbccd471827",
  //   name: "Manavis Mtsvane",
  //   brand: { _id: "5b21ca3eeb7f6fbccd471823", name: "Badagoni" },
  //   price: 20,
  //   type: "White Wine",
  // },
];

export function getWines() {
  return wines;
}

export function getWine(id) {
  return wines.find((w) => w._id === id);
}
