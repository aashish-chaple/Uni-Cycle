import furniture from "../images/furniture1.jpg";
import clothes from "../images/clothes1.jpg";
import electronic from "../images/electronic1.jfif"
import stationary from "../images/stationary1.jpg";
import kitchenUtensils from "../images/kitchenUtensils.jpg";
import mattress from "../images/mattress.jpg";


const productsData = [
    {
        id: "1",
        imgsrc: furniture,
        title: "Furniture",
        info: "Study Table/ Chair/ Bed Frame etc",
        link: "/products/furniture"
    },
    {
        id: "2",
        imgsrc: clothes,
        title: "Clothing",
        info: "New and used clothes",
        link: "/product"
    },
    {
        id: "3",
        imgsrc: electronic,
        title: "Electronics",
        info: "All kinds of electronic gadets",
        link: "/products/electronics"
    },
    {
        id: "4",
        imgsrc: stationary,
        title: "Stationary",
        info: "College Essentials",
        link: "/products/stationary"
    },

    {
        id: "5",
        imgsrc: kitchenUtensils,
        title: "Kitchen Utensils",
        info: "Kitchen Utensils",
        link: "/products/kitchen"
    },
    {
        id: "6",
        imgsrc: mattress,
        title: "Mattress",
        info: "Used Mattress",
        link: "/products/mattress"
    },
];

export default productsData;
