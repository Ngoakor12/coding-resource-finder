import React from "react";

export default function NewBookmarkModal() {
  return (
    <div className="new-bookmark-group-modal">
      <div className="new-bookmark-group-form-header">New bookmark group</div>
      <form className="new-bookmark-group-form">
        <div className="new-bookmark-group-form-fields">
          <label htmlFor="bookmark-group">Group name *</label>
          <input type="text" id="bookmark-group" />
        </div>
        <div className="new-bookmark-group-form-buttons">
          <button type="button" className="new-bookmark-group-form-cancel">
            Cancel
          </button>
          <button type="submit" className="new-bookmark-group-form-submit">
            Add group
          </button>
        </div>
      </form>
    </div>
  );
}
