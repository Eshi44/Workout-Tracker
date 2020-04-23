//require router and models
const router = require("express").Router();
const Workout = require("../models/workout.js");

///GET api/workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

///GET api/workouts/range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
      .then(dbWorkouts => {
        console.log(dbWorkouts)
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

/// POST api/workouts
router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

///PUT api/workouts/:id
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },

    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
///DELETE api/workouts








//export models
module.exports = router;