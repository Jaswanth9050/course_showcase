import React from "react";

const CouseCard = (props) => {
  const {
    Atitle,
    Aid,
    Ainstructor,
    Aduration,
    Alevel,
    Aisenrolled,
    Arating,
    Atags,
    Atags1,
    Atags2,
    AthumbnailUrl,
    AdiscountPrice,
    AorginalPrice,
  } = props;
  return (
    <div>
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden m-2">
        <img
          src={AthumbnailUrl}
          alt={Atitle}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body bg-light">
          <h3 className="card-title text-center text-primary fw-bold">
            {Atitle}
          </h3>

          <p className="d-flex justify-content-between align-items-center">
            <span>
              <i className="bi bi-person-fill me-2"></i>
              <strong>Instructor:</strong> {Ainstructor}
            </span>
            <span>
              <i className="bi bi-clock-fill me-2"></i>
              <strong>Duration:</strong> {Aduration}
            </span>
          </p>

          <p className="d-flex justify-content-between align-items-center">
            <span>
              <i className="bi bi-graph-up-arrow me-2"></i>
              <strong>Level:</strong> {Alevel}
            </span>
            <span>
              <i className="bi bi-people-fill me-2"></i>
              <strong>Enrolled:</strong> {Aisenrolled}
            </span>
          </p>

          <p className="text-warning">
            <i className="bi bi-star-fill me-2"></i>
            <strong>Rating:</strong> {Arating}
          </p>

          <div className="mb-2">
            <h5 className="text-muted">
              <i className="bi bi-tag-fill me-2"></i>
              Original Price:{" "}
              <span className="text-decoration-line-through">
                ${AorginalPrice}
              </span>
            </h5>
            <h4 className="text-success">
              <i className="bi bi-cash-coin me-2"></i>
              Discount Price: ${AdiscountPrice}
            </h4>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <a href="#" className="btn btn-warning btn-sm text-white">
              {Atags}
            </a>
            <a href="#" className="btn btn-info btn-sm text-white">
              {Atags1}
            </a>
            <a href="#" className="btn btn-danger btn-sm text-white">
              {Atags2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouseCard;
