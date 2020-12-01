const router = require('express').Router();
const Exercise = require('../models/exercise.model');


router.route('/').get((req,res)=>{
    Exercise.find()
        .then(exercises => res.status(200).json(exercises))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req,res)=>{
    
     const def_name = req.body.def_name;
     const def_addr = req.body.def_addr;
     const crime_type = req.body.crime_type;
     const crime_date = req.body.crime_date;
     const crime_location = req.body.crime_location;
     const ao_name = req.body.ao_name;
     const arrest_date = req.body.arrest_date;
     const judge_name = req.body.judge_name;
     const lawyer_name = req.body.lawyer_name;
     const prosecutor_name = req.body.prosecutor_name;
     const start_date = req.body.start_date;
     const end_date = req.body.end_date;
     const status = req.body.status;
     const summary = req.body.summary;

    const newExercise = new Exercise({
        def_name,
        def_addr,
        crime_type,
        crime_date,
        crime_location,
        ao_name,
        arrest_date,
        judge_name,
        lawyer_name,
        prosecutor_name,
        start_date,
        end_date,
        status,
        summary
    });

    console.log(newExercise);
    
    newExercise.save()
        .then(()=>res.status(200).json('Exercise added!'))
        .catch(err => res.json('Error ' + err))
});

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => res.status(200).json(exercise))
    .catch(err => res.json('Error '+ err));
});

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Exercise deleted"))
    .catch(err => res.json('Error '+ err));
});

router.route('/update/:id').post((req,res)=>{
    Exercise.findByIdAndUpdate(req.params.id, req.body)
    .then(exercise => {

        exercise.def_name  = req.body.def_name;    
        exercise.def_addr  = req.body.def_addr;    
        exercise.crime_type = req.body.crime_date;    
        exercise.crime_date = Date.parse(req.body.crime_date);    
        exercise.crime_location = req.body.crime_location;    
        exercise.ao_name = req.body.ao_name;    
        exercise.arrest_date = req.body.arrest_date;    
        exercise.judge_name = req.body.judge_name;    
        exercise.lawyer_name = req.body.lawyer_name;    
        exercise.prosecutor_name = req.body.prosecutor_name;    
        exercise.start_date = Date.parse(req.body.start_date);    
        exercise.end_date  = Date.parse(req.body.end_date);    
        exercise.status    = req.body.status;    
        exercise.summary   = req.body.summary;    

        exercise.save()
        .then(()=> res.status(200).json(' updated'))
        .catch( err => res.status(400).json('Error ' + err));
        
    })
    .catch(err => res.status(400).json('Error '+ err));
});

module.exports = router;