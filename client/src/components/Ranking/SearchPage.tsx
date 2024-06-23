import { Dot, InfoTag } from "../UserPage/UserPage.style";
import { SearchPageContainer, SearchHeader, HeaderTitle, ButtonContainer, FirstTitle, MainTitle, SearchContent, SearchContentContainer, SearchItems, SearchItemsCard, SearchItemsContent, ItemYearDuration, ItemYear, ItemDescription, ItemOtherInformationTitle, ItemOtherInformationContent, ItemTags, ItemTitle, SearchItemsInfo, ItemOtherInformation, ItemTitleAndIcons, ReviewMark } from "./SearchPage.style";
import GOT from "../../assets/GOT.svg";
import StarIcon from "../../assets/StarIcon.png"

const SearchPage = () => {
    return (
        <SearchPageContainer>
            <SearchHeader>
                <HeaderTitle>
                    <FirstTitle>
                        Primeira Fila Charts
                    </FirstTitle>
                    <MainTitle>
                        <Dot/>
                        <span>Primeira Fila Top 25 Search</span>
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
                        <SearchItemsCard>
                            <SearchItemsContent>
                                <img src={GOT} alt="GOT" height={194} width={126}/>
                                <SearchItemsInfo>
                                    <ItemTitleAndIcons>
                                        <ItemTitle>Game of Thrones</ItemTitle>
                                        <ReviewMark>
                                            <img src={StarIcon} alt="StarIcon" width={24} height={24} style={{ paddingBottom: 3}}/>
                                            <span style={{ color: 'yellow' }}>10</span>
                                            <span>/10</span>
                                            <span style={{ color: '#797979', fontSize: 16, paddingLeft: 5, paddingBottom: 3}}>(2.9M)</span>
                                        </ReviewMark>
                                    </ItemTitleAndIcons>
                                    <ItemYearDuration>
                                        <ItemYear>2011</ItemYear>
                                        <Dot/>
                                        <ItemYear>8 temporadas</ItemYear>
                                    </ItemYearDuration>
                                    <ItemTags>
                                        <InfoTag>Drama</InfoTag>
                                        <InfoTag>Aventura</InfoTag>
                                        <InfoTag>Fantasia</InfoTag>
                                    </ItemTags>
                                    <ItemDescription>Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.</ItemDescription>
                                    <ItemOtherInformation>
                                        <ItemOtherInformationTitle>Director:</ItemOtherInformationTitle><ItemOtherInformationContent>Sian Heder</ItemOtherInformationContent>
                                    </ItemOtherInformation>
                                    <ItemOtherInformation>
                                        <ItemOtherInformationTitle>Stars:</ItemOtherInformationTitle><ItemOtherInformationContent>Emilia Clarke, Peter Dinklage, Kit Harington</ItemOtherInformationContent>
                                    </ItemOtherInformation>
                                    <ItemOtherInformation>
                                        <ItemOtherInformationTitle>Votes:</ItemOtherInformationTitle><ItemOtherInformationContent>500</ItemOtherInformationContent>
                                    </ItemOtherInformation>
                                </SearchItemsInfo>
                            </SearchItemsContent>
                        </SearchItemsCard>
                    </SearchItems>
                </SearchContent>
            </SearchContentContainer>
        </SearchPageContainer>
    )
}

export default SearchPage;