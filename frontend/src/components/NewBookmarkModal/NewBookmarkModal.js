import React from "react";

export default function NewBookmarkModal() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="bookmark-group-modal">
      <div className="bookmark-group-modal-header">New bookmark group</div>
      <div className="bookmark-group-modal-body">
        <form className="new-bookmark-group-form" onSubmit={handleSubmit}>
          <div className="new-bookmark-group-form-fields">
            <label htmlFor="bookmark-group">Group name *</label>
            <input type="text" id="bookmark-group" />
          </div>
          <div className="bookmark-group-modal-buttons">
            <button type="button" className="new-bookmark-group-form-cancel">
              Cancel
            </button>
            <button type="submit" className="new-bookmark-group-form-submit">
              Add group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
