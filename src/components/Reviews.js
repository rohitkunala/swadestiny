import { Carousel } from "antd";
import ReviewCard from "./ReviewCard";
import { isMobile } from "../utils/helpers";

const reviews = [
  {
    id: "1",
    author: "Rohit",
    title: "Our Trip to Dandeli Gokarna Murdeshwar was an incredible journey",
    text: "Had resort group tent stays with friends, chilled at beaches, danced at watefalls, visited famous temples. It was really an amazing experience from swadestiny. Hope to plan for yet another trip until next time",
    day: "12",
    month: "Sept",
    year: "2023",
    imgs: ["gallery-1.jpg", "gallery-5.jpg"],
  },
  {
    id: "2",
    author: "Chandu",
    title:
      "Had an amazing experience and services provided were great. Had a trip to Chikmagulur",
    text: "",
    day: "30",
    month: "10",
    year: "2023",
    imgs: ["reviewer-2-1.jpeg", "reviewer-2-2.jpeg", "reviewer-2-3.jpeg"],
  },
];

const Reviews = () => {
  return (
    <section
      class="package"
      id="reviews"
    >
      <div class="container">
        <p class="section-subtitle">Reviews for our services</p>
        <h2 class="h2 section-title">Hear from Travellers</h2>
        <p class="section-text">
          "We love when we hear from our customers and their memorable
          experiences."
        </p>
        <Carousel slidesToShow={isMobile() ? 1 : 2} autoplay autoplaySpeed={5000}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
