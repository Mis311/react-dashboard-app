import "./featuredinfo.css";
const FeaturedInfo = () => {
  return (
    <main>
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
        <div className="featured-item">
          <span className="productivity-level">Productivity Level</span>
          <div className="productivity-level-container">
            <span className="productivity-level-number">6</span>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="featured-image-container">
          <img src=".../map.gif" alt="map-gif" width="100%" />
        </div>
      </div>
    </main>
  );
};

export default FeaturedInfo;
