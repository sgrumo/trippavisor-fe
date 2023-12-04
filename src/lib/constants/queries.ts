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

export const GET_ALL_FESTIVALS_BY_QUERY = `query getAllFestivalsByQuery($query: String!) {
  allFestivals(filter: 
    {
      title: {
        matches: { 
          pattern: $query, caseSensitive: false
        } 
      },
      OR: 
      [
        {
          tags: {
            any: {
              tag: {
                tag: {
                  matches: { 
                    pattern: $query, caseSensitive: false
                  } 
                }
              }
            }
          }
        }
      ]
    }) 
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

export const GET_ALL_FESTIVALS_BY_DATE = `query getAllFestivalsByDate($datestring: Date){
  allFestivals(
    filter: {
      AND: [
        {
          period: {
            any: {
              period: {
                startdate: {
                  lte: $datestring
                }
              }
            }
          }
        },
        {
          period: {
            any: {
              period: {
                enddate: {
                  gte: $datestring
                }
              }
            }
          }
        }
      ],
    }) 
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
