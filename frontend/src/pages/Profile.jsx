import Row from "../ui/Row";
import Heading from "../ui/Heading";

function Profile() {
  return (
    <Row type="horizontal">
      <Row>
        <Heading as="h3">Bancho_Sushi</Heading>
        <p>The official account of Bancho's Sushi Bar</p>
      </Row>
      <p>Rank Platinum</p>
      <p>Like count: 1.13k</p>
    </Row>
  );
}

export default Profile;