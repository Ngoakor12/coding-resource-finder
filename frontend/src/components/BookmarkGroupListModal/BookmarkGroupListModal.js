import React from "react";

export default function BookmarkGroupListModal({ bookmarkGroupList }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bookmark-group-modal">
      <div className="bookmark-group-modal-header">Bookmark groups</div>
      <div className="bookmark-group-modal-body">
        <form className="bookmark-group-modal-form" onSubmit={handleSubmit}>
          <div className="bookmark-group-modal-form-fields">
            {bookmarkGroupList.map((bookmarkGroup) => {
              return (
                <div className="bookmark-group-modal-form-field-inline">
                  <input type="checkbox" id={bookmarkGroup.id} />
                  <label htmlFor={bookmarkGroup.id}>
                    {bookmarkGroup.title}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="bookmark-group-modal-buttons">
            <button type="button" className="new-bookmark-group-form-cancel">
              Close
            </button>
            <button type="submit" className="new-bookmark-group-form-submit">
              New group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
