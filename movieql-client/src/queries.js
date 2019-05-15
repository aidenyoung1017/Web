import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {
        moviesInstance(limit:50, rating: 7.2){
            id
            title
            rating
        }
    }
`;

