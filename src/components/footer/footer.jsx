import { useNavigate } from "react-router";
import "./footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-div">
        <div className="logo-footer">
          <span className="brand">CrazyThrifts</span>
          <p>
            Specializes in providing high-quality, stylish productsfor your
            wardrobe
          </p>
        </div>
        <div className="contacts">
          <div className="companies">
            <h3>COMPANY</h3>
            <p onClick={() => navigate("/")}>About</p>
            <p onClick={() => navigate("/")}>Terms of Use</p>
            <p onClick={() => navigate("/")}>Policies</p>
          </div>

          <div className="socials">
            <h3>CONTACTS: </h3>
            <span><i class="fa-brands fa-github fa-lg"></i> Github</span>
            <span><i class="fa-brands fa-twitter fa-lg"></i> Twitter</span>
            <span><i class="fa-brands fa-linkedin fa-lg"></i> LinkedIn</span>
          </div>
        </div>
      </div>
      <hr />
      <p>
        Copyright <i class="fa-regular fa-copyright"></i>2023 CrazyThrift store. All rights
        reserved.
      </p>
    </footer>
  );
};
