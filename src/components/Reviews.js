import { Carousel } from "antd";
import ReviewCard from "./ReviewCard";
import { isMobile } from "../utils/helpers";

const reviews = [
  {
    id: "1",
    author: "Rohit",
    title:
      "Our 4 day Trip to Dandeli, Gokarna & Murdeshwar with a group of 9 people was an incredible journey",
    text: "Had resort group tent stays with friends, chilled at beaches, danced at watefalls, visited famous temples. It was really an amazing experience from swadestiny. Hope to plan for yet another trip until next time",
    day: "29-2",
    month: "Sept - Oct",
    year: "2023",
    imgs: ["gallery-1.jpg", "gallery-5.jpg"],
  },
  {
    id: "2",
    author: "Lavanya",
    title:
      "3 day private trip for 3 girls to Alleppey, Varkala & Munnar with lowest possible budget",
    text: "As young minds started  to provide a good travel experience with lots of planning and hard work throughout the energy, they are ready to change and customize the plan as you exactly wish. It's worth giving the opportunity to this page.",
    day: "24-26",
    month: "Dec",
    year: "2023",
    imgs: ["reviewer-2-1.jpeg"],
  },
  {
    id: "3",
    author: "Divya",
    title:
      "3 day private trip for 3 girls to Alleppey, Varkala & Munnar with lowest possible budget",
    text: "Swa Destiny is a friendly and interactive travel page which gives secure feeling  throughout the journey but need to take some care about food based on the traveller's preference in some aspects...",
    day: "24-26",
    month: "Dec",
    year: "2023",
    imgs: ["reviewer-2-2.jpeg", "reviewer-2-3.jpeg"],
  },
];

const Reviews = () => {
  return (
    <section class="package" id="reviews">
      <div class="container">
        <p class="section-subtitle">Reviews for our services</p>
        <h2 class="h2 section-title">Hear from Travellers</h2>
        <p class="section-text">
          "We love when we hear from our customers and their memorable
          experiences."
        </p>
        <Carousel
          slidesToShow={isMobile() ? 1 : 2}
          autoplay
          autoplaySpeed={5000}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
