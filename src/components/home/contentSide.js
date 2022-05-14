import Challenges from "./challenges";
import Achievements from "./achievements";
import Upcoming from "./upcoming";

/**
 * @author
 * @function ContentSide
 **/

const ContentSide = (props) => {
  return (
    <div class="col-lg-8">
      <div class="row">
        <Upcoming />
        <Achievements />
        <Challenges />
      </div>
    </div>
  );
};

export default ContentSide;
