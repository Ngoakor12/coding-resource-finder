import React from "react";

export default function ConfirmModal({ prompt }) {
  return (
    <div className="prompt-modal-container">
      <div className="prompt-modal">
        <div className="prompt-modal-body">
          <div className="prompt-modal-promt">
            {prompt ? prompt : "Are you sure?"}
          </div>
          <div className="bookmark-group-modal-buttons">
            <button type="button" className="new-bookmark-group-form-cancel">
              Cancel
            </button>
            <button type="submit" className="new-bookmark-group-form-submit">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
