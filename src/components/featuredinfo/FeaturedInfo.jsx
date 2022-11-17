import "./featuredinfo.css";
const FeaturedInfo = () => {
  return (
    <main className="feature-container">
      <h2 className="feature-title">Overview</h2>
      <div className="featured">
        <div className="featured-item">
          <span className="sessions">Sessions Completed</span>
          <div className="sessions-number-container">
            <span className="sessions-number">2,415</span>
          </div>
        </div>
        <div className="featured-item">
          <span className="weekly-streak">Weekly Streak</span>
          <div className="weekly-streak-container">
            <span className="weekly-streak-number">13</span>
          </div>
        </div>
        <div className="featured-item">
          <span className="contribution-points">Contribution Points</span>
          <div className="contribution-points-container">
            <span className="contribution-points-number">98</span>
          </div>
        </div>
      </div>
      
    </main>
  );
};

export default FeaturedInfo;
