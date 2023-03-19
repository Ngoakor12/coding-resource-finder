import React from "react";
import BaseModal from "../BaseModal/BaseModal";

export default function EditBookmarkGroupModal() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <BaseModal heading={"Edit bookmark group"}>
      <form className="bookmark-group-modal-form" onSubmit={handleSubmit}>
        <div className="bookmark-group-modal-form-fields">
          <div className="bookmark-group-modal-form-field">
            <label htmlFor="bookmark-group">Group name *</label>
            <input type="text" id="bookmark-group" />
          </div>
        </div>
        <div className="bookmark-group-modal-buttons">
          <button type="button" className="new-bookmark-group-form-cancel">
            Cancel
          </button>
          <button type="submit" className="new-bookmark-group-form-submit">
            Save group
          </button>
        </div>
      </form>
    </BaseModal>
  );
}
