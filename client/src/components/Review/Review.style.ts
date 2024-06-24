import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 20px;
  background-color: #1a1a1a;
  color: #fff;
`;

export const ReviewCard = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewRating = styled.div`
  font-size: 1.2em;
  margin-bottom: 5px;
`;

export const ReviewTitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

export const ReviewUsername = styled.div`
  font-weight: bold;
`;

export const ReviewDate = styled.div`
  color: #777;
  margin-bottom: 15px;
`;

export const ReviewContent = styled.div`
  font-size: 1em;
  margin-bottom: 15px;
`;

export const ReviewActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReviewActionButton = styled.button`
  background: none;
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    color: #fff;
  }
`;

export const StarIcon = styled.span`
  color: gold;
  margin-right: 5px;
`;
