import { useEffect, useState } from "react";

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      //this fetches data and stores it in RESPONSE object
      const response = await fetch("/api/workouts");
      //this parses the data into json
      const json = await response.json();
      //i guess the .ok is built in? it checks to make sure we got the thing we want
      if (response.ok) {
        setWorkouts(json);
      }
    };
    //having defined our function ^, we call it once, and put the empty array there so it only runs ONCE when component gets rendered
    fetchWorkouts()}, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout}/>
          ))}
      </div>
      <WorkoutForm/>
    </div>
  );
};

export default Home;
