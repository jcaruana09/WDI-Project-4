import React from 'react';

const PerformanceForm = ({ handleSubmit, handleChange, performance }) => {

  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <input className="input" type="text" placeholder="The Lion King" onChange={handleChange} name="name" value={performance.name || ''} />
      </div>
      <div className="field">
        <label className="label">Running Time</label>
        <input className="input" type="text" placeholder="124" onChange={handleChange} name="runningTime" value={performance.runningTime || ''} />
      </div>
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Date</label>
        </div>
        <div className="field-body">
          <div className="field">
            <input className="input" type="date" onChange={handleChange} name="startDate" value={performance.startDate || ''} />
          </div>
          <div className="field">
            <input className="input" type="date" onChange={handleChange} name="endDate" value={performance.endDate || ''} />
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Venue</label>
        <input className="input" type="text" placeholder="The National Theatre" onChange={handleChange} name="venue" value={performance.venue || ''} />
      </div>
      <div className="field">
        <label className="label">Image</label>
        <input className="input" type="text" placeholder="Image" onChange={handleChange} name="image" value={performance.image || ''} />
      </div>
      <div className="field">
        <label className="label">Description</label>
        <input className="input" type="text" placeholder="Add Description" onChange={handleChange} name="description" value={performance.description || ''} />
      </div>
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </form>
  );
};

export default PerformanceForm;
