import { useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';
import styled from 'styled-components';
import { BsLink } from 'react-icons/bs';

const StyledUser = styled.article`
    color:#00f;
  .userPhoto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 3rem 0rem 3rem;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
    h1 {
      padding: 0.3rem 0;
      margin: 0;
      color:#000;
      font-weight:bold;
      text-transform:uppercase;
      letter-spacing:2px;
    }
    p {
      padding: 0;
      margin: 0;
    }
  }
  .stats {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: .5rem 0;
    .data {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.8rem;
      margin: 0.5rem;
      border-radius: 1rem;
  background: #515F6F;
    box-shadow: inset -5px -5px 10px #22282f,
            inset 5px 5px 10px #8096af;
      strong {
        color: #ff0000;
        padding: 0.7rem;
        border-radius: .7rem;
background: #586779;
box-shadow: inset 10px 10px 27px #303943,
            inset -10px -10px 27px #8095af;
      }
    }
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      padding: 0.3rem 1rem;
      border-radius: 1rem;
    }
    a {
      color: #ff0000;
      text-decoration: none;
      border-radius: 0.5rem;
      padding: 0 0.5rem;
      background: linear-gradient(145deg, #55cac7, #47aaa7);
      box-shadow: 20px 20px 67px #204c4a, -20px -20px 67px #7effff;
    }
  }
  .renderPhotos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    picture {
      padding:1rem;
      border-radius: 7px;
background: #515F6F;
box-shadow: inset -5px -5px 10px #22282f,
            inset 5px 5px 10px #8096af;
            margin:.3rem 1rem;
      img{
        width: 100%;
        margin:0;
        object-fit: cover;
        border-radius: 1rem;
        border: 1px solid #1707ff;
      }
    }
      `;

const Profile = () => {
  const { user } = useParams();
  const data = useUser({ user: user });
  return (
    <StyledUser>
      {
        <>
          <div className="userPhoto">
            {data.profile_image && (
              <img src={data.profile_image.large} alt="" />
            )}
            <h1>{user}</h1>
            <p>{data.bio}</p>
          </div>
          <div className="stats">
            <div className="data">
              <strong>{data.followers_count}</strong>
              <span> followers</span>
            </div>
            <div className="data">
              {data.photos && <strong>{data.total_photos}</strong>}
              <span>photos</span>
            </div>
            <div className="data">
              <strong>{data.following_count}</strong>
              <span>following</span>
            </div>
          </div>
          <div className="info">
            {data.portfolio_url ? (
              <h2>
                portfolio
                <a href={data.portfolio_url} tarjet="_blank">
                  <BsLink />
                </a>
              </h2>
            ) : null}
          </div>
          <div className="renderPhotos">
            {data.photos &&
              data.photos.map((photo) => {
                return (
                  <picture key={photo.urls.small} key={photo.urls.small}>
                    <img src={photo.urls.full} alt="itdavidev Davgram api unplash" />
                  </picture>
                );
              })}
          </div>
        </>
      }
    </StyledUser>
  );
};

export default Profile;
