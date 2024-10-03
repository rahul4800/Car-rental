// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Honda",
    rating: 112,
    carName: "Honda City",
    imgUrl: "https://www.hondacarindia.com/_next/image?url=https%3A%2F%2Fwww.hondacarindia.com%2Fweb-data%2Fmodels%2F2023%2Fcity5thGen%2FExperience%2FColors%2B%2FColors%2FMobile%2FAr_Vk_Honda-City_3TX_Front-3-4th-Studio-Shot_Platinum-White-Pearl_V3_Mobile.png&w=3840&q=75",
    model: "Model 4",
    price: 1200,
    speed: "16kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Camry",
    imgUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    model: "Model-2022",
    price: 1500,
    speed: "18kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHzSCWQBZ2oF2G1gbo5h_TnRez1NqnNCwGA&s",
    model: "Model-2022",
    price: 2200,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Magnite",
    imgUrl: "https://imgd.aeplcdn.com/1056x594/n/fg5u8ta_1495733.jpg?q=80",
    model: "Model-2022",
    price: 890,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "Suzuki",
    rating: 94,
    carName: "Ertiga",
    imgUrl: "https://imgd.aeplcdn.com/1056x594/n/c6es93a_1572125.jpg?q=80",
    model: "Model-2021",
    price: 990,
    speed: "22kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Hyundai",
    rating: 119,
    carName: "Hyundai Creta",
    imgUrl: "https://imgd.aeplcdn.com/664x374/cw/specialVersions/6487.jpg?v=20190805025920&q=80",

    model: "Model-2023",
    price: 1250,
    speed: "15kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;