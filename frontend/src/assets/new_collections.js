import p1_img from "./product_12.png";
import p2_img from "./product_35.png";
import p3_img from "./product_14.png";
import p4_img from "./product_8.png";
import p5_img from "./product_15.png";
import p6_img from "./product_2.png";
import p7_img from "./product_17.png";
import p8_img from "./product_28.png";

const usdToInr = 70;
const rupeeSymbol = '₹';

let new_collections = [
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: `${rupeeSymbol}${(50.0 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(80.5 * usdToInr).toFixed(2)}`,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p2_img,
    new_price: `${rupeeSymbol}${(85.0 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(120.5 * usdToInr).toFixed(2)}`,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p3_img,
    new_price: `${rupeeSymbol}${(60.0 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(100.5 * usdToInr).toFixed(2)}`,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price: `${rupeeSymbol}${(100.0 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(150.0 * usdToInr).toFixed(2)}`,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p5_img,
    new_price: `${rupeeSymbol}${(50.0 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(80.5 * usdToInr).toFixed(2)}`,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p6_img,
    new_price: `${rupeeSymbol}${(85.0 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(120.5 * usdToInr).toFixed(2)}`,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p7_img,
    new_price: `${rupeeSymbol}${(60.0 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(100.5 * usdToInr).toFixed(2)}`,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p8_img,
    new_price: `${rupeeSymbol}${(100.0 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(150.0 * usdToInr).toFixed(2)}`,
  },
];

export default new_collections;
