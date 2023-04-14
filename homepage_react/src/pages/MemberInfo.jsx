import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import memberCardStyles from "../component/member/memberCard.module.css";
import Publications from "../component/\bpublications/Publications";

const MemberInfo = () => {
  const [professer, setProfesser] = useState({});
  const [publications, setPublications] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    (async () => {
      try {
        const resProfesser = await axios.get(`/get_member/${path}`);
        const resPubication = await axios.get(`/send_csv`);
        setProfesser(resProfesser.data[0].fields);
        setPublications(resPubication.data);
      } catch (err) {}
    })();
  }, []);
  return (
    <div>
      <div className={memberCardStyles.membercard}>
        <div className={memberCardStyles.memberimg}>
          <div>
            <img
              src={`http://localhost:8000/media/${professer.mem_image}`}
              className={memberCardStyles.memimg}
            />
          </div>
        </div>
        <div className={memberCardStyles.memberdesc}>
          <div>{professer.name}</div>
          <div>{professer.email}</div>
          <div>{professer.profile}</div>
        </div>
      </div>
      <Publications publications={publications} />
    </div>
  );
};

export default MemberInfo;
