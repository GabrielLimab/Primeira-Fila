import { Dot, InfoTag } from "../UserPage/UserPage.style";
import { SearchPageContainer, SearchHeader, HeaderTitle, ButtonContainer, FirstTitle, MainTitle, SearchContent, SearchContentContainer, SearchItems, SearchItemsCard, SearchItemsContent, ItemYearDuration, ItemYear, ItemDescription, ItemOtherInformationTitle, ItemOtherInformationContent, ItemTags, ItemTitle, SearchItemsInfo, ItemOtherInformation, ItemTitleAndIcons, ReviewMark } from "./SearchPage.style";
import GOT from "../../assets/GOT.svg";
import StarIcon from "../../assets/StarIcon.png"
import { useSearch } from "./SearchContext";
import { getMovieByName } from "../../services/movie";
import { MovieProps } from "../../types/MovieProps";
import { useEffect, useState } from "react";

async function getMovie(movieName: string) {
    const response = await getMovieByName(movieName);
    return response;
}   

const SearchPage = () => {
    const { searchTerm } = useSearch();
    const [movies, setMovies] = useState<MovieProps[]>([]);
    console.log("Rendenizou")
    useEffect(() => {
        console.log("UseEffect");
        const searchResult = async () => {
          try {
            const moviesResponse = await getMovie(searchTerm);
            setMovies(moviesResponse);
            console.log("Resposta da API:", moviesResponse);
          } catch (error) {
            console.error("Erro ao buscar filmes:", error);
          }
        };
    
        searchResult();
      }, [searchTerm]);
    
    return (
        <SearchPageContainer>
            <SearchHeader>
                <HeaderTitle>
                    <FirstTitle>
                        Filmes
                    </FirstTitle>
                    <MainTitle>
                        <Dot/>
                        <span>Busca por {searchTerm}</span>
                    </MainTitle>
                </HeaderTitle>
                <ButtonContainer>
                    <a>Compartilhar</a>
                    {/* <img src={}/> */}
                </ButtonContainer>
            </SearchHeader>
            <SearchContentContainer>
                {/* <Filters>

                </Filters> */}
                <SearchContent>
                    {/* <SearchContentButton>
                        <ButtonContainer>
                            <a>Ordenar por </a>
                            <img src={}/>
                        </ButtonContainer>
                    </SearchContentButton> */}
                    <SearchItems>
                        {movies.map((movie: MovieProps) => (
                            <SearchItemsCard>
                                <SearchItemsContent>
                                    <img src={GOT} alt="GOT" height={194} width={126}/>
                                    <SearchItemsInfo>
                                        <ItemTitleAndIcons>
                                            <ItemTitle>{movie.title}</ItemTitle>
                                            <ReviewMark>
                                                <img src={StarIcon} alt="StarIcon" width={24} height={24} style={{ paddingBottom: 3}}/>
                                                <span style={{ color: 'yellow' }}>{movie.vote_average}</span>
                                                <span>/10</span>
                                            </ReviewMark>
                                        </ItemTitleAndIcons>
                                        <ItemYearDuration>
                                            <ItemYear>{movie.release_date.slice(0,4)}</ItemYear>
                                        </ItemYearDuration>
                                        <ItemTags>
                                            <InfoTag>Drama</InfoTag>
                                            <InfoTag>Aventura</InfoTag>
                                            <InfoTag>Fantasia</InfoTag>
                                        </ItemTags>
                                        <ItemDescription>{movie.overview}</ItemDescription>
                                        <ItemOtherInformation>
                                            <ItemOtherInformationTitle>Director:</ItemOtherInformationTitle><ItemOtherInformationContent>Dony Dunn</ItemOtherInformationContent>
                                        </ItemOtherInformation>
                                        <ItemOtherInformation>
                                            <ItemOtherInformationTitle>Stars:</ItemOtherInformationTitle><ItemOtherInformationContent>Emilia Clarke, Peter Dinklage, Kit Harington</ItemOtherInformationContent>
                                        </ItemOtherInformation>
                                        <ItemOtherInformation>
                                            <ItemOtherInformationTitle>Votes:</ItemOtherInformationTitle><ItemOtherInformationContent>{movie.vote_count}</ItemOtherInformationContent>
                                        </ItemOtherInformation>
                                    </SearchItemsInfo>
                                </SearchItemsContent>
                            </SearchItemsCard>
                        ))}
                    </SearchItems>
                </SearchContent>
            </SearchContentContainer>
        </SearchPageContainer>
    )
}

export default SearchPage;