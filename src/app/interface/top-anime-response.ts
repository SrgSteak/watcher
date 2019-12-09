/**
 * Response from the jikan API at https://api.jikan.moe/v3/top/anime
 */
export interface TopAnimeResponse {
  request_hash: string; // "request:top:f78636d836639d2d6d40b9fe25d9ce05dd239ab0",
  request_cached: boolean; // true,
  request_cache_expiry: number; // -266213,
  top: [
    {
      mal_id: number; // 5114,
      rank: number; // 1,
      title: string; // "Fullmetal Alchemist: Brotherhood",
      url: string; // "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
      image_url: string; // "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
      type: string; // "TV",
      episodes: number; // 64,
      start_date: string; // "Apr 2009",
      end_date: string; // "Jul 2010",
      members: number; // 1588733,
      score: number; // 9.23
    }
  ];
}
