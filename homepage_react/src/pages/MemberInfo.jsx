import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Publications_m from "../component/member/mem_pub/Publist_m";
import memberCardStyles from "../component/member/memberCard.module.css";

const MemberInfo = () => {
  const [Member, setMember] = useState({});
  const [pub_m, setPublications] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    (async () => {
      try {
        const resMember = await axios.get(`/get_member/${path}`);
        const resPublication = await axios.get(`/get_publications`);

        const memberKey = resMember.data.members[0].mem_key;
        const filteredPublications = resPublication.data.publications.filter(
          (publication) => publication.m_id_id === memberKey
        );

        setMember(resMember.data.members[0]);
        setPublications({ publications: filteredPublications });
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className={memberCardStyles.memcontainer_m}>
      <div className={memberCardStyles.membercard_m}>
        <div className={memberCardStyles.memberimg}>
          <div>
            <img
              src={`http://localhost:8000/media/${Member.mem_image}`}
              className={memberCardStyles.memimg}
            />
          </div>
        </div>
        <div className={memberCardStyles.memberdesc}>
          <div>{Member.name}</div>
          <div>{Member.email}</div>
          <div>{Member.profile}</div>
        </div>
      </div>
      <div className={memberCardStyles.pubcontainer_m}>
        <div className={memberCardStyles.pubList_m}>
          <h1 className={memberCardStyles.header_m}>publication</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Publications_m data={pub_m.publications} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
