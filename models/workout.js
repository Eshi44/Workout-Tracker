//require mongoose
const mongoose = require("mongoose");
//create schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
	},
	exercises: [
		{
			type: {
				type: String,
				trim: true,
				required: "Please enter an exercise type",
			},
			name: {
				type: String,
				trim: true,
				required: "Please enter an exercise name",
			},
			duration: {
				type: Number,
				required: "Please enter an exercise duration in min.",
			},
			weight: {
				type: Number,
			},
			reps: {
				type: Number,
			},
			sets: {
				type: Number,
			},
			distance: {
				type: Number,
			},
		},
	],
},
// {
// 	toJSON: { virtuals: true}
// }
);

//add virtuals that will add a property to schema/model
// workoutSchema.virtual("totalDuration").get(function () {
// 	return this.exercises.reduce((all, ex) => {
// 		return all.duration + ex.duration;
// 	})
// 	});
//creat Workout model
const Workout = mongoose.model("Workout", workoutSchema);

//export Workout
module.exports = Workout;
