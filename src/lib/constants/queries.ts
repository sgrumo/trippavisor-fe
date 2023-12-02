export const GET_ALL_FESTIVALS = `query {
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


export const GET_SINGLE_FESTIVAL = (title: string) => `query {
    festival(filter:{ title: {eq: "${title}" }}) {
      email
      id
      menus {
        filename
        url
      }
      location {
        latitude
        longitude
      }
      phonenumber
      title
      tags {
        tag
      }
      thumbnail {
        url
      }
      description
    }
  }`;

