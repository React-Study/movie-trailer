import React from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IMAGE_URL } from 'util/consts';

const CharacterDetail = ({data, data2}) => {
  const {
    name,
    known_for_department,
    gender,
    birthday,
    place_of_birth,
    profile_path
  } = data;
  const {
    translations
  } = data2;
  // useEffect(() => {
	// 	if(data2 && data2.length > 0) {
	// 		// console.info(data2.translations[0]);
  //     const {translations} = data2;
  //     console.info(translations)
	// 	}
	// }, [data2])
  console.info(translations)

  let bio = translations? translations[0].data.biography : '';
  console.info(bio);

  let personGender = '';
  if(gender === 2 ) { personGender = '남성'; } 
  else { personGender = '여성'; }

  return (
    <DetailBox>
        <LeftBox>
        {/* {console.info(data2.translations[0])} */}
        {/* {console.info(translations)} */}
        {/* {console.info(biography)} */}
        <img src={`${IMAGE_URL}${profile_path}`} alt="personImage" />
        <h2>인물 정보</h2>
        <h3>유명 분야</h3>
        <div>{known_for_department}</div>
        <h3>성별</h3>
        <div>{personGender}</div>
        <h3>생년월일</h3>
        <div>{birthday}</div>
        <h3>출생지</h3>
        <div>{place_of_birth}</div>
        </LeftBox>
        <RightBox>
          <h1>{name}</h1>
          <h2>약력</h2>
          <p>{bio}</p>
          <h2>유명 분야</h2>
          {/* {characterCreditData.cast} */}
          <h2>연기</h2>
        </RightBox>
    </DetailBox>
  );
};

export default CharacterDetail;

const DetailBox = styled.div`
  padding: 80px 10%;
  display: flex;
`;

const LeftBox = styled.div`
  img {
    border-radius: 15px;
  }
  h2{
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 18px;
  }
  h3{
    font-size: 18px;
    font-weight: bold;
  }
  div{
    margin-bottom: 26px;
    font-size: 18px;
  }
`;

const RightBox = styled.div`
  margin-left: 40px;
  font-size: 36px;
  font-weight: bold;
  h2{
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 18px;
  }
  p {
    font-size: 18px;
    font-weight: normal;
  }
`;