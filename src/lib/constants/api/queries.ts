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

export const GET_ALL_FESTIVALS_FILTERED = (
  filterString: string,
  params: string,
) => `query getAllFestivalsByDate(${params}){
  allFestivals(${filterString}) 
  {
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
      alt
      url
    }
  }
}`;

export const GET_SINGLE_FESTIVAL = `query getSingleFestival($title: String!) {
    festival(filter:{ title: {eq: $title }}) {
      email
      id
      menus {
        filename
        url
      }
      localization {
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
