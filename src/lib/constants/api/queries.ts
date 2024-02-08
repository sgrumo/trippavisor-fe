export const GET_ALL_FESTIVALS = `query {
    allFestivals {
        title
        slug
        id
        address
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
    slug
    address
    period {
      startdate
      enddate
    }
    tags {
      tag
    }
    thumbnail {
      responsiveImage {
        src
        srcSet
        width
        height
        alt
        sizes
      }
    }
  }
}`;

export const GET_SINGLE_FESTIVAL = `query getSingleFestival($slug: String!) {
    festival(filter:{ slug: {eq: $slug }}) {
      id
      title
      description
      email
      address
      menus {
        filename
        url
      }
      geolocation {
        latitude
        longitude
      }
      gallery {
        responsiveImage {
          src
          srcSet
          width
          height
          alt
          sizes
        }
      }
      phonenumber
      tags {
        tag
      }
      thumbnail {
        url
      }
      seo:_seoMetaTags{
        attributes
         content
        tag
      }
    }
}`;

export const GET_ALL_FESTIVAL_SLUGS = `query getAllFestivalSlugs {
  allFestivals {
    slug
  }
}`;
