import {
  ButtonContainer,
  Dot,
  FollowButtonContainer,
  InfoTag,
  InfoTagsContainer,
  InfoTitle,
  ReviewButtons,
  ReviewCard,
  ReviewContent,
  ReviewDate,
  ReviewHeader,
  ReviewMark,
  ReviewText,
  ReviewTitle,
  ReviewUser,
  ReviewUserAndDate,
  Reviews,
  UserImage,
  UserInfo,
  UserInfoCard,
  UserInfoContainer,
  UserName,
  UserNameAndImage,
  UserPageContainer,
} from "./UserPage.style";
import johnSnow from "../../assets/johnSnow.jpg";
import AddIcon from "../../assets/AddIcon.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "../../assets/StarIcon.png";
import LikeIcon from "../../assets/LikeIcon.svg";
import DislikeIcon from "../../assets/DislikeIcon.svg";

const UserPage = () => {
  return (
    <UserPageContainer>
      <div
        className="background"
        style={{
          background: "rgba(157, 139, 248, 0.498)",
          filter: "blur(18em)",
          borderRadius: "52px",
          position: "absolute",
          width: "100%",
          height: "20%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
          top: "20%",
          left: "0",
          opacity: "0.5",
          pointerEvents: "none",
          justifyContent: "center",
        }}
      />
      <hr
        style={{
          border: "none",
          height: "1px",
          backgroundColor: "#A3A3A3", // Mude a cor aqui
          margin: "20px 0",
        }}
      />
      <UserInfoContainer>
        <UserNameAndImage>
          <UserName>John Snow</UserName>
          <UserImage src={johnSnow} alt="userPhoto" />
        </UserNameAndImage>
        <UserInfo>
          <UserInfoCard>
            <InfoTitle>Gêneros favoritos</InfoTitle>
            <InfoTagsContainer>
              <InfoTag>Drama</InfoTag>
              <InfoTag>Aventura</InfoTag>
              <InfoTag>Comédia</InfoTag>
            </InfoTagsContainer>
          </UserInfoCard>
          <UserInfoCard>
            <InfoTitle>Número de resenhas</InfoTitle>
            <InfoTagsContainer>
              <InfoTag>77</InfoTag>
            </InfoTagsContainer>
          </UserInfoCard>
          <UserInfoCard>
            <InfoTitle>Filmes assistidos</InfoTitle>
            <InfoTagsContainer>
              <InfoTag>52</InfoTag>
            </InfoTagsContainer>
          </UserInfoCard>
          <UserInfoCard>
            <InfoTitle>Séries assistidas</InfoTitle>
            <InfoTagsContainer>
              <InfoTag>35</InfoTag>
            </InfoTagsContainer>
          </UserInfoCard>
        </UserInfo>
        <FollowButtonContainer>
          <ButtonContainer>
            <img src={AddIcon} alt="addIcon" width={24} height={24} />
            <a>Seguir</a>
          </ButtonContainer>
        </FollowButtonContainer>
      </UserInfoContainer>
      <ReviewHeader>
        <h1>Resenhas</h1>
        <ButtonContainer>
          <a>Ver todas</a>
          <ArrowForwardIosIcon
            style={{ color: "white" }}
            width={8}
            height={5}
          />
        </ButtonContainer>
      </ReviewHeader>
      <Reviews>
        <ReviewCard>
          <ReviewContent>
            <ReviewMark>
              <img src={StarIcon} alt="StarIcon" />
              <span style={{ color: "yellow" }}>10</span>
              <span>/10</span>
            </ReviewMark>
            <ReviewTitle>
              One Of The Greatest Sequel Ever Made, Dune: Part Two Was Easily
              The Best Films Of The Year So Far
            </ReviewTitle>
            <ReviewUserAndDate>
              <ReviewUser>johnDoe</ReviewUser>
              <Dot />
              <ReviewDate>20 Feb 2024</ReviewDate>
            </ReviewUserAndDate>
            <ReviewText>
              In the quiet embrace of ink and page, a story unfolded, timeless
              and sage, through the lens of a filmmaker's artistry, its essence
              soared, a masterpiece for all to see, i think Denis Villeneuve has
              just made the most visually stunning epic story of a movie that's
              ever been made, the most powerful story of a movie ever been told
              in the last 20 years, there has been no movies with this scale
              resulting in not just a piece of a film no more but a piece of
              art, it's what Infinity War and Endgame looks like
            </ReviewText>
            <ReviewButtons>
              <ButtonContainer>
                <img src={LikeIcon} alt="LikeIcon" />
              </ButtonContainer>
              <ButtonContainer>
                <img src={DislikeIcon} alt="DislikeIcon" />
              </ButtonContainer>
            </ReviewButtons>
          </ReviewContent>
        </ReviewCard>
        <ReviewCard>
          <ReviewContent>
            <ReviewMark>
              <img src={StarIcon} alt="StarIcon" />
              <span style={{ color: "yellow" }}>10</span>
              <span>/10</span>
            </ReviewMark>
            <ReviewTitle>
              One Of The Greatest Sequel Ever Made, Dune: Part Two Was Easily
              The Best Films Of The Year So Far
            </ReviewTitle>
            <ReviewUserAndDate>
              <ReviewUser>johnDoe</ReviewUser>
              <Dot />
              <ReviewDate>20 Feb 2024</ReviewDate>
            </ReviewUserAndDate>
            <ReviewText>
              In the quiet embrace of ink and page, a story unfolded, timeless
              and sage, through the lens of a filmmaker's artistry, its essence
              soared, a masterpiece for all to see, i think Denis Villeneuve has
              just made the most visually stunning epic story of a movie that's
              ever been made, the most powerful story of a movie ever been told
              in the last 20 years, there has been no movies with this scale
              resulting in not just a piece of a film no more but a piece of
              art, it's what Infinity War and Endgame looks like
            </ReviewText>
            <ReviewButtons>
              <ButtonContainer>
                <img src={LikeIcon} alt="LikeIcon" />
              </ButtonContainer>
              <ButtonContainer>
                <img src={DislikeIcon} alt="DislikeIcon" />
              </ButtonContainer>
            </ReviewButtons>
          </ReviewContent>
        </ReviewCard>
      </Reviews>
    </UserPageContainer>
  );
};

export default UserPage;
