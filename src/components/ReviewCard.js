import { useEffect, useState } from "react";

const ReviewCard = ({
  id = "",
  author = "",
  title = "",
  text = "",
  day = "",
  month = "",
  year = "",
  imgs = [],
}) => {
  const [currImageIdx, setCurrImageIdx] = useState(0);
  const elementId = `unq-${id}`;
  const imgsLen = imgs.length;
//   useEffect(() => {
//     console.log(document.getElementById(elementId));
//     console.log(currImageIdx, imgsLen, imgs, elementId);
//     document.getElementById(
//       elementId
//     ).style.background = `url(/assets/images/${imgs[currImageIdx]}) 20% 1%/cover no-repeat`;
//   }, [currImageIdx]);
  return (
    <div class="row">
      <div class="example-1 card">
        <div class="wrapper" id={elementId} style={{background: `url(/assets/images/${imgs[currImageIdx]}) 20% 1%/cover no-repeat`}}>
          <div class="date">
            <span class="day">{day}</span>
            <span class="month">{month}</span>
            <span class="year">{year}</span>
          </div>
          {(currImageIdx > 0) && (
            <div
              // style={{
              //   position: "absolute",
              //   color: "#3B79C9",
              // }}
              className="left-arrow"
              onClick={() => {
                setCurrImageIdx((idx) => (idx === 0 ? idx : idx - 1));
              }}
            >
              ⬅︎
            </div>
          )}
          {(currImageIdx < imgsLen-1)  && (
            <div
              className="right-arrow"
              onClick={() => {
                setCurrImageIdx((idx) => (idx === imgsLen - 1 ? idx : idx + 1));
              }}
            >
              ⬅︎
            </div>
          )}
          <div class="data">
            <div class="content">
              <span class="author">{author}</span>
              <h1 class="title">
                {/* <a href="#"> */}
                {title}
                {/* </a> */}
              </h1>
              <p class="text">{text}</p>
              <label for="show-menu" class="menu-button">
                <span></span>
              </label>
            </div>
            <input type="checkbox" id="show-menu" />
            <ul class="menu-content">
              <li>
                <a href="#" class="fa fa-bookmark-o"></a>
              </li>
              <li>
                <a href="#" class="fa fa-heart-o">
                  <span>47</span>
                </a>
              </li>
              <li>
                <a href="#" class="fa fa-comment-o">
                  <span>8</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

/* <div class="example-2 card">
<div class="wrapper">
  <div class="header">
    <div class="date">
      <span class="day">12</span>
      <span class="month">Aug</span>
      <span class="year">2016</span>
    </div>
    <ul class="menu-content">
      <li>
        <a href="#" class="fa fa-bookmark-o"></a>
      </li>
      <li>
        <a href="#" class="fa fa-heart-o">
          <span>18</span>
        </a>
      </li>
      <li>
        <a href="#" class="fa fa-comment-o">
          <span>3</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="data">
    <div class="content">
      <span class="author">Jane Doe</span>
      <h1 class="title">
        <a href="#">Stranger Things: The sound of the Upside Down</a>
      </h1>
      <p class="text">
        The antsy bingers of Netflix will eagerly anticipate the digital
        release of the Survive soundtrack, out today.
      </p>
      <a href="#" class="button">
        Read more
      </a>
    </div>
  </div>
</div>
</div> */
