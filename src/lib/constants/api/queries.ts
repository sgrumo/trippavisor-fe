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

export const GET_ALL_FESTIVALS_BY_DATE = `query getAllFestivalsByDate($date: Date){
  allFestivals(
    filter: {
      AND: [
        {
          period: {
            any: {
              period: {
                startdate: {
                  lte: $date
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
                  gte: $date
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

export const GET_ALL_FESTIVALS_BY_GEOLOCALIZATION = `query getAllFestivalsByDate($latitude: FloatType!, $longitude: FloatType!, $radius: IntType!) {
  allFestivals(filter: 
    {
      localization: {
        near: {
          latitude: $latitude,
          longitude: $longitude,
          radius: $radius
        }
      }
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
