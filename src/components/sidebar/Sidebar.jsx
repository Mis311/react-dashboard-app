import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import InsightsIcon from "@mui/icons-material/Insights";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyleIcon />
              Raffle
            </li>
            <li className="sidebar-list-item">
              <InsightsIcon />
              Progress
            </li>
            <li className="sidebar-list-item">
              <WhatshotIcon />
              Chat
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Inventory</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyleIcon />
              Pet
            </li>
            <li className="sidebar-list-item">
              <InsightsIcon />
              Collections
            </li>
            <li className="sidebar-list-item">
              <WhatshotIcon />
              Your Planet
            </li>
          </ul>
        </div>

        
      </div>
    </div>
  );
};

export default Sidebar;
