import PopoverMenu from "@/components/PopoverMenu";

export const menu = [
  { name: "Discover", link: "/", id: 1 },
  { name: "Shop", link: "/menu", id: 2 },
  { name: "About Us", link: "/", id: 3 },
  { name: <PopoverMenu />, link: "/", id: 4 },
];

export const solutions = [
  {
    name: "Cleansers",
    description: "Measure actions your users take",
    href: "/",
    icon: "/cleansers.png",
  },
  {
    name: "Exfoliants",
    description: "Create your own targeted content",
    href: "/",
    icon: "/exfoliant.png",
  },
  {
    name: "Moisturizers",
    description: "Keep track of your growth",
    href: "/",
    icon: "/moisturizer.png",
  },
  {
    name: "Serums",
    description: "Keep track of your growth",
    href: "/",
    icon: "/serum.png",
  },
  {
    name: "Clays and Masks",
    description: "Keep track of your growth",
    href: "/",
    icon: "/facial-mask.png",
  },
];
export const footerMenu = [
  { name: "About us", link: "/", id: 1 },
  { name: "Products", link: "/", id: 2 },
  { name: "Contact", link: "/", id: 3 },
  { name: "FAQ", link: "/", id: 4 },
  { name: "Blog", link: "/", id: 5 },
];

export const bannerMenu = [
  {
    title: "Experince Clinically Proven Results.",
    desc: "Our products are carefully crafted to deliver the best results without harming the enviroment or animals.",
    linkName: "Learn More",
    id: 1,
  },
  {
    title: "Embrance Our Cruelty-Free Commitment.",
    desc: "We are proud to be a cruelty-free brand, ensuring that no animals are harmed in the creation of our products.",
    linkName: "Shop Now",
    id: 2,
  },
  {
    title: "Discover the Power of Eco-Friendly Packaging.",
    desc: "Our products are carefully crafted to deliver the best results into harming the enviroments or animals.",
    linkName: "Learn More",
    id: 3,
  },
];

export const faqList = [
  {
    question: "How do I determine my skin type?",
    answer:
      "Determining your skin type is essential for choosing the right skincare products. You can consult with a dermatalogist or use online resources to identify your skin type based on factors like oilness , dryness and sensitivity",
  },
  {
    question: "What is a skincare routine?",
    answer:
      "A skincare routine refers to the regular steps and products you use to take care of your skin. It typically includes cleansing, toning , moisturizing and applying sunscreen. Customizing your routine based on your skin type and concern is important for achieving healthy and radiant skin.",
  },

  {
    question: "How often should I exfoliate?",
    answer:
      "The frequency of exfoliation depends on your skin type and the type of exfoliate you're using. Generally, it's recommended to exfoliate 1-3 times a week. However, if you have sensitive skin, it's best to exfoliate less frequently to avoid irritation.",
  },
  {
    question: "Can I use multiple skincare products at once?",
    answer:
      "Yes, you can use multiple skincare products at once, but it's important to choose products that complement each other and addresses your specific skin concerns. Layering products in the correct order, from thinnest to thickest consistency, ensures optimal absorption and effectiveness.",
  },
  {
    question: "How long does it take to see results from skincare products?",
    answer:
      "The times it takes depends on the product and the individual factors, some products show immediate effects, while others may require consistant use over several weeks or months. Patience and consistency are key to get the expected results. ",
  },
];

export const database = [
  {
    title: "moisturizer1",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url:
          "https://res.cloudinary.com/dezsq7dy5/image/upload/v1700069970/celestia/dfmy2jyaw9b4wbg1nebn.png",
      },
    },
  },
  {
    title: "moisturizer2",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 3500,
    image: {
      create: {
        public_url:
          "https://res.cloudinary.com/dezsq7dy5/image/upload/v1700069969/celestia/jdnd8cekanbteptgh1sa.png",
      },
    },
  },
  {
    title: "cream1",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url:
          "https://res.cloudinary.com/dezsq7dy5/image/upload/v1700069965/celestia/rizz8abukjwdfyjfddi1.png",
      },
    },
  },
  {
    title: "cream2",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url:
          "https://res.cloudinary.com/dezsq7dy5/image/upload/v1700069965/celestia/ibefudtxv8ehrbwwyqdp.png",
      },
    },
  },
  {
    title: "cream3",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url:
          "https://res.cloudinary.com/dezsq7dy5/image/upload/v1700069965/celestia/kiuf0k0kyyzqqx9dghxp.png",
      },
    },
  },
  {
    title: "serum1",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url:
          "https://res.cloudinary.com/dezsq7dy5/image/upload/v1700069966/celestia/kx4wyd6kshkib7bkklee.png",
      },
    },
  },
  {
    title: "serum2",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url:
          "https://res.cloudinary.com/dezsq7dy5/image/upload/v1700069966/celestia/wfwuy9cns7vfaq7e42dv.png",
      },
    },
  },
  {
    title: "serum2",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url:
          "https://res.cloudinary.com/dezsq7dy5/image/upload/v1700069967/celestia/iddat4wajfdokl1o05q6.png",
      },
    },
  },
];
export const newdatabase = [
  {
    title: "moisturizer1",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url: "/moisturizer1.png",
      },
    },
  },
  {
    title: "moisturizer2",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 3500,
    image: {
      create: {
        public_url: "/moisturizer2.png",
      },
    },
  },
  {
    title: "cream1",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url: "/cream1.png",
      },
    },
  },
  {
    title: "cream2",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url: "/cream2.png",
      },
    },
  },
  {
    title: "cream3",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url: "/cream3.png",
      },
    },
  },
  {
    title: "serum1",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url: "/serum1.png",
      },
    },
  },
  {
    title: "serum2",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url: "/serum2.png",
      },
    },
  },
  {
    title: "serum3",
    desc: "Enhances the natural beauty by its earthly components and natural scent",
    price: 2500,
    image: {
      create: {
        public_url: "/serum3.png",
      },
    },
  },
];

export const wordVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.1 } },
};
export const imgMainDivVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const singleImg = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};
