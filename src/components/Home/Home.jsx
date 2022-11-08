import React, { useEffect, useState } from 'react';
import Layout from 'components/common/Layout/Layout';
import { CoverList } from 'components/common/CoverList';
import { getDiscover, getTrending } from 'util/consts';

const Home = () => {
  const popularTypes = ['flatrate', 'tv', 'rent', 'theatres'];
  const freeTypes = ['movie', 'tv'];
  const trendingTypes = ['day', 'week'];
  const [popularData, setPopularData] = useState([]);
  const [freeData, setFreeData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  // [search] url: /search/multi

  const getDiscoverData = async (type, subType) => {
    // type: tv, movie | subtype: flatrate, theatres, rent, free
    const params = {
      language: 'ko-KR',
      watch_region: 'KR',
    };
    if (subType) {
      if (subType === 'theatres') {
        params.with_release_type = '3 | 2';
      } else {
        params.with_watch_monetization_types = subType;
      }
    }
    if (subType === 'free') {
      setFreeData(await getDiscover(type, params));
    } else {
      setPopularData(await getDiscover(type, params));
    }
  };

  const getTrendingData = async (mediaType, timeWindow, language) => {
    // mediaType: all | timeWindow: day, week
    setTrendingData(await getTrending(mediaType, timeWindow, language));
  };

  const onChangeTab = (e, category) => {
    switch (category) {
      case 'popular':
        if (e === 'tv') {
          getDiscoverData('tv');
        } else {
          getDiscoverData('movie', e);
        }
        break;
      case 'free':
        getDiscoverData(e, category);
        break;
      case 'trending':
        getTrendingData('all', e, 'ko-KR');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getDiscoverData('movie', 'flatrate'); // popular 스트리밍
    getDiscoverData('movie', 'free'); // free 영화
    // 최신 예고편
    getTrendingData('all', 'day', 'ko-KR'); // trending 오늘
  }, []);

  return (
    <Layout>
      {popularTypes.length > 0 && (
        <CoverList
          headerTitle="What's Popular"
          data={popularData}
          types={popularTypes}
          changeTab={onChangeTab}
          category="popular"
        ></CoverList>
      )}
      {freeTypes.length > 0 && (
        <CoverList
          headerTitle="Free To Watch"
          data={freeData}
          types={freeTypes}
          changeTab={onChangeTab}
          category="free"
        ></CoverList>
      )}
      {trendingTypes.length > 0 && (
        <CoverList
          headerTitle="트렌딩"
          data={trendingData}
          types={trendingTypes}
          changeTab={onChangeTab}
          category="trending"
        ></CoverList>
      )}
    </Layout>
  );
};

export default Home;
