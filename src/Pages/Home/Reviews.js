import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery(["reviewsQuery"], () =>
    fetch(`https://mysterious-mountain-06411.herokuapp.com/reviews`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-center font-bold my-24 text-3xl">Reviews</h3>

      <div className="flex flex-row justify-center gap-x-28 gap-y-12 flex-wrap">
        {reviews?.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
