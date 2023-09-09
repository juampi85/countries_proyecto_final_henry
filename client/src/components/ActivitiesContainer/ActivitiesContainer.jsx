import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Activities from '../Activities/Activities';
import { getActivities } from '../../redux/actions/actions';
import style from './ActivitiesContainer.module.css';

const ActivitiesContainer = () => {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  const [selectedActivity, setSelectedActivity] = useState('');

  useEffect(() => {
    dispatch(getActivities(selectedActivity));
  }, [dispatch, selectedActivity]);

  const uniqueActivityNames = Array.from(
    new Set(activities.map((activity) => activity.name))
  );

  return (
    <>
      <select
        value={selectedActivity}
        onChange={(e) => setSelectedActivity(e.target.value)}
        className={style.option}
      >
        <option value="">Todas las actividades</option>
        {uniqueActivityNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <div className={style.container}>
        {activities
          .filter((activity) => {
            return selectedActivity ? activity.name === selectedActivity : true;
          })
          .map((activity) => (
            <Activities
              key={activity.id}
              name={activity.name}
              duration={activity.duration}
              difficulty={activity.difficulty}
              season={activity.season}
              Countries={activity.Countries}
            />
          ))}
      </div>
    </>
  );
};

export default ActivitiesContainer;
