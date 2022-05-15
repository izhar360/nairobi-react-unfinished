import Hero from "./hero";
import ContentSide from "./contentSide";
import TeamChat from "./teamChat";

/**
 * @author
 * @function Dashboard
 **/

const Dashboard = (props) => {
  return (
    <div class="container-fluid content-inner pb-0">
      <div class="row">
        <Hero />
        <ContentSide />
        <TeamChat />
      </div>
    </div>
  );
};

export default Dashboard;
