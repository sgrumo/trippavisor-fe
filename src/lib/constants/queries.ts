export const GET_ALL_FESTIVALS = ` query {
    allFestivals {
        title
        id
        period {
          startdate
          enddate
        }
        tags {
          tag
        }
        thumbnail {
          responsiveImage {
            srcSet
            src
            sizes
            height
            width
            title
            alt
          }
        }
      }
}`;

