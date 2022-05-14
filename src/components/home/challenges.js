import icons2 from "../../assets/images/icons/02.png";
import icons3 from "../../assets/images/icons/03.png";
import icons4 from "../../assets/images/icons/04.png";
import icons5 from "../../assets/images/icons/05.png";
import icons6 from "../../assets/images/icons/06.png";
import icons7 from "../../assets/images/icons/07.png";
import icons1 from "../../assets/images/icons/01.png";
/**
 * @author
 * @function Challenges
 **/

const Challenges = (props) => {
  return (
    <div class="col-lg-12">
      <div class="d-flex flex-wrap justify-content-between align-items-center mb-2">
        <div class="caption">
          <h4 class="font-weight-bold mb-2">Challenges</h4>
          <p class="mb-2">Accept the Challenge</p>
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-primary">
            Time left
          </button>
          <button type="button" class="btn btn-soft-secondary">
            Rewards
          </button>
        </div>
      </div>
      <div class="card card-block card-stretch custom-scroll">
        <div class="table-responsive rounded">
          <table class="table table-striped mb-0">
            <tbody>
              <tr class="white-space-no-wrap">
                <td>
                  <img
                    src={icons1}
                    class="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img23"
                  />
                  Eat Bullets
                </td>
                <td>
                  Game mode
                  <br />1 * 1
                </td>
                <td>
                  Prize Pool
                  <br />
                  1000
                </td>
                <td>
                  Entry
                  <br />
                  500
                </td>
                <td>
                  Challenge Experience
                  <br />
                  <span class="text-primary">00H:15M</span>
                </td>
              </tr>
              <tr class="white-space-no-wrap">
                <td>
                  <img
                    src={icons2}
                    class="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img23"
                  />
                  Evillious Energy
                </td>
                <td>
                  Game mode
                  <br />1 * 1
                </td>
                <td>
                  Prize Pool
                  <br />
                  1000
                </td>
                <td>
                  Entry
                  <br />
                  500
                </td>
                <td>
                  Challenge Experience
                  <br />
                  <span class="text-primary">00H:15M</span>
                </td>
              </tr>
              <tr class="white-space-no-wrap">
                <td>
                  <img
                    src={icons3}
                    class="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img23"
                  />
                  Monstrous Michel
                </td>
                <td>
                  Game mode
                  <br />1 * 1
                </td>
                <td>
                  Prize Pool
                  <br />
                  1000
                </td>
                <td>
                  Entry
                  <br />
                  500
                </td>
                <td>
                  Challenge Experience
                  <br />
                  <span class="text-primary">00H:15M</span>
                </td>
              </tr>
              <tr class="white-space-no-wrap">
                <td>
                  <img
                    src={icons4}
                    class="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img23"
                  />
                  Duke of Doom
                </td>
                <td>
                  Game mode
                  <br />1 * 1
                </td>
                <td>
                  Prize Pool
                  <br />
                  1000
                </td>
                <td>
                  Entry
                  <br />
                  500
                </td>
                <td>
                  Challenge Experience
                  <br />
                  <span class="text-primary">00H:15M</span>
                </td>
              </tr>
              <tr class="white-space-no-wrap">
                <td>
                  <img
                    src={icons5}
                    class="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img23"
                  />
                  Gabriel Groomer
                </td>
                <td>
                  Game mode
                  <br />1 * 1
                </td>
                <td>
                  Prize Pool
                  <br />
                  1000
                </td>
                <td>
                  Entry
                  <br />
                  500
                </td>
                <td>
                  Challenge Experience
                  <br />
                  <span class="text-primary">00H:15M</span>
                </td>
              </tr>
              <tr class="white-space-no-wrap">
                <td>
                  <img
                    src={icons6}
                    class="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img23"
                  />
                  Annihilator
                </td>
                <td>
                  Game mode
                  <br />1 * 1
                </td>
                <td>
                  Prize Pool
                  <br />
                  1000
                </td>
                <td>
                  Entry
                  <br />
                  500
                </td>
                <td>
                  Challenge Experience
                  <br />
                  <span class="text-primary">
                    <span class="text-primary">00H:15M</span>
                  </span>
                </td>
              </tr>
              <tr class="white-space-no-wrap">
                <td>
                  <img
                    src={icons7}
                    class="img-fluid avatar avatar-30 avatar-rounded"
                    alt="img23"
                  />
                  Veteran of Death
                </td>
                <td>
                  Game mode
                  <br />1 * 1
                </td>
                <td>
                  Prize Pool
                  <br />
                  1000
                </td>
                <td>
                  Entry
                  <br />
                  500
                </td>
                <td>
                  Challenge Experience
                  <br />
                  <span class="text-primary">00H:15M</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
