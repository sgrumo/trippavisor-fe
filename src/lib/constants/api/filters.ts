export const AND_START = "AND: [";

export const OR_START = "OR: [";

export const AND_END = "]";

export const TITLE_FILTER = `title: {
    matches: { 
        pattern: $query, caseSensitive: false
    } 
  }`;

export const STARTDATE_FILTER = `period: {
      any: {
          period: {
              startdate: {
                  lte: $date
              }
          }
      }
  }`;

export const ENDDATE_FILTER = `period: {
      any: {
          period: {
              enddate: {
                  gte: $date
              }
          }
      }
  }`;

export const LOCALIZATION_FILTER = `geolocation: {
    near: {
        latitude: $latitude,
        longitude: $longitude,
        radius: $radius
    }
}`;

export const TAGS_FILTER = (index: number) => `tags: {
    any: {
      tag: {
        tag: {
          matches: { 
            pattern: $tag_${index}, caseSensitive: false
          } 
        }
      }
    }
  }`;
