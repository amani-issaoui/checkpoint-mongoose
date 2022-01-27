const connectdb=require('./connectdb.js')
const Person=require('./Schema.js')
//connecxion db
connectdb()

//create and save a record of model
const newPerson= new Person({name:"Ali",age:20,favoriteFoods:['pizza','pasta']})
 newPerson.save()

//create many models with model.create
const arr=[{name:"Med",age:40,favoriteFoods:['couscous','chorba']},
            {name:"Sana",age:30,favoriteFoods:['Suchi','rice']}]
       
   Person.create(arr)  

  //use model.find to search database
  const exist=Person.find({name:"Sana"})  
  console.log(exist)   

//use model.findOne()
const findFood=(food)=>{
    return Person.findOne({favoriteFoods:{$all:[food]}})
}

//use findbyId
const findPersonById=(idPerson)=>
{
   Person.findById(idPerson)
}

//perform classic updates by running find edit then save

const updatePersonById=(idPerson)=>
{
   Person.findById(idPerson,(err,data)=>{
     if (err){console.log(err)}
     else{
       data.favoriteFoods.push("hamburger")
       data.save()
     }
   })
}

//use model.findOneAndUpdate
const findPersonByName=(personName)=>{
  Person.findOneAndUpdate({name:personName},{age:20},{new:true},(err,data)=>{
    if(err){console.log(err)}
    else{ console.log(data)}
  })
}

//use model.findByIdAndRemove
const deletePersonById=(personId)=>{
  Person.findByIdAndRemove(personId,(err,removedperson)=>{
    if(err){console.log(err)}
    else{ console.log(removedperson)}
  })
}
// delete many documents with model.remove
const deleteManyPersons=()=>{
  Person.remove({name:"Mary"},(err,deletedperson)=>{
    if(err){console.log(err)}
    else{ console.log(deletedperson)}
  })
}
 
// chain search query helpers narrow search results
Person.find({favoriteFoods:{$all:["burritos"]}})
      .sort({name:'asc'})
      .limit(2)
      .select('-age')
      .exec((err,result)=>{
        if(err){console.log(err)}
        else{ console.log(result)}
      }
      
       )

       