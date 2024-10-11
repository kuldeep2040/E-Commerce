import p1_img from './product_1.png';
import p2_img from './product_2.png';
import p3_img from './product_3.png';
import p4_img from './product_4.png';

const usdToInr = 70;
const rupeeSymbol = '₹';

let data_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: `${rupeeSymbol}${(50.00 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(80.50 * usdToInr).toFixed(2)}`,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p2_img,
    new_price: `${rupeeSymbol}${(85.00 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(120.50 * usdToInr).toFixed(2)}`,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p3_img,
    new_price: `${rupeeSymbol}${(60.00 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(100.50 * usdToInr).toFixed(2)}`,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price: `${rupeeSymbol}${(100.00 * usdToInr).toFixed(2)}`,
    old_price: `${rupeeSymbol}${(150.00 * usdToInr).toFixed(2)}`,
  },
];

export default data_product;
