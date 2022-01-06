import useGiffys from '../hooks/useGiffys';
import styled from 'styled-components';

const StyledGifs = styled.div`
  .renderGifs {
    border-radius: 7px;
background: #515F6F;
box-shadow: inset -5px -5px 10px #22282f,
            inset 5px 5px 10px #8096af;
    margin: 1rem 0;
    padding:  0.3rem 1rem;
    h4{
      margin:0px;
      padding:0px;
    }
    img {
      width: 100%;
      object-fit: cover;
      z-index: 1;
      border-radius: 1rem;
    }
    |
  }
`;

const Giffy = () => {
  const data = useGiffys({});
  return (
    <StyledGifs>
      <h1>Giffy</h1>
      {data &&
        data.map((gif) => {
          return (
            <>
              <div className="renderGifs">
                <picture>
                  <img src={gif.images.original.url} alt="gif" />
                  <h4>{gif.title}</h4>
                </picture>
              </div>
            </>
          );
        })}
    </StyledGifs>
  );
};

export default Giffy;
