import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Activities from '../Activities/Activities';
import { getActivities } from '../../redux/actions/actions';
import style from './ActivitiesContainer.module.css';

const ActivitiesContainer = () => {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.container}>
      {activities.map((activity) => {
        return (
          <Activities
            key={activity.id}
            name={activity.name}
            Countries={activity.Countries}
          />
        );
      })}
    </div>
  );
};

export default ActivitiesContainer;
