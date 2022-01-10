import styled from 'styled-components';
import { VscHome, VscSearch } from 'react-icons/vsc';
import { MdVideoCameraFront, MdGif, MdExplore } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
//styled navbar
const StyledNav = styled.nav`
  position: fixed;
  overflow: hidden;
  width: 100%;
  padding: 0.5rem 0;
  background: linear-gradient(45deg, #4d5968, #5c6a7b);
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
      border-radius: 1rem;
      background: #586779;
      box-shadow: inset -20px 20px 69px #3e4956, inset 20px -20px 69px #72859c;
      padding: 0.6rem;
    }
  }
  .active {
    border-radius: 0.7rem;
    color:#0ff;
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
              <NavLink to="/posts">
                <VscHome />
              </NavLink>
            </div>
          </li>
          <li>
            <div className="cardNav">
              <NavLink to="/giffy">
                <MdGif />
              </NavLink>
            </div>
          </li>
          <li>
            <div className="cardNav">
              <NavLink to="/explore/">
                <MdExplore />
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

export default Navbar;
