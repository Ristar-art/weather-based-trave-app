export function getRecommendedActivities(weather) {
    const activities = require('./data/activities.json');
    return activities.filter((activity) => {
      const temp = weather.current.temp_c;
      const condition = weather.current.condition.text;
      return (
        temp >= activity.conditions.temperature[0] &&
        temp <= activity.conditions.temperature[1] &&
        activity.conditions.weather.includes(condition)
      );
    });
  }