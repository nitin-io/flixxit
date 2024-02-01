const GetStartedForm = () => {
  return (
    <form>
      <div className="form-input-div">
        <input type="text" className="form-input-box" placeholder="" />
        <label className="form-input-label">Email ID</label>
      </div>
      <button className="btn">Get Started &gt; </button>
    </form>
  );
};

export default GetStartedForm;
