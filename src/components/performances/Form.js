import React from 'react';

const PerformanceForm = () => {

  return(
    <form>
      <div className="field">
        <label className="label">Name</label>
        <input className="input" type="text" placeholder="The Lion King" />
      </div>
      <div className="field">
        <label className="label">Running Time</label>
        <input className="input" type="text" placeholder="124" />
      </div>
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Date</label>
        </div>
        <div className="field-body">
          <div className="field">
            <input className="input" type="date" />
          </div>
          <div className="field">
            <input className="input" type="date" />
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Venue</label>
        <input className="input" type="text" placeholder="The National Theatre" />
      </div>
      <div className="field">
        <label className="label">Image</label>
        <input className="input" type="text" placeholder="Image" />
      </div>
      <div className="field">
        <label className="label">Description</label>
        <input className="input" type="text" placeholder="Add Description" />
      </div>
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </form>
  );
};

export default PerformanceForm;
