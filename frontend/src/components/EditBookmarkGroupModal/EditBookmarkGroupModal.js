import React from "react";

export default function EditBookmarkGroupModal() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bookmark-group-modal">
      <div className="bookmark-group-modal-header">Edit bookmark group</div>
      <div className="bookmark-group-modal-body">
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
      </div>
    </div>
  );
}
