import GetStartedForm from "./GetStartedForm";

const Banner = () => {
  return (
    <div className="banner-content">
      <h1>Unlimited movies, TV shows and more</h1>
      <h3>Watch anywhere, cancel anytime</h3>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <GetStartedForm />
    </div>
  );
};

export default Banner;
