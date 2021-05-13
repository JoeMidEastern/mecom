import { Modal, Figure } from "react-bootstrap";
import React, { useState } from "react";
import "./styleShowMore.css";

const ShowMore = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createMarkup = () => {
    return {
      __html: product.description,
    };
  };

  return (
    <>
      <p className="cursor" onClick={handleShow}>
        Show More
      </p>

      <Modal
        className="p-2"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Figure className="modal-figure">
          <Figure.Image className="modal-image" src={product.media.source} />
        </Figure>
        <Figure.Caption className="caption-style my-1">
          <h3>{product.price.formatted_with_symbol}</h3>
        </Figure.Caption>
        <Modal.Body dangerouslySetInnerHTML={createMarkup()}></Modal.Body>
      </Modal>
    </>
  );
};

export default ShowMore;
