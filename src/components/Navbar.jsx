import styled from 'styled-components';
import { VscHome, VscSearch } from 'react-icons/vsc';
import { MdVideoCameraFront, MdGif, MdExplore } from 'react-icons/md';
import { Link } from 'react-router-dom';
//styled navbar
const StyledNav = styled.nav`
  .linksNav {
    ul {
      display: flex;
      justify-content: space-around;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        text-transform: uppercase;
        padding: 0 0.1rem;
        font-weight: bold;
        svg {
          font-size: 1.3rem;
          color: #030303;
          :hover {
            color: #4fbdba;
          }
        }
      }
    }
    .cardNav {
      border-radius: 8px;
      background: linear-gradient(315deg, #4d5968, #5c6a7b);
      box-shadow: -5px -5px 9px #22282e, 5px 5px 9px #8a9eb8;
      padding: 0.6rem;
    }
  }
  .active {
    border-radius: 0.7rem;
    background: #4fbdba;
    box-shadow: inset -20px 20px 25px #337b79, inset 20px -20px 25px #6bfffb;
  }
`;

//reder the navbar CgProfile
const Navbar = () => {
  return (
    <StyledNav>
      <div className="linksNav">
        <ul>
          <li>
            <div className="cardNav">
              <Link to="/">
                <VscHome />
              </Link>
            </div>
          </li>
          <li>
            <div className="cardNav">
              <Link to="/giffy">
                <MdGif />
              </Link>
            </div>
          </li>
          {/* <li> */}
          {/* <div className="cardNav">
              <CgProfile />
            </div>
          </li> */}
          <li>
            <div className="cardNav">
              <Link to='/explore/'>
              <MdExplore />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

export default Navbar;
