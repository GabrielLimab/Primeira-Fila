import GlobalStyle from '../Styles/Font';
import {
  ReviewActionButton,
  ReviewActions,
  ReviewCard,
  ReviewContent,
  ReviewDate,
  ReviewHeader,
  ReviewRating,
  ReviewTitle,
  ReviewUsername,
  ReviewsContainer,
  StarIcon
} from './Review.style.ts';

const reviews = [
  {
    id: 1,
    rating: 10,
    title: "One Of The Greatest Sequel Ever Made, Dune: Part Two Was Easily The Best Films Of The Year So Far",
    username: "username",
    date: "20 Feb 2024",
    content: "In the quiet embrace of ink and page, a story unfolded, timeless and sage, through the lens of a filmmaker's artistry, its essence soared, a masterpiece for all to see, I think Denis Villeneuve has just made the most visually stunning epic story of a movie that's ever been made, the most powerful story of a movie ever been told in the last 20 years, there has been no movies with this scale resulting in not just a piece of a film no more but a piece of art, it’s what Infinity War and Endgame looks like..."
  },
  // Adicione mais reviews aqui conforme necessário
];

const Review = () => {
  return (
    <ReviewsContainer>
      <GlobalStyle />
      {reviews.map((review) => (
        <ReviewCard key={review.id}>
          <ReviewHeader>
            <ReviewRating>
              <StarIcon>⭐</StarIcon> {review.rating}/10
            </ReviewRating>
            <ReviewTitle>{review.title}</ReviewTitle>
          </ReviewHeader>
          <ReviewUsername>{review.username}</ReviewUsername>
          <ReviewDate>{review.date}</ReviewDate>
          <ReviewContent>{review.content}</ReviewContent>
          <ReviewActions>
            <ReviewActionButton>210 Helpful</ReviewActionButton>
            <ReviewActionButton>210</ReviewActionButton>
          </ReviewActions>
        </ReviewCard>
      ))}
    </ReviewsContainer>
  );
};

export default Review;