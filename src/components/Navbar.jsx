import styled from 'styled-components';
import { VscHome, VscSearch } from 'react-icons/vsc';
import { MdVideoCameraFront } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
//styled navbar
const StyledNav = styled.nav`
  .acces {
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
      border-radius: 0.7rem;
      background: #4fbdba;
      box-shadow: inset -20px 20px 25px #337b79, inset 20px -20px 25px #6bfffb;
      padding: 0.6rem;
    }
  }
`;

//reder the navbar CgProfile
const Navbar = () => {
  return (
    <StyledNav>
      <div className="acces">
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
              <MdVideoCameraFront />

              </Link>
            </div>
          </li>
          <li>
            <div className="cardNav">
              <CgProfile />
            </div>
          </li>
          <li>
            <div className="cardNav">
              <VscSearch />
            </div>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

export default Navbar;
