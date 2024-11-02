const pizzas = [
  {
    _id: 1,
    name: "Margherita",
    varients: ["small", "medium", "largee"],
    prices: [
      {
        small: 99,
        medium: 199,
        largee: 399,
      },
    ],
    category: "veg",
    image: "/images/margherita.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    _id: 2,
    name: "Farmhouse",
    varients: ["small", "medium", "largee"],
    prices: [
      {
        small: 229,
        medium: 399,
        largee: 599,
      },
    ],
    category: "veg",
    image: "/images/farmhouse.jpg",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    _id: 3,
    name: "Veggie Paradise",
    varients: ["small", "medium", "largee"],
    prices: [
      {
        small: 180,
        medium: 290,
        largee: 460,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    image: "/images/veggie_paradise.jpg",
  },
  {
    _id: 4,
    name: "Chicken Golden Delight",
    varients: ["small", "medium", "largee"],
    prices: [
      {
        small: 249,
        medium: 349,
        largee: 599,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_golden_delight.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    _id: 5,
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "largee"],
    prices: [
      {
        small: 320,
        medium: 580,
        largee: 800,
      },
    ],
    category: "nonveg",
    image: "/images/cheesepepperoni.jpg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    _id: 6,
    name: "Indi Chicken Tikka",
    varients: ["small", "medium", "largee"],
    prices: [
      {
        small: 250,
        medium: 380,
        largee: 500,
      },
    ],
    category: "nonveg",
    image: "/images/IndianTandooriChickenTikka.jpg",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
];
export default pizzas;
module.export=pizzas;
