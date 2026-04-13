import '../styles/global.css';
import { useNavigate } from "react-router-dom";

const Card = (props) => {

  const navigate = useNavigate();

  return (
    <div className="mt-5">
      <div className="row justify-content-center">
        {/*<div className="col-md-4">*/}
        <div>
          <div className="card custom-card">

            <img
              src={props.image}
              //src="https://picsum.photos/400/200"
              className="card-img-top"
              alt="imagen"
            />

            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>

             {/*
              <p className="card-text">
                {props.text}
              </p>
              */}

              <h2 className="card-title">{props.text}</h2>
              {
              props.button ?
              <button onClick={() => navigate(`/${props.path}`)} className="btn btn-primary custom-btn">
                Ver más
              </button>
              :
              null}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;