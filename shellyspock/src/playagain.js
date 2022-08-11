//import { useNavigate } from "react-router-dom";
function Playagain() {
  // const navigate = useNavigate();
  // const playagain1 = () => {
  //   navigate('/index.html');
  // };
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
      <div className="ido">
      <h3 className="playagain1">Do you want to get humiliated again?&emsp;&emsp;
      <button className="playagain2" onClick={refreshPage}>
        I do...
      </button></h3>
      </div>
    </div>
  );
}
export default Playagain;
